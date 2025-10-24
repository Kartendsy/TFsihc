import kaplay from 'https://cdn.jsdelivr.net/npm/kaplay@3001.0.19/+esm'

const usernameTag = document.getElementById("username-tag");

const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

usernameTag.textContent = tg.initDataUnsafe?.user?.username || "Anonim!";

console.log(tg.initDataUnsafe?.user);


kaplay({
    width:0,
    height:512,
    canvas:document.querySelector("#game-window")
});