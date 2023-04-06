const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "http://localhost",
      show: true,
      windowSize: "1200x900",
      waitForNavigation: "networkidle0",
      waitForAction: 2000,
      fullPageScreenshots: true,
    },
    /*
    WebDriver: {
      url: "https://myapp.com",
      browser: "chrome",
      host: "127.0.0.1",
      port: 4444,
      restart: false,
      windowSize: "1920x1680",
      desiredCapabilities: {
        chromeOptions: {
          args: [ "--disable-gpu", "--no-sandbox"],
        },
      },
    },*/
  },
  plugins: {
    tryTo: {
      enabled: true,
    },
  },
  include: {
    I: "./steps_file.js",
    fourmodulePage: "./pages/fourmodule.page.js",
    boardgamePage: "./pages/boardgame.page.js",
    spicejetPage: "./pages/spicejet.page.js",
    MyCustomHelper: "./helper_custom.js",
  },
  name: "Codeceptjs_Puppeteer",
};
