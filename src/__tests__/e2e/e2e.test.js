import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import { jest, describe, test, expect, beforeAll, afterAll } from '@jest/globals';  // <-- импорт jest

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

jest.setTimeout(60000); 

describe('Credit Card Validator form', () => {
  let server;
  let browser;
  let page;

  beforeAll(async () => {
    server = spawn('node', [path.resolve(__dirname, 'e2e.server.js')], {
      stdio: ['inherit', 'pipe', 'pipe'],
    });

    // Ждём запуска сервера по выводу в stdout
    await new Promise((resolve, reject) => {
      server.stdout.on('data', (data) => {
        const msg = data.toString();
        console.log('[DevServer STDOUT]', msg);
        if (msg.includes('DevServer started')) {
          setTimeout(resolve, 500); // даём время серверу окончательно подняться
        }
      });

      server.stderr.on('data', (data) => {
        const msg = data.toString();
        console.error('[DevServer STDERR]', msg);
      });

      server.on('error', reject);
      server.on('exit', (code) => {
        if (code !== 0) reject(new Error(`DevServer exited with code ${code}`));
      });
    });

    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    if (browser) await browser.close();
    if (server) server.kill();
  });

  test('should load the page without crashing and contain header text', async () => {
    await page.goto('http://localhost:9000');
    await page.waitForSelector('h1');

    const headerText = await page.$eval('h1', el => el.textContent);
    expect(headerText).toContain('Credit Card Validator');
  });
});
