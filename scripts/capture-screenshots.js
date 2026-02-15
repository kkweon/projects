import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const PORT = process.env.PORT || 4321;
const BASE_URL = `http://localhost:${PORT}`;
const OUTPUT_DIR = '__screenshots__';

async function captureScreenshots() {
  console.log(`Starting screenshot capture on ${BASE_URL}...`);

  if (!fs.existsSync(OUTPUT_DIR)){
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Navigate to the page
    console.log(`Navigating to ${BASE_URL}...`);
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    // Desktop View
    console.log('Capturing Desktop View...');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.screenshot({ path: path.join(OUTPUT_DIR, 'desktop.png'), fullPage: true });

    // Mobile View
    console.log('Capturing Mobile View...');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(OUTPUT_DIR, 'mobile.png'), fullPage: true });

    console.log('Screenshots captured successfully!');
  } catch (error) {
    console.error('Error capturing screenshots:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

captureScreenshots();
