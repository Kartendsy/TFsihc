import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import kaplay from 'https://cdn.jsdelivr.net/npm/kaplay@3001.0.19/+esm'



const usernameTag = document.getElementById("usernameTag");
const coinTag = document.getElementById("coinTag");
const photoTag = document.getElementById("photoTag");

const supabase = createClient("https://zcuxsqfqmxzjnigimmya.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjdXhzcWZxbXh6am5pZ2ltbXlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMjAxNzAsImV4cCI6MjA3Njg5NjE3MH0.4To2aWcUeXsQsMqAvBOPc_feC8nqNAk3zm9HKSQbX_4")
const tg = window.Telegram.WebApp;

let curr_anim = "empty";

async function setup_user() {
    const user = tg.initDataUnsafe?.user;
    usernameTag.textContent = user?.first_name;
    photoTag.src = user?.photo_url;

    const { data: exists, err } = await supabase
        .from("users")
        .select("*")
        .eq("id", user?.id);

    if (exists.length === 0) {
        await supabase.from("users").insert({
            id: user?.id,
            username: user?.first_name,
            coin: 1000,
            backpack: [],
        })
    }

    coinTag.textContent = `: ${data[0].coin}`
    console.log(data);

}


async function start() {
    const K = kaplay({
        canvas: document.getElementById("game-window")
    })
    loadSprite("sungai", "assets/sungaibiasa.png");
    loadSprite("pancingan", "assets/pancinganbiasa.png", {
        sliceX: 4,
        anims: {
            empty: {
                from: 0,
                to: 0,
            },
            pos1: {
                from: 1,
                to: 1
            },
            pos2: {
                from: 2,
                to: 2
            }
        }
    });


    K.add([
        K.sprite("sungai"),
        K.pos(0, -100)
    ])

    const player = K.add([
        K.sprite("pancingan"),
        K.pos(0, -100)
    ])
    K.onUpdate(() => {
        player.play(curr_anim);
    })

    document.getElementById("fish-btn").addEventListener("click", () => {
        let rand = Math.floor(Math.random() * 2);
        let anims = ["pos1", "pos2"];
        curr_anim = anims[rand];

        wait(5, () => curr_anim = "empty");
    })

    setup_user();

}

start();