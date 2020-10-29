document.addEventListener("DOMContentLoaded", ()=>{
   
    class Session {
        constructor(){
            this.logout = document.getElementById("admin_logout");
            this.edit = document.getElementById("admin_edit")
            this.new_event = document.getElementById("admin_create");
            this.delete_event = document.getElementById("admin_delete");
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

            this.delete_event.addEventListener("click", () => {
                this.showDeleteEventArea();
            })            

            this.logout.addEventListener("click", () => {
                this.endSession();
            })

            
        }

        showDeleteEventArea(){
            console.log("hi");
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

            all_events.forEach(event => {            
                console.log(event.date)          
                let option = document.createElement("option");
                option.id = "option_id"
                option.setAttribute("value", event.id);
                option.innerHTML = event.name;
                this.select_id.appendChild(option);

                name.value = event.name;
                venue.value = event.venue;
                category.value = event.category;
                date.value = event.date.split("T")[0];
                time.value = event.date.split("T")[1];
        
            })
            let option = document.getElementById("option_id");

            this.select_id.addEventListener("change", e =>{
                let id = e.target.value;
                
                let focused_event = all_events.filter(event => event.id == id);
                //console.log(id)
                let category = document.getElementById("category");
                let name = document.getElementById("name");
                let venue = document.getElementById("venue");
                let date = document.getElementById("date");
                let time = document.getElementById("time");
                //console.log(focused_event[0]);
                name.value = focused_event[0].name; //added [0] to target the actual object in the array
                venue.value = focused_event[0].venue; //added [0] to target the actual object in the array
                category.value = focused_event[0].category; //added [0] to target the actual object in the array
                date.value = focused_event[0].date.split("T")[0];
                time.value = focused_event[0].date.split("T")[1];

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
            //console.log(events.length);
            //console.log(events);
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