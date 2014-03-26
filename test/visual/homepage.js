/*global casper, phantomcss*/
casper.start('http://localhost:9001/')
    .then(function () {
        phantomcss.screenshot('body', 'Hele pagina');
    })
    .then(function () {
        casper.click('.test-header1');

        phantomcss.screenshot('section.content', 'First item collapsed');
    });
