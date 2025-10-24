import kaplay from 'https://cdn.jsdelivr.net/npm/kaplay@3001.0.19/+esm'

const usernameTag = document.getElementById("username-tag");
const photoUser = document.getElementById("photo-user");

const tg = window.Telegram.WebApp;

const user = tg.initDataUnsafe?.user;
tg.ready();
tg.expand();

usernameTag.textContent = tg.initDataUnsafe?.user?.username || "Anonim!";
photoUser.src = user?.photo_url;

console.log(tg.initDataUnsafe?.user);


kaplay({
    width:0,
    height:512,
    canvas:document.querySelector("#game-window")
});