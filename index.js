import kaplay from 'https://cdn.jsdelivr.net/npm/kaplay@3001.0.19/+esm'
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
import {SUPABASE_URI, SUPABASE_KEY} from "./env.js";

const supabase = createClient(SUPABASE_URI, SUPABASE_KEY);

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
    const {data:exists} = await supabase
        .from("users")
        .select("*")
        .eq("id", user?.id);
    
    if (exists.length === 0) {
        await supabase.from("users").insert({id:user?.id, username:user?.first_name, coin:100, backpack:[]});
    }
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



