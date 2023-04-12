// ==UserScript==
// @name         FT Redirector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redirect FT to 12ft.io
// @author       You
// @match        https://www.ft.com/content/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    window.location.href = 'https://12ft.io/proxy?&q=' + window.location;
})();
