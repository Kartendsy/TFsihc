import {createClient} from "https://esm.sh/@supabase/supabase-js@2";

import kaplay from 'https://cdn.jsdelivr.net/npm/kaplay@3001.0.19/+esm'

const supabase = createClient("https://zcuxsqfqmxzjnigimmya.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjdXhzcWZxbXh6am5pZ2ltbXlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMjAxNzAsImV4cCI6MjA3Njg5NjE3MH0.4To2aWcUeXsQsMqAvBOPc_feC8nqNAk3zm9HKSQbX_4")

async function start() {
    const K = kaplay({
        canvas:document.getElementById("game-window")
    })
}

start();