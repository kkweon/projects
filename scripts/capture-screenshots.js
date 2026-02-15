import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import config from '../astro.config.mjs';

// Get base path from config, default to empty string if not set
// Ensure it starts with / if it exists and isn't empty, but usually it's set correctly in config
const BASE_PATH = config.base || '';
const PORT = process.env.PORT || 4321;
const BASE_URL = `http://localhost:${PORT}${BASE_PATH}`;
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
    // Use domcontentloaded as we will manually handle waiting for elements
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });

    // Wait for the hero title to ensure the app is mounted
    console.log('Waiting for hero title...');
    await page.waitForSelector('.hero-title', { state: 'visible', timeout: 30000 });

    // Inject CSS to disable animations and force visibility of reveal elements
    // This ensures all elements (like project cards) are visible immediately
    // without waiting for intersection observers or CSS transitions.
    console.log('Injecting CSS to force visibility...');
    await page.addStyleTag({ content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
      .reveal, .reveal-stagger {
        opacity: 1 !important;
        transform: none !important;
        visibility: visible !important;
      }
    `});

    // Wait a moment for styles to apply and layout to stabilize
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Helper to scroll page to trigger lazy loaded images
    const triggerLazyLoad = async () => {
      await page.evaluate(async () => {
        // Scroll down
        window.scrollTo(0, document.body.scrollHeight);
        await new Promise(resolve => setTimeout(resolve, 500));
        // Scroll back up
        window.scrollTo(0, 0);
        await new Promise(resolve => setTimeout(resolve, 500));
      });
    };

    // Desktop View
    console.log('Capturing Desktop View...');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await triggerLazyLoad();
    await page.screenshot({ path: path.join(OUTPUT_DIR, 'desktop.png'), fullPage: true });

    // Mobile View
    console.log('Capturing Mobile View...');
    await page.setViewportSize({ width: 375, height: 667 });
    await triggerLazyLoad();
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
