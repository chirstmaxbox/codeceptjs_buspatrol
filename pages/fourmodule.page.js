const { I } = inject();

module.exports = {
  // insert your locators and methods here
  fields: {
    cd_ielts_menu: ".dropdown > a[href='/ielts']",
    pte_menu: ".dropdown > a[href='/pte']",
    celpip_menu: ".dropdown > a[href='/celpip']",
    cael_menu: ".dropdown > a[href='/cael']",
    about_sub_menu: ".dropdown-menu > li > a[href='/ielts']",
    pricing_package_sub_menu:
      ".dropdown-menu > li > a[href='/ielts-packages-pricing']",
    any_question_button: "//div[contains(@class, 'any_q_btn')]/div/a",
    any_question_modal: "#exampleModalLabel",
    close_button_modal:
      "//div[contains(@class, 'modal-header')]/button[@class='close']",
    take_free_demo_button: "a[href='/signup'] > button",
  },
};
