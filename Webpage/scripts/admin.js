document.addEventListener("DOMContentLoaded", ()=>{
    
    let btn = document.getElementById("btn");

    btn.addEventListener("click", ()=> {
        let event = new New_Event;
        console.log(event);
    })
    class New_Event {
        constructor(events){
            this.input_title = document.getElementById("title").value;
            this.input_category = document.getElementById("category").value;
            this.input_venue = document.getElementById("venue").value;
            this.input_date = document.getElementById("date").value;
            this.input_time = document.getElementById("time").value;
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