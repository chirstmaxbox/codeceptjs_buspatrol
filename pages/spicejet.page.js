const { I } = inject();

module.exports = {
  fields: {
    round_trip_radio: "//div[@data-testid='round-trip-radio-button']",
    from: "//div[@data-testid='to-testID-origin']/div/div/input",
    to: "//div[@data-testid='to-testID-destination']/div/div/input",
    departure_calendar: "//div[@data-testid='undefined-calendar-picker']",
    departure_date:
      "//div[@data-testid='departure-date-dropdown-label-test-id']",
    may_first:
      "//div[@data-testid='undefined-month-May-2023']/div/div/div[@data-testid='undefined-calendar-day-1']",
    may_fifteen:
      "//div[@data-testid='undefined-month-May-2023']/div/div/div[@data-testid='undefined-calendar-day-15']",
    passengers: "//div[@data-testid='home-page-travellers']",
    adults: "//div[@data-testid='Adult-testID-plus-one-cta']",
    children: "//div[@data-testid='Children-testID-plus-one-cta']",
    infants: "//div[@data-testid='Infant-testID-plus-one-cta']",
    currency_dropdown: "//div[text()='Currency']",
    usd_currency: "//div[text()='USD']",
    search_button: "//div[@data-testid='home-page-flight-cta']",
    modify_search_button: "//div[text()='Modify Search']",
  },

  // insert your locators and methods here
};
