const puppeteer = require('puppeteer')

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 250,
    devtools: true,
  }
  return process.env.NODE_ENV === 'debug' ? debugging_mode : {}
}

let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch(isDebugging())
  page = await browser.newPage()
  await page.goto('http://localhost:3000/')
  page.setViewport({ width: 500, height: 2400 })
})

afterAll(() => {
  if (isDebugging()) {
    browser.close()
  }
})

describe('on page load', () => {
  it('loads questions', async () => {
    const html = await page.$eval('.questionCount', e => e.innerHTML);
    expect(html).toContain('Question <span>1</span>');
  })

  it('loads answer options', async () => {
    const answerOptions = await page.$eval('.answerOptions', el => el ? true : false)
    const listItems = await page.$$('.answerOption')
    expect(answerOptions).toBe(true)
    expect(listItems.length).toBeGreaterThan(1)
  });

})