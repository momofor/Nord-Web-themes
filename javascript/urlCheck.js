"use strict";
let thisSite = window.location.host;

// Check the current URL
if (thisSite === "discordapp.com" || thisSite === "discord.com") {
  doDiscord();
} else if (thisSite === "www.youtube.com") {
  doYouTube();
} else if(thisSite === "www.deviantart.com") {
  doDev();
} else if(thisSite === "monkeytype.com") {
  doMonkey();
} else if(thisSite === "www.reddit.com") {
  doReddit();
}


// ---------------------------- ADD CSS ------------------------------

// discord.com
function doDiscord() {
  let a = chrome.extension.getURL("css/discord.css"),
    link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.id = "Nord websites";
  link.href = a;

  document.head.appendChild(link);
}

// www.youtube.com
function doYouTube() {
  let a = chrome.extension.getURL("css/youtube.css"),
    link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.id = "Nord websites";
  link.href = a;

  document.head.appendChild(link);
}

// www.deviantart.com
function doDev() {

  let a = chrome.extension.getURL("css/deviantart.css"),
    link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.id = "Nord websites";
  link.href = a;

  document.head.appendChild(link);
}

// monkeytype.com
function doMonkey() {

  let a = chrome.extension.getURL("css/monkeytype.css"),
    link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.id = "Nord websites";
  link.href = a;

  document.head.appendChild(link);
}

// www.reddit.com
function doReddit() {
  let a = chrome.extension.getURL("css/reddit.css"),
    link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.id = "Nord websites";
  link.href = a;

  document.head.appendChild(link);
}
