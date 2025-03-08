import { mainConfig } from "../framework/configs/main.wdio.conf.js"
import { v4 as uuidv4 } from 'uuid';
 
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
        browserName: "chrome",
        "goog:chromeOptions": {          
          args: [
            "--start-maximized",
            "--lang=en-EN",
            "--headless",
            "--no-sandbox",
            "--disable-gpu",
            `--user-data-dir=/app/chrome-user-data`
          ]
        },
      },
    ],
  },
}
