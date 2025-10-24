import {createClient} from "https://esm.sh/@supabase/supabase-js@2";
import kaplay from 'https://cdn.jsdelivr.net/npm/kaplay@3001.0.19/+esm'



const usernameTag = document.getElementById("usernameTag");
const coinTag = document.getElementById("coinTag");
const photoTag = document.getElementById("photoTag");

const supabase = createClient("https://zcuxsqfqmxzjnigimmya.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjdXhzcWZxbXh6am5pZ2ltbXlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMjAxNzAsImV4cCI6MjA3Njg5NjE3MH0.4To2aWcUeXsQsMqAvBOPc_feC8nqNAk3zm9HKSQbX_4")
const tg = window.Telegram.WebApp;


async function setup_user() {
    const user = tg.initDataUnsafe?.user;
    usernameTag.textContent = user?.first_name;
    photoTag.src = user?.photo_url;
}


async function start() {
    loadSprite("sungai", "assets/sungaibiasa.png");
    const K = kaplay({
        canvas:document.getElementById("game-window")
    })

    K.add([
        sprite("sungai")
    ])
}

setup_user();
start();