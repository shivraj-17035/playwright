import { test } from '@playwright/test';
import {ENVIRONMENT} from '../constants/Constants';

test('verify MCR item access for mcr full user', async ({ page }) => {
    const env:string = process.env.STAGING || 'qa';
    const loginUrl:string=ENVIRONMENT[env].LOGIN_URL;
    const userName:string=ENVIRONMENT[env].USER.FULL_ACCESS_USER.username;
    const password:string=ENVIRONMENT[env].USER.FULL_ACCESS_USER.password;

    await page.goto(loginUrl);
    console.log(`Open login page in ${env} env`)
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(userName);
    await page.getByLabel('Username').press('Tab');
    await page.getByLabel('Password').fill(password);
    await page.getByLabel('Password').press('Enter');
    console.log(`Proceed login`);

    //Access All Open List
    console.log(`Start verify all open job list`);
    await page.getByRole('link', { name: 'All Open' }).click();
    await page.getByPlaceholder('Search all Open Jobs').click();
    await page.getByPlaceholder('Search all Open Jobs').fill('test');
    await page.getByPlaceholder('Search all Open Jobs').press('Enter');
    await page.getByRole('button', { name: 'Cancel' }).click();
    console.log(`Verified all open job list`);

    //Access Opportunities List
    console.log(`Start verify Opportunities job list`);
    await page.getByRole('link', { name: 'Opportunities' }).click();
    await page.getByPlaceholder('Search Opportunities').click();
    await page.getByPlaceholder('Search Opportunities').fill('test');
    await page.getByPlaceholder('Search Opportunities').press('Enter');
    await page.getByRole('button', { name: 'Cancel' }).click();
    console.log(`Verified Opportunities job list`);

    //Access Repair Orders List
    console.log(`Start verify Repair Orders job list`);
    await page.getByRole('link', { name: 'Repair Orders' }).click();
    await page.getByPlaceholder('Search Repair Orders').click();
    await page.getByPlaceholder('Search Repair Orders').fill('test');
    await page.getByPlaceholder('Search Repair Orders').press('Enter');
    await page.getByRole('button', { name: 'Cancel' }).click();
    console.log(`Verified Repair Orders job list`);

    //Access All Closed List
    console.log(`Start verify All Closed job list`);
    await page.getByRole('link', { name: 'All Closed' }).click();
    await page.getByPlaceholder('Search all Closed Jobs').click();
    await page.getByPlaceholder('Search all Closed Jobs').fill('test');
    await page.getByPlaceholder('Search all Closed Jobs').press('Enter');
    await page.getByRole('button', { name: 'Cancel' }).click();
    console.log(`Verified All Closed job list`);


     //Access Production List
    console.log(`Start verify Production List`);
     await page.getByRole('link', { name: ' Production List' }).click();
     await page.getByPlaceholder('Search Repair Orders').click();
     await page.getByPlaceholder('Search Repair Orders').fill('test');
     await page.getByPlaceholder('Search Repair Orders').press('Enter');
     await page.locator('#shell_app-header_left-nav-launcher').click();
    console.log(`Verified Production List`);



     //Access Accounting List
    console.log(`Start verify Accounting List`);
     await page.getByRole('link', { name: ' Accounting List' }).click();
     await page.getByPlaceholder('Search Repair Orders').click();
     await page.getByPlaceholder('Search Repair Orders').fill('test');
     await page.getByPlaceholder('Search Repair Orders').press('Enter');
     await page.locator('#shell_app-header_left-nav-launcher').click();
    console.log(`Verified Accounting List`);


     //Access Report => closed RO List
    console.log(`Start verify closed RO List`);
     await page.getByRole('link', { name: ' Reports' }).click();
     await page.locator('[id="hubCard_option_link_shell\\.closedROReport"]').click();
     await page.locator('#page-header__referrer').getByText('Reports').click();
     console.log(`Verified closed RO List`);


    //Access Setting -> Import / Export configuration
    console.log(`Start verify Setting -> Import / Export configuration`);
    await page.getByRole('link', { name: ' Settings' }).click();
    await page.locator('#hubCard_option_title_importing').click();
    await page.locator('#page-header__referrer').getByText('Settings').click();
    console.log(`Verified Setting -> Import / Export configuration`);

    //Access Setting -> Repair Preferences Page
    console.log(`Start verify Setting -> Repair Preferences`);
    await page.getByRole('link', { name: ' Settings' }).click();
    await page.locator('[id="hubCard_option_title_shell\\.repairPreference"]').click();
    await page.locator('#page-header__referrer').getByText('Settings').click();
    console.log(`Verified Setting -> Repair Preferences`);

    //Access Setting -> Disclaimer Page
    console.log(`Start verify Setting -> Disclaimer`);
    await page.getByRole('link', { name: ' Settings' }).click();
    await page.locator('[id="hubCard_option_title_shell\\.disclaimer"]').click();
    //await page.locator('[id="hubCard_option_title_shell\\.disclaimer"]').click();
    await page.locator('#page-header__referrer').getByText('Settings').click();
    console.log(`Verified Setting -> Disclaimer`);

    //Access Setting -> department configuration Page
    console.log(`Start verify Setting -> Department Configuration`);
    await page.getByRole('link', { name: ' Settings' }).click();
    await page.locator('[id="hubCard_option_title_shell\\.department-configuration"]').click();
    await page.locator('#page-header__referrer').getByText('Settings').click();
    console.log(`Verified Setting -> Department Configuration`);

    //Access Setting -> account setting Page
    console.log(`Start verify Setting -> Accounting Setting`);
    await page.getByRole('link', { name: ' Settings' }).click();
    await page.locator('[id="hubCard_option_title_shell\\.accounting-settings"]').click();
    //check Profit center tabs
    await page.getByRole('tab', { name: 'Profit Centers' }).click();
    await page.locator('#page-header__referrer').getByText('Settings').click();
    console.log(`Verified Setting -> Accounting Setting`);

});


