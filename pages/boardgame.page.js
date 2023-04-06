const { I } = inject();

module.exports = {
  fields: {
    title_text: "#advsearch-title",
    year_published_min: "#advsearch-yearpublished-min",
    year_published_max: "#advsearch-yearpublished-max",
    min_player_time: "//select[@id='advsearch-min-playing-time']",
    max_player_time: "//select[@id='advsearch-max-playing-time']",
    submit_button: "//input[@type='submit']",
    result: "#results_objectname1",
  },
};
