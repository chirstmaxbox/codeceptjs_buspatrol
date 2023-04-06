// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({
    checkHREFPrint: function (object) {
      this.moveCursorTo(object);
      this.seeElement(object);
    },
  });
};
