"use strict";
let thisSite = window.location.host;

// Check the current URL
if (thisSite === "discordapp.com" || thisSite === "discord.com") {
  doDiscord();
} else if (thisSite === "www.youtube.com") {
  doYouTube();
} else if (thisSite === "github.com") {
  doDev();
}

// discord.com
function doDiscord() {
  let a = chrome.extension.getURL("css/discord.css"),
    link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.id = "Nord Web Themes";
  link.href = a;

  document.head.appendChild(link);
}

// www.youtube.com
function doYouTube() {
  let a = chrome.extension.getURL("css/youtube.css"),
    link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.id = "Nord Web Themes";
  link.href = a;

  document.head.appendChild(link);
}

// github.com
function doDev() {
  let a = chrome.extension.getURL("css/github.css"),
    link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.id = "Nord Web Themes";
  link.href = a;

  document.head.appendChild(link);
}
