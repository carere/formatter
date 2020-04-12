require("cucumber-html-reporter").generate({
  theme: "bootstrap",
  jsonFile: "test/report/cucumber_report.json",
  output: "test/report/cucumber_report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    "App Version": "0.1.0",
    "Test Environment": "DEVELOPMENT",
    Platform: "Linux",
    Date: new Date().toUTCString(),
  },
});
