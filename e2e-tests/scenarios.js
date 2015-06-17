'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

    //browser.pause();
  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');

    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
        browser.get('index.html#/view1');

    });
      //browser.pause();

    it('should get all the tests', function(){
        var tests = element.all(by.repeater('t in tests'));
        tests.then(function(e){
            console.log('found ' + e.length + ' tests');

            // expect(e.length).toBe(2);
            for (var i = 0; i < e.length; i++) {
                e[i].getInnerHtml().then(function(r){console.log(r);});
                var subtasks = e[i].all(by.repeater('t2 in t.nestedElements'));
                subtasks.getInnerHtml().then(function(r){console.log(r);});
                expect(subtasks).toBeDefined();
            }
        });
    });
  });

});
