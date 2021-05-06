// ==UserScript==
// @name        Remove Blocked Messages
// @author      kana! ♡#0001 (@kwafuuwu)
// @namespace   https://github.com/vnikana/discord-stuff
// @description Removes all blocked messages. (chat only)
// @match        *://*.discord.com/channels/*
// @grant       none
// @version     1.0
// ==/UserScript==

function hideBlocked(){
    const blocked = document.querySelectorAll('[class^="groupStart"]'); // Find all "Blocked Messages"
    blocked.forEach(blokMsg => {
        if(blokMsg.style.display !== "none") blokMsg.style.display = "none"; // Hide the message if it's not already hidden.
    });
};
setInterval(hideBlocked, 500); // Repeat every half second. Recommended to keep at 500, but raise/ lower if Remove Blocked Messages
