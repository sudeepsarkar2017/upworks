
describe('Name of the group', function() {
    
    it('test', function() {
        browser.driver.manage().window().maximize();
        browser.get('https://www.upwork.com/');
        element(by.id('q')).sendKeys('test');
        browser.sleep(3000)
    })
        
});
    