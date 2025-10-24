import axios from "https://esm.sh/axios@1.7.7";


async function start() {
    await axios.get("https://dogapi.dog/api/v2/breeds")
        .then(resp => {
            console.log(resp);
        });
}
