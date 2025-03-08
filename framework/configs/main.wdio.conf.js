export const mainConfig = {
  baseUrl: "https://store.steampowered.com/",
  runner: "local",
  exclude: [],
  maxInstances: 1,
  logLevel: "warn",
  bail: 0,
  waitforTimeout: 0,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        useCucumberStepReporter: true,
        disableMochaHooks: true,
      },
    ],
  ],

  afterTest: async function (test, context, { error, result, duration, passed, retries }) {
    if (!passed) {
      await browser.takeScreenshot()
    }
  },
}
