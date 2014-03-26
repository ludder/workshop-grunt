/*global document*/
(function () {

    'use strict';

    function init() {
        var clickHeaders = document.querySelectorAll('.js-toggle');
        for (var i = clickHeaders.length - 1; i >= 0; i--) {
            setClickHandler(clickHeaders[i]);
        }
    }

    function setClickHandler(item) {
        item.addEventListener('click', function () {
            var nextSibling = this.nextElementSibling;
            if (nextSibling.style.display !== 'none') {
                nextSibling.style.display = 'none';
            } else {
                nextSibling.style.display = 'block';
            }
        });
    }

    init();

}());
