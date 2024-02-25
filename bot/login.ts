import { chromium } from 'playwright';
import { sleep } from './util';

async function loginToIndeedWithGoogle() {
  const browser = await chromium.launch({ headless: false }); // Set headless: false to see the browser
  const context = await browser.newContext();
  const page = await context.newPage();

  page.on('request', request => {
    console.log(`URL: ${request.url()}`);
    console.log('Request Headers:', request.headers());
  });
  
  await page.goto('https://www.indeed.ca/');

  await sleep(30000);

  await browser.close();
}

loginToIndeedWithGoogle().catch(console.error);
