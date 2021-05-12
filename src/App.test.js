const puppeteer = require('puppeteer')

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 250,
    devtools: true,
  };
  return process.env.NODE_ENV.indexOf("debug") === 0 ? debugging_mode : {};
};

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch(isDebugging());
  page = await browser.newPage();
  await page.goto("http://localhost:3000/");
  page.setViewport({ width: 500, height: 2400 });
});

afterAll(() => {
  if (isDebugging()) {
    browser.close();
  }
});

describe("on page load", () => {
  it("loads questions", async () => {
    await page.waitForXPath("//*[@class='questionCount' and contains(., '1')]");

    const answerOptions = await page.$eval(".answerOptions", (el) =>
      el ? true : false
    );
    const listItems = await page.$$(".alternative");
    expect(answerOptions).toBe(true);
    expect(listItems.length).toBeGreaterThan(1);

    await page.click(".submit");
    await page.waitForXPath("//*[@class='questionCount' and contains(., '2')]");

    await page.click(".submit");
    await page.waitForXPath("//*[@class='questionCount' and contains(., '3')]");

    await page.click(".submit");
    await page.waitForXPath("//*[@class='questionCount' and contains(., '4')]");

    await page.click(".submit");
    await page.waitForXPath("//*[@class='questionCount' and contains(., '5')]");
  });
});
