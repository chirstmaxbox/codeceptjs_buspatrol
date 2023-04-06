This is acceptance test framework using codeceptjs and puppeteer. Here is some explanation and how to run it.

- Clone the code from Github and put it anywhere in your computer
- Open terminal and navigate it to the current folder
- run command line "npm install" => install all dependent packages before running the test
- run command line "npm run test"
  - Verify the test result both console log and browser
  - File structure:
    - The file ac_test.js is containing 4 test scenarios
    - /pages folder contain all page objects
    - codecept.conf.js is to configure what the helper is (we are using puppeteer)
    - helper_custome.js to define a method to get the current url for test scenario 4
    - steps_file.js define custome methods for actor (I)
    - output folder contains screenshot of failed screen/page.

That's it
