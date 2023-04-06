Feature("Website Testing");

Scenario("test for scenario 1", ({ I, fourmodulePage }) => {
  I.amOnPage("https://www.fourmodules.com/");
  I.moveCursorTo(fourmodulePage.fields.cd_ielts_menu);
  I.see("About", fourmodulePage.fields.about_sub_menu);
  I.see("Pricing & Package", fourmodulePage.fields.pricing_package_sub_menu);
  I.click(fourmodulePage.fields.about_sub_menu);
  I.seeCurrentUrlEquals("https://www.fourmodules.com/ielts");
  I.seeTextEquals("ANY QUESTIONS?", fourmodulePage.fields.any_question_button);
  I.click(fourmodulePage.fields.any_question_button);
  I.seeTextEquals("How can we help?", fourmodulePage.fields.any_question_modal);
  I.click(fourmodulePage.fields.close_button_modal);
  I.click(fourmodulePage.fields.take_free_demo_button);
  I.seeCurrentUrlEquals("https://www.fourmodules.com/signup");
});

Scenario("test for scenario 2", ({ I, fourmodulePage }) => {
  I.amOnPage("https://www.fourmodules.com/");
  I.checkHREFPrint(fourmodulePage.fields.cd_ielts_menu);
  I.checkHREFPrint(fourmodulePage.fields.pte_menu);
  I.checkHREFPrint(fourmodulePage.fields.celpip_menu);
  I.checkHREFPrint(fourmodulePage.fields.cael_menu);
});

Scenario("test for scenario 3", ({ I, boardgamePage }) => {
  I.amOnPage("https://www.boardgamegeek.com/advsearch/boardgame.com/");
  I.fillField(
    boardgamePage.fields.title_text,
    "Harry Potter and the Sorcerer's Stone Trivia Game"
  );
  I.fillField(boardgamePage.fields.year_published_min, "1999");
  I.fillField(boardgamePage.fields.year_published_max, "2000");
  I.scrollTo(boardgamePage.fields.min_player_time);
  tryTo(() =>
    I.selectOption(boardgamePage.fields.min_player_time, "15 minutes")
  );
  tryTo(() =>
    I.selectOption(boardgamePage.fields.max_player_time, "1.5 hours")
  );
  I.click(boardgamePage.fields.submit_button);
  I.see(
    "Harry Potter and the Sorcerer's Stone Trivia Game (2000)",
    boardgamePage.fields.result
  );
});

Scenario("test for scenario 4", async ({ I, spicejetPage, MyCustomHelper }) => {
  await I.amOnPage("https://www.spicejet.com/");
  await I.checkOption(spicejetPage.fields.round_trip_radio);
  await I.fillField(spicejetPage.fields.from, "Agra (AGR)");
  await I.fillField(spicejetPage.fields.to, "Jaipur (JAI)");
  await I.scrollTo(spicejetPage.fields.departure_date);
  await I.click(spicejetPage.fields.may_first);
  await I.click(spicejetPage.fields.may_fifteen);
  await I.click(spicejetPage.fields.passengers);
  await I.click(spicejetPage.fields.adults);
  for (let i = 1; i <= 3; i++) {
    await I.click(spicejetPage.fields.children);
  }
  await I.click(spicejetPage.fields.infants);
  await I.scrollTo(spicejetPage.fields.round_trip_radio);
  await I.click(spicejetPage.fields.currency_dropdown);
  await I.click(spicejetPage.fields.usd_currency);
  await I.click(spicejetPage.fields.search_button);
  await I.waitForVisible(spicejetPage.fields.modify_search_button, 10);
  await I.dontSeeCurrentUrlEquals("https://www.spicejet.com/");
  console.log("url=" + (await MyCustomHelper.getCurrentUrl()));
});
