import {createClient} from "https://esm.sh/@supabase/supabase-js@2";
import kaplay from 'https://cdn.jsdelivr.net/npm/kaplay@3001.0.19/+esm'



const usernameTag = document.getElementById("usernameTag");
const coinTag = document.getElementById("coinTag");
const photoTag = document.getElementById("photoTag");

const supabase = createClient("https://zcuxsqfqmxzjnigimmya.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjdXhzcWZxbXh6am5pZ2ltbXlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMjAxNzAsImV4cCI6MjA3Njg5NjE3MH0.4To2aWcUeXsQsMqAvBOPc_feC8nqNAk3zm9HKSQbX_4")
const tg = window.Telegram.WebApp;

let curr_anim = 0;
let anims = ["empty", "pos1"];

async function setup_user() {
    const user = tg.initDataUnsafe?.user;
    usernameTag.textContent = user?.first_name;
    photoTag.src = user?.photo_url;
}


async function start() {
    const K = kaplay({
        canvas:document.getElementById("game-window")
    })
    loadSprite("sungai", "assets/sungaibiasa.png");
    loadSprite("pancingan", "assets/pancinganbiasa.png", {
        sliceX:4,
        anims: {
            empty: {
                from:0,
                to:0,
            },
            pos1: {
                from:1,
                to:1
            },
            pos2: {
                from:2,
                to:2
            }
        }
    });


    K.add([
        sprite("sungai"),
        pos(0, -100)
    ])

    const player = K.add([
        sprite("pancingan"),
        pos(0, -100)
    ])
    K.onUpdate(()=>{
        player.play(anims[curr_anim]);
    })
}

function start_fish() {
    curr_anim = 1;
    console.log(anims[curr_anim]);
    
    wait(5, () => curr_anim = 0);
}

setup_user();
start();