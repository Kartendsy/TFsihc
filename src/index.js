import axios from 'axios';


axios.get("https://dogapi.dog/api/v2/breeds")
    .then(function (resp){
        console.log(resp);
        
    })