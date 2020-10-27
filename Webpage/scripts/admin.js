document.addEventListener("DOMContentLoaded", ()=>{
    let event = new New_Event;
    
    class New_Event {
        constructor(events){
            this.input_title = document.getElementById("title");
            this.input_category = document.getElementById("category");
            this.input_venue = document.getElementById("venue");
            this.input_date = document.getElementById("date");
            this.input_time = document.getElementById("time");
            this.id = 0;
            this.saveNewEvent();
        }

        saveNewEvent(){
            let events = JSON.parse(localStorage.getItem('full_event'));
            this.id = events[events.length-1].id++;
            let new_event = {
                id: this.id,
                title: this.title,
                category: this.category,

            }
            events.push("something here")
        }
    }



})