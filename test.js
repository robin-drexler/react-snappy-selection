const path = require('path');
const assert = require('assert');
const puppeteer = require('puppeteer');
const { spawn, spawnSync } = require('child_process');

function assertNotSnappy(selectedText) {
  assert(
    selectedText.length > 50,
    `Everything should be selected, so it should be rather long :), but got ${selectedText}`
  );
}

async function runTest(url) {
  console.log('runtest', url);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 768 });

  const getSelectedText = async () =>
    page.evaluate(() => {
      return window.getSelection().toString();
    });

  await page.goto(url, { waitUntil: 'networkidle2' });

  await page.click('span:nth-child(1)', { clickCount: 3 });
  assertNotSnappy(await getSelectedText());

  await page.click('span:nth-child(2)', { clickCount: 3 });
  assert((await getSelectedText()) === 'This is snappy', 'This is snappy');

  await page.click('span:nth-child(3)', { clickCount: 3 });
  assertNotSnappy(await getSelectedText());

  await page.click('span:nth-child(4)', { clickCount: 3 });
  assert(
    (await getSelectedText()) === 'This is also snappy',
    'This is also snappy'
  );

  await page.click('span:nth-child(5)', { clickCount: 3 });
  assert(
    (await getSelectedText()) === 'This is also snappy and has onclick',
    'This is also snappy and has onclick'
  );

  await page.click('span:nth-child(6)', { clickCount: 3 });

  assert(
    (await getSelectedText()) === 'This is custom and snappy',
    'This is custom and snappy'
  );

  await browser.close();
}

// Smoke test suite that works as follows:
// Demo hops app is started, once that is done puppeteer clicks on
// snappy and non-snappy texts and checks if the currently selected texts matches expectations
// To have a manual look cd into ./demo and run yarn start
(async () => {
  spawnSync('yarn');
  const child = spawn('yarn', ['start'], { cwd: path.resolve('./demo') });
  child.stdout.on('data', async (data) => {
    console.log(data.toString().trim());
    const url = data
      .toString()
      .trim()
      .match(/(http.*$)/);
    if (url) {
      try {
        await runTest(url[0]);
        child.kill();
      } catch (e) {
        console.log(e);
        child.kill();
        process.exit(1);
      }
    }
  });
})();
