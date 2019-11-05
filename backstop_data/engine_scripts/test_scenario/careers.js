const starter = require("../common")

module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('../puppet/clickAndHoverHelper')(page, scenario);
  const selector = "#root > div > footer";

  // add more ready handlers here...
  await page.goto(starter.gotoLinks.careers)
  await page.waitFor(selector)
  await page.evaluate(selector => {
    document.querySelector(selector).scrollIntoView();
  }, selector);
  await page.waitFor(5000)
};