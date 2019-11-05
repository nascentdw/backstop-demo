const baseURL = 'https://nascentdigital.com'

const loginCredentials = {
    internetOnly: 'ssffh1@telusinternal.com',
    IntandMobility: 'ssffh2@telusinternal.com',
    IntandPhone: 'ssffh5@telusinternal.com',
    IntandTV: 'tdtest9@telusinternal.com ',
    ffhAll: 'ssffh4@telusinternal.com',
    mobileCon: 'testapp@telusinternal.com',
    manySubs: 'johnnytest@telusinternal.com',
    Business: 'busofficial_manager@telusinternal.com',
    corporate: 'app_epp_manager2@telusinternal.com',
    family: 'family_manager_one@telusinternal.com',
    prepaid: 'prepaidusageprod001@telusinternal.com',
    Password: 'Passw0rd',
    Password2: 'Passw0rd2',
    Password123: 'Passw0rd123',
    Password4: 'P4ssw0rd'
}

const gotoLinks = {
    contact: `${baseURL}/contact-us`,
    careers: `${baseURL}/careers`,
    opportunities: `${baseURL}/careers/opportunities`,
    internship: `${baseURL}/careers/internship`,
}

async function login(page) {
    await page.waitFor(3000);
    try {
        await page.click("button[data-testid='login-large-btn']");
    } catch (e) {
        await page.click("button[data-testid='login-small-btn']");
    }
}

module.exports = {
    loginCredentials,
    gotoLinks,
    login
}