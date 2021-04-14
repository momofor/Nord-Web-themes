"use strict";
let thisSite = window.location.host;

const websites = {
	discord: "discordapp.com" || "discord.com",
	youtube: "www.youtube.com",
	deviantArt: "www.deviantart.com",
	monkeyType: "monkeytype.com",
	reddit: "www.reddit.com",
};
for (let i = 0; i < websites.length; i++) {
	curWebsite = websites[i];
	console.log(curWebsite);
}
switch (thisSite) {
	case websites.discord:
		doWebsite("discord");
		break;
	case websites.youtube:
		doWebsite("youtube");
		break;
	case websites.deviantArt:
		doWebsite("deviantart");
		break;
	case websites.monkeyType:
		doWebsite("monkeytype");
		break;
	case websites.reddit:
		doWebsite("reddit");
		break;
}

// ---------------------------- ADD CSS ------------------------------
const doWebsite = (name) => {
	let a = chrome.extension.getURL(`css/${name}.css`);
	link = document.createElement("link");
	link.innerHTML = `rel = "stylesheet" href=${a} id = "Nord websites"`;
	document.head.appendChild(link);
};
