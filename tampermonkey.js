// ==UserScript==
// @name         Youtube Anti-Adblock Killer
// @namespace    https://anda.ninja/
// @version      0.1
// @description  Remove the anti-adblocker popup on Youtube
// @author       Axel Andaroth
// @match        https://www.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('Youtube Anti-Adblock Killer by Axel Andaroth')

    let killed = false

    const interval = setInterval(() => {
        if (killed) return;
        const popup = document.querySelector('ytd-popup-container') // find modal
        if (popup) {

            const dialog = document.querySelector('tp-yt-paper-dialog') // find dialog
            if (dialog) {
                console.log('dialog found', dialog)
                const close = document.querySelector('div.yt-spec-touch-feedback-shape__fill') // find close button
                if (close) {
                    console.log('close found', close)
                    close.click() // press the close button
                    killed = true;
                }

            }
        }
    },1000)
})();
