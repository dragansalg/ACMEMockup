document.addEventListener("DOMContentLoaded", ()=>{
   
    class Session {
        constructor(){
            this.logout = document.getElementById("admin_logout");
            this.edit = document.getElementById("admin_edit")
            this.new_event = document.getElementById("admin_create");
            this.create_btn = document.getElementById("btn");
            this.edit_btn = document.getElementById("btn_edit")
            this.h2 = document.getElementById("main_heading");
            this.select_id = document.getElementById("id");
            this.sidebarListeners();
        }

        sidebarListeners(){
            this.edit.addEventListener("click", () => {
                this.showEditEventArea();
            })

            this.new_event.addEventListener("click", () => {
                this.showAddEventForm();
            })

            this.logout.addEventListener("click", () => {
                this.endSession();
            })

            
        }

        showEditEventArea(){
            this.edit_btn.classList.remove("hide");
            this.create_btn.classList.add("hide");
            this.h2.innerHTML = "Choose the event to be edited"
            this.select_id.classList.remove("hide");
            main.classList.remove('success');
            
            let all_events  = JSON.parse(localStorage.getItem("full_event"));

            let category = document.getElementById("category");
            let name = document.getElementById("name");
            let venue = document.getElementById("venue");
            let date = document.getElementById("date");
            let time = document.getElementById("time");

            all_events.forEach(evnt => {            
                console.log(evnt)          
                let option = document.createElement("option");
                option.id = "option_id"
                option.setAttribute("value", evnt.id);
                option.innerHTML = evnt.name;
                this.select_id.appendChild(option);

                name.value = evnt.name;
                venue.value = evnt.venue;
                category.value = evnt.category;
                date.value = evnt.date.split("T")[0];
                time.value = evnt.date.split("T")[1];
        
            })
            let option = document.getElementById("option_id");

            this.select_id.addEventListener("change", e =>{
                let id = e.target.value;
                
                let focused_event = all_events.filter(evnt => evnt.id == id);
                console.log(id)
                let category = document.getElementById("category");
                let name = document.getElementById("name");
                let venue = document.getElementById("venue");
                let date = document.getElementById("date");
                let time = document.getElementById("time");

                name.value = focused_event.name;
                venue.value = focused_event.venue;
                category.value = focused_event.category;
                date.value = focused_event.date.split("T")[0];
                time.value = focused_event.date.split("T")[1];

            })
        }

        showAddEventForm(){
            this.h2.innerHTML = "Add a New Event Here"
            this.edit_btn.classList.add("hide");
            this.create_btn.classList.remove("hide");
            this.select_id.classList.add("hide");
        }

        endSession(){
            localStorage.removeItem("is_logged_in");
            window.location.replace("../pages/login.html");
        }     
    }

    class New_Event {
        constructor(events){
            this.input_name = document.getElementById("name").value;
            this.input_category = document.getElementById("category").value;
            this.input_venue = document.getElementById("venue").value;
            this.input_date = document.getElementById("date").value;
            this.input_time = document.getElementById("time").value;
            this.image=document.getElementById("image").value;
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
                imageLocation:"../images/"+this.image+".jpg"             
            }
            //console.log(events);
            events.push(new_event);
            //Users cannot submit empty events!
            let all_required_fields = 
            this.input_name
            && this.input_category
            && this.input_date
            && this.input_time
            && this.input_venue;
                
            if (all_required_fields){
                localStorage.setItem("full_event", JSON.stringify(events));
                document.getElementById("btn").classList.add("success")
            }
            console.log(events.length);
            console.log(events);
        }
    }    

    const btn = document.getElementById("btn");
    btn.addEventListener("click", ()=> {
        let event = new New_Event;
    })

    if (window.location.href.search("title") != -1){
        document.getElementById("main").classList.add("success");
    }

    localStorage.getItem("is_logged_in")?
    new Session :
    window.location.replace("../pages/login.html");

})