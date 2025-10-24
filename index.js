import kaplay from 'https://cdn.jsdelivr.net/npm/kaplay@3001.0.19/+esm'
import axios from 'axios';

const usernameTag = document.getElementById("username-tag");
const photoUser = document.getElementById("photo-user");

const tg = window.Telegram.WebApp;

const user = tg.initDataUnsafe?.user;
tg.ready();
tg.expand();

async function setup_data_user() {
    usernameTag.textContent = user?.first_name;
    photoUser.src = user?.photo_url;

    // Login 
    console.log(axios);
    
}

async function startGame() {
    const K = kaplay({
        width:0,
        height:512,
        canvas:document.querySelector("#game-window")
    });
}


(async () => {
    await setup_data_user();
    await startGame();
})()



