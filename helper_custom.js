let Helper = codecept_helper;

class MyCustomHelper extends Helper {
  async getCurrentUrl() {
    const helper = this.helpers["Puppeteer"];
    return helper.page.url();
  }
}

module.exports = new MyCustomHelper();
