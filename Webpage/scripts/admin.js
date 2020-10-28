document.addEventListener("DOMContentLoaded", ()=>{
    
    if (!localStorage.getItem("is_logged_in")){
        window.location.replace("../pages/login.html");
    }
    let log_out = document.getElementById("admin_logout");
    let btn = document.getElementById("btn");

    log_out.addEventListener("click", ()=>{
        localStorage.removeItem("is_logged_in");
        window.location.replace("../pages/login.html");
    })

    btn.addEventListener("click", ()=> {
        let event = new New_Event;
        //console.log(event);
        //let events = JSON.parse(localStorage.getItem('full_event'));
        //console.log(events);
    })


    class New_Event {
        constructor(events){
            this.input_name = document.getElementById("name").value;
            this.input_category = document.getElementById("category").value;
            this.input_venue = document.getElementById("venue").value;
            this.input_date = document.getElementById("date").value;
            this.input_time = document.getElementById("time").value;
            this.id = 0;
            this.saveNewEvent();
        }

        saveNewEvent(){
            let events = JSON.parse(localStorage.getItem('full_event'));
            this.id = Number(events[events.length-1].id)+1;
            
            let new_event = {
                id: this.id,
                category: this.input_category,
                name: this.input_name,
                date: this.input_date+"T"+this.input_time,
                venue: this.input_venue,                
            }
            //console.log(events);
            events.push(new_event);
            localStorage.setItem("full_event", JSON.stringify(events));
            console.log(events.length);
            console.log(events);
        }
    }



})