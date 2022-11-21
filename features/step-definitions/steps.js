const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the {string} page', async (word) => {
    await browser.url(`https://the-internet.herokuapp.com/${word}`);
});

// for login page
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect($('#flash')).toBeExisting();
    await expect($('#flash')).toHaveTextContaining(message);
});

// for add_remove_elements page
When('I click on the Add element button', () => {
    $('div.example > button').click();
});

Then(/^I should see Delete button with text (.*)$/, async (text) => {
    await expect($('div#elements > button:nth-child(1)')).toBeExisting();
    await expect($('div#elements > button:nth-child(1)')).toHaveTextContaining(text);
});

Then(/^I should see two Delete buttons with text (.*)$/, async (text) => {
    await expect($('div#elements > button:nth-child(1)')).toBeExisting();
    await expect($('div#elements > button:nth-child(1)')).toHaveTextContaining(text);

    await expect($('div#elements > button:nth-child(2)')).toBeExisting();
    await expect($('div#elements > button:nth-child(2)')).toHaveTextContaining(text);
});

When('I click on the Delete button', () => {
    $('div#elements > button:nth-child(1)').click();
});

Then('I should not see Delete button', () => {
    if (expect($('div#elements > button:nth-child(1)')).toBeExisting()) {
        false;
        console.log('The Delete button is still exist');
    } else {
        true;
    }
});

// for checkboxes page
When(/^I click on the checkbox (.*)$/, async(number) => {
    await $('//input[@type="checkbox"]['+number+']').click();
});

Then(/^I should see checkbox (.*) checked$/, async(number) => {
    expect($('//input[@type="checkbox"]['+number+']')).toHaveAttr('checked');
});

// for key presses page
When(/^I press on the (.*) button$/, async(button) => {
    await browser.keys(['Meta', button])
});

Then(/^I should see a message saying (.*)$/, async (message) => {
    await expect($('#result')).toBeExisting();
    await expect($('#result')).toHaveTextContaining(message);
});

// for hovers page
When(/^I move to the (.*) icon$/, async(number) => {
    await $('(//div[@class = "figure"]//img)['+number+']').moveTo()
});

Then(/^I should see the (.*) user profile with name (.*)$/, async (number, name) => {
    await expect($('(//div[@class = "figcaption"]//h5)['+number+']')).toBeExisting();
    await expect($('(//div[@class = "figcaption"]//h5)['+number+']')).toHaveTextContaining(name);
});