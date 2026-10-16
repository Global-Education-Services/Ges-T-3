const http = require('http');

const urls = [
  '/',
  '/about',
  '/schools',
  '/operational',
  '/partner',
  '/careers',
  '/news',
  '/contact',
  '/index.php',
  '/about.php',
  '/schools.php',
  '/operational.php',
  '/partner.php',
  '/careers.php',
  '/news.php',
  '/contact.php',
  '/assets/downloads/GES%20Corporate%20Broucher.pdf',
  '/assets/downloads/awards.pdf'
];

async function checkUrl(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      resolve({
        path,
        status: res.statusCode,
        location: res.headers.location || null
      });
    }).on('error', (err) => {
      resolve({
        path,
        status: 'ERROR',
        error: err.message
      });
    });
  });
}

async function run() {
  console.log('Testing all endpoints on http://localhost:3000 ...\n');
  let passCount = 0;
  for (const u of urls) {
    const res = await checkUrl(u);
    const isOk = res.status === 200 || res.status === 307 || res.status === 308;
    if (isOk) passCount++;
    console.log(`${isOk ? '✓ PASS' : '✗ FAIL'} [${res.status}] ${res.path} ${res.location ? '-> ' + res.location : ''}`);
  }
  console.log(`\nResult: ${passCount} / ${urls.length} passed.`);
}

run();
