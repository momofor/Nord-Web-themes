const discord = document.getElementById("discord");
const github = document.getElementById("github");
const youtube = document.getElementById("youtube");

discord.addEventListener("change", function () {
  if (this.checked) {
    localStorage["discord"] = "checked";
  } else {
    localStorage["discord"] = "unchecked";
  }
});

github.addEventListener("change", function () {
  if (this.checked) {
    localStorage["github"] = "checked";
  } else {
    localStorage["github"] = "unchecked";
  }
});

youtube.addEventListener("change", function () {
  if (this.checked) {
    localStorage["youtube"] = "checked";
  } else {
    localStorage["youtube"] = "unchecked";
  }
});

if (localStorage["discord"] === "checked") {
  discord.setAttribute("checked", "");
}

if (localStorage["github"] === "checked") {
  github.setAttribute("checked", "");
}

if (localStorage["youtube"] === "checked") {
  youtube.setAttribute("checked", "");
}
