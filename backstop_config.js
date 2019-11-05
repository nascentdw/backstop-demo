const viewports = [
  {
    name: 'phone',
    width: 320,
    height: 480
  },
  {
    name: 'desktop',
    width: 1280,
    height: 768
  }
]

const baseURL = 'https://nascentdigital.com'
//const baseURL = 'https://www.telus.com/my-account'

const paths =  {
  bitmaps_reference: 'backstop_data/bitmaps_reference',
  bitmaps_test: 'backstop_data/bitmaps_test',
  html_report: 'backstop_data/html_report',
  ci_report: 'backstop_data/ci_report'
}

module.exports = {
  id: 'test',
  viewports: viewports,
  scenarios: [
    {
      label: 'HomePage',
      url: baseURL,
      onReadyScript: 'test_scenario/homePage.js'
    },
    {
      label: 'Careers page',
      url: baseURL,
      onReadyScript: 'test_scenario/careers.js'
    },
    {
      label: 'contact page',
      url: baseURL,
      onReadyScript: 'test_scenario/contactus.js'
    },
    {
      label: 'internship page',
      url: baseURL,
      onReadyScript: 'test_scenario/internship.js'
    },
    {
      label: 'opportunities page',
      url: baseURL,
      onReadyScript: 'test_scenario/opportunities.js'
    },
  ],
  paths: paths,
  report: ['browser'],
  engine: "puppeteer",
  engineOptions: {
    "args": ["--no-sandbox"]
  },
  asyncCaptureLimit: 2,
  asyncCompareLimit: 25,
  debug: false,
  debugWindow: false
};