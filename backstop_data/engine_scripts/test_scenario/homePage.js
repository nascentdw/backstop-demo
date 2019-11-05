const starter = require("../common")

module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('../puppet/clickAndHoverHelper')(page, scenario);

  // add more ready handlers here...
  await page.waitFor(5000)
};