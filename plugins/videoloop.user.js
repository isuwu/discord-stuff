// ==UserScript==
// @name         Video looping in Discord.
// @version      1.0
// @description  Causes videos to loop infinitely, instead of ending.
// @author       Qiqi#0001
// @match        *://*.discord.com/channels/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://greasyfork.org/scripts/31940-waitforkeyelements/code/waitForKeyElements.js?version=209282
// ==/UserScript==

(function() {
    'use strict';

    waitForKeyElements(
        "video",
        vid => vid.attr('loop', 'loop')
    );
})();
