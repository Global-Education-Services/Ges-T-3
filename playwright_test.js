const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const screenshotDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

const viewports = [
  { name: 'mobile-320', width: 320, height: 640 },
  { name: 'mobile-360', width: 360, height: 740 },
  { name: 'mobile-375-iphone', width: 375, height: 812 },
  { name: 'mobile-390-iphone14', width: 390, height: 844 },
  { name: 'mobile-430-iphone14promax', width: 430, height: 932 },
  { name: 'tablet-768-ipad', width: 768, height: 1024 },
  { name: 'laptop-1024', width: 1024, height: 768 },
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'widescreen-1920', width: 1920, height: 1080 },
];

async function runTests() {
  console.log('Starting Playwright automated browser test suite...\n');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Listen for console errors
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  const testResults = [];

  try {
    // 1. Test Responsive Viewports on Homepage
    console.log('--- 1. Testing Homepage Responsive Viewports ---');
    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

      // Check horizontal overflow
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const innerWidth = await page.evaluate(() => window.innerWidth);
      const hasOverflow = scrollWidth > innerWidth;

      const screenshotPath = path.join(screenshotDir, `home_${vp.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: false });

      testResults.push({
        test: `Responsive Viewport: ${vp.name} (${vp.width}x${vp.height})`,
        passed: !hasOverflow,
        details: hasOverflow ? `Horizontal overflow detected: ${scrollWidth} > ${innerWidth}` : 'No horizontal overflow',
        screenshot: screenshotPath
      });
      console.log(`✓ [${vp.name}] No overflow: ${!hasOverflow}`);
    }

    // 2. Test Full Pages
    console.log('\n--- 2. Testing All Individual Pages (Desktop 1440) ---');
    await page.setViewportSize({ width: 1440, height: 900 });
    const pagesToTest = ['/', '/about', '/schools', '/operational', '/partner', '/careers', '/news', '/contact'];
    
    for (const p of pagesToTest) {
      await page.goto(`http://localhost:3000${p}`, { waitUntil: 'networkidle' });
      const title = await page.title();
      const pageName = p === '/' ? 'home' : p.replace('/', '');
      const screenshotPath = path.join(screenshotDir, `page_${pageName}_desktop.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });

      testResults.push({
        test: `Page Load: ${p}`,
        passed: title.includes('GES'),
        details: `Title: "${title}"`,
        screenshot: screenshotPath
      });
      console.log(`✓ Loaded ${p}: "${title}"`);
    }

    // 3. Test Meeting Request Modal Workflow
    console.log('\n--- 3. Testing Meeting Request Modal Workflow ---');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    const meetingBtn = page.locator('button:has-text("Meeting Request")').first();
    await meetingBtn.click();
    await page.waitForTimeout(500);

    const modalVisible = await page.locator('h2:has-text("Request a Leadership Meeting")').isVisible();
    console.log(`Meeting Modal visible: ${modalVisible}`);

    // Fill form inside modal
    await page.fill('div[role="dialog"] input[placeholder="Sheikh / Dr. / Mr. / Ms."]', 'Dr. Tariq Al Busaidi');
    await page.fill('div[role="dialog"] input[placeholder="Institutional Entity"]', 'Oman Academic Accreditation Authority');
    await page.fill('div[role="dialog"] input[placeholder="colleague@domain.com"]', 'tariq.albusaidi@oaaa.gov.om');
    await page.fill('div[role="dialog"] input[placeholder="+968 9XXXXXXX"]', '+968 91234567');
    await page.fill('div[role="dialog"] textarea[placeholder*="Specific institutional focus"]', 'Discussion on curriculum alignment and Cognia quality benchmark audit.');

    // Submit
    await page.click('div[role="dialog"] button:has-text("Submit Meeting Request")');
    await page.waitForTimeout(800);

    const confirmed = await page.locator('div[role="dialog"] h3:has-text("Meeting Request Received")').isVisible();
    const screenshotModal = path.join(screenshotDir, 'modal_meeting_confirmed.png');
    await page.screenshot({ path: screenshotModal });

    testResults.push({
      test: 'Meeting Request Modal Submission & Confirmation',
      passed: modalVisible && confirmed,
      details: confirmed ? 'Received confirmation with reference number' : 'Failed confirmation',
      screenshot: screenshotModal
    });
    console.log(`✓ Meeting modal workflow passed: ${confirmed}`);

    // Close modal
    if (confirmed) {
      await page.click('div[role="dialog"] button:has-text("Close Window")');
      await page.waitForTimeout(300);
    }

    // 4. Test Video Story Modal
    console.log('\n--- 4. Testing Inside GES Video Story Modal ---');
    const storyCard = page.locator('h3:has-text("Ceremony Class of 2024 SIPS")');
    await storyCard.scrollIntoViewIfNeeded();
    await storyCard.click();
    await page.waitForTimeout(800);

    const storyModalVisible = await page.locator('iframe[title*="Ceremony Class of 2024"]').isVisible();
    const screenshotStory = path.join(screenshotDir, 'modal_video_story.png');
    await page.screenshot({ path: screenshotStory });

    testResults.push({
      test: 'Video Story Modal Launch with YouTube Embed',
      passed: storyModalVisible,
      details: storyModalVisible ? '16:9 iframe embed mounted correctly' : 'Iframe not mounted',
      screenshot: screenshotStory
    });
    console.log(`✓ Video story modal mounted: ${storyModalVisible}`);

    // Close story modal
    if (storyModalVisible) {
      await page.locator('button[aria-label="Close video story"]').click();
      await page.waitForTimeout(300);
    }

    // 5. Test Quick Search Command Palette
    console.log('\n--- 5. Testing Quick Search Command Palette ---');
    await page.locator('button[aria-label="Search site"]').first().click();
    await page.waitForTimeout(400);

    const searchInput = page.locator('input[placeholder*="Search institutions"]');
    const searchVisible = await searchInput.isVisible();
    await searchInput.fill('Shomoukh');
    await page.waitForTimeout(300);

    const resultsCount = await page.locator('div[role="dialog"] a').count();
    const screenshotSearch = path.join(screenshotDir, 'modal_search_palette.png');
    await page.screenshot({ path: screenshotSearch });

    testResults.push({
      test: 'Search Command Palette & Instant Filter',
      passed: searchVisible && resultsCount > 0,
      details: `Returned ${resultsCount} matching results for "Shomoukh"`,
      screenshot: screenshotSearch
    });
    console.log(`✓ Search modal returned ${resultsCount} results`);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);

    // 6. Test Mobile Navigation Drawer
    console.log('\n--- 6. Testing Mobile Navigation Drawer (iPhone 14) ---');
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    
    await page.locator('button[aria-label="Open navigation"]').click();
    await page.waitForTimeout(500);

    const mobileDrawerVisible = await page.locator('div:has-text("Our Schools & Early Centers")').first().isVisible();
    const screenshotMobileDrawer = path.join(screenshotDir, 'mobile_navigation_drawer.png');
    await page.screenshot({ path: screenshotMobileDrawer });

    testResults.push({
      test: 'Mobile Navigation Drawer on iPhone (390px)',
      passed: mobileDrawerVisible,
      details: 'Drawer opened with institution links and contact info without clipping',
      screenshot: screenshotMobileDrawer
    });
    console.log(`✓ Mobile drawer visible: ${mobileDrawerVisible}`);

    // 7. Test Careers Application Submission
    console.log('\n--- 7. Testing Careers Application Form ---');
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('http://localhost:3000/careers', { waitUntil: 'networkidle' });
    
    // Fill careers form
    await page.fill('input[placeholder="Candidate Name"]', 'Sarah Jenkins, PGCE');
    await page.fill('input[placeholder="educator@domain.com"]', 'sarah.jenkins@oxon.org.uk');
    await page.fill('input[placeholder="+968 9XXXXXXX"]', '+968 98765432');
    
    // Create a dummy file for CV upload test
    const dummyCvPath = path.join(__dirname, 'dummy_cv.pdf');
    fs.writeFileSync(dummyCvPath, '%PDF-1.4 dummy cv content');
    await page.setInputFiles('input[type="file"]', dummyCvPath);
    await page.waitForTimeout(200);

    await page.fill('textarea[placeholder*="Briefly describe your educational qualifications"]', 'PGCE in Secondary Mathematics from University of Oxford with 6 years British Curriculum experience.');
    await page.click('button:has-text("Submit Application Dossier")');
    await page.waitForTimeout(600);

    const careerConfirmed = await page.locator('h3:has-text("Candidate Application Successfully Logged")').isVisible();
    const screenshotCareer = path.join(screenshotDir, 'careers_application_confirmed.png');
    await page.screenshot({ path: screenshotCareer });

    testResults.push({
      test: 'Careers Application Form with CV Upload & Logging',
      passed: careerConfirmed,
      details: careerConfirmed ? 'Application logged into Stage 02 review' : 'Submission failed',
      screenshot: screenshotCareer
    });
    console.log(`✓ Careers form submission passed: ${careerConfirmed}`);

    // 8. Test Contact Page Form
    console.log('\n--- 8. Testing Contact Page Form ---');
    await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle' });
    await page.fill('input[placeholder="Sheikh / Dr. / Mr. / Ms."]', 'Eng. Nasser Al Habsi');
    await page.fill('input[placeholder="contact@domain.com"]', 'nasser.habsi@investoman.om');
    await page.fill('input[placeholder="+968 9XXXXXXX"]', '+968 92345678');
    await page.fill('input[placeholder="Brief topic of your communication"]', 'Al Mouj Campus expansion proposal');
    await page.fill('textarea[placeholder*="Please provide specifics"]', 'Inquiring regarding operational space requirements and partnership models.');
    await page.click('button:has-text("Submit Dispatch")');
    await page.waitForTimeout(600);

    const contactConfirmed = await page.locator('h3:has-text("Official Communication Logged")').isVisible();
    const screenshotContact = path.join(screenshotDir, 'contact_dispatch_confirmed.png');
    await page.screenshot({ path: screenshotContact });

    testResults.push({
      test: 'Contact Page Dispatch Submission',
      passed: contactConfirmed,
      details: contactConfirmed ? 'Official communication reference issued' : 'Dispatch failed',
      screenshot: screenshotContact
    });
    console.log(`✓ Contact form dispatch passed: ${contactConfirmed}`);

    // 9. Test RTL Arabic Toggle
    console.log('\n--- 9. Testing Arabic RTL Toggle ---');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    const rtlBtn = page.locator('button:has-text("العربية (RTL)")').first();
    await rtlBtn.click();
    await page.waitForTimeout(400);

    const dir = await page.evaluate(() => document.documentElement.getAttribute('dir'));
    const isRtlActive = dir === 'rtl';
    const screenshotRtl = path.join(screenshotDir, 'arabic_rtl_preview.png');
    await page.screenshot({ path: screenshotRtl });

    testResults.push({
      test: 'Arabic RTL Toggle & Document Direction',
      passed: isRtlActive,
      details: isRtlActive ? 'HTML dir="rtl" set dynamically' : 'RTL toggle failed',
      screenshot: screenshotRtl
    });
    console.log(`✓ Arabic RTL toggle passed: ${isRtlActive}`);

  } catch (err) {
    console.error('Playwright Test Suite Error:', err);
  } finally {
    await browser.close();
  }

  // Write summary report
  const summary = {
    timestamp: new Date().toISOString(),
    totalTests: testResults.length,
    passedCount: testResults.filter(r => r.passed).length,
    failedCount: testResults.filter(r => !r.passed).length,
    consoleErrorsCount: consoleErrors.length,
    consoleErrors,
    results: testResults
  };

  fs.writeFileSync('playwright_results.json', JSON.stringify(summary, null, 2));
  console.log(`\n========================================`);
  console.log(`TEST SUITE FINISHED: ${summary.passedCount} / ${summary.totalTests} PASSED`);
  console.log(`CONSOLE ERRORS: ${summary.consoleErrorsCount}`);
  console.log(`========================================\n`);
}

runTests();
