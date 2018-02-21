
describe('Name of the group', function() {
    
    it('test', function() {
        browser.driver.manage().window().maximize();
        browser.get('https://www.upwork.com/');
        element(by.id('q')).sendKeys('test',protractor.Key.ENTER);

      element(by.className('m-xs-top m-md-bottom')).getText().then(function(text){
            console.log(text);
            // expect(text).toMatch('Test Freelancers');
        });

        // console.log(jobSearch),
        // expect(element(by.id('oSearchContractorsHeader').getText())).toMatch('test')
        browser.sleep(10000)
    })
        
});
    