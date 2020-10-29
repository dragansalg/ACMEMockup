//fetching dats from external json file and sending it to local storage.
fetch('../scripts/events.json')
    .then(response=>response.json())
    .then(data=>{
    // stringify the json and sending data to local storage.
    localStorage.setItem('full_event',JSON.stringify(data));
});