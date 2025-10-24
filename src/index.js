import axios from 'axios';


axios.get("https://dogapi.dog/api/v2/breeds")
    .then(resp => {
        console.log(resp);
    })