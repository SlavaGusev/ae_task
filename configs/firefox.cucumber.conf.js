import { mainConfig } from "../framework/configs/main.wdio.conf.js"
 
export const config = {
  ...mainConfig,
  ...{
    framework: "cucumber",
    cucumberOpts: {
      require: ["./test/step-definitions/**/*.js"],
    },
    specs: ["../test/features/**/*.feature"],
    capabilities: [
      {
        browserName: "firefox",
        "moz:firefoxOptions": {
          args: [
            "--start-maximized",
            "--lang=en-EN",
            "--headless",
            "--no-sandbox",
            "--disable-gpu",
          ]
        },
      },
    ],
  },
}
