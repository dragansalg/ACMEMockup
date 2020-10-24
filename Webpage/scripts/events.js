document.addEventListener("DOMContentLoaded",function(){
//collecting stored data from local storage and parse it.
let event_list=JSON.parse(localStorage.getItem("full_event"));
console.log(event_list);
//Object of total list of events created.
let all_events=new AllEvents(event_list);
})
class AllEvents{
    constructor(event_list){
        this.all_events=event_list;
        this.showAll(event_list);//shows all events when the page loads
        console.log(this.all_events);
        this.filter();//method to filter events according to category
        this.sort_date=document.getElementById("select");//a property for select
        this.sort_date.addEventListener("change",()=>{//click event runs the method to compare date of the event and sort according to it
            this.sortDate(this.all_events); 
        });
    }
    //methods to show events
    showAll(events){
        let main=document.getElementById("main");
        let all_events=document.createElement("div");
        all_events.setAttribute("id","events");
        for(let i=0;i<events.length;i++){
             let event_list=document.createElement("div");
            event_list.className="event_list";
            let heading=document.createElement("h3");
            heading.textContent=events[i].name;
            console.log(events[i].name);
            let image=document.createElement("img");
            image.setAttribute("src",events[i].imageLocation);
            event_list.appendChild(heading);
            event_list.appendChild(image);
            all_events.appendChild(event_list)
        }
        main.appendChild(all_events);
    }
    //filters event accorging to category
    filter(){
        let filter_bar=document.getElementById("filter_bar");
        filter_bar.addEventListener("click",(e)=>{
            document.getElementById("events").remove();
            if(e.target.innerHTML=="ALL")this.showAll(this.all_events);
            if(e.target.innerHTML=="CONFERENCE"){
                let conference=this.all_events.filter(value=> value.category==="Conference");
                this.showAll(conference);
            }   
            if(e.target.innerHTML=="MUSIC/SHOW"){
                let show=this.all_events.filter(value=> value.category==="Music/Show");
                this.showAll(show);
            }
            if(e.target.innerHTML=="SPORTS"){ 
                let sports=this.all_events.filter(value=> value.category==="Sports");
                this.showAll(sports);
            }
            if(e.target.innerHTML=="WEDDING"){
                let wedding=this.all_events.filter(value=> value.category==="Wedding")
                this.showAll(wedding);
            }
        })
    }
    sortDate(event_list) {
        let sorted = event_list.sort(function (a, b) {
            return new Date(a.Date) - new Date(b.Date);
        })
        document.getElementById("events").remove();
        this.showAll(sorted);
    }
}
/*document.addEventListener("DOMContentLoaded",function(){
    const events=document.getElementById("events");
    console.log(events);
    let my_select=document.getElementById("select");
    let filter=document.getElementById("filter");
    my_select.addEventListener("change",(e)=>{
        if(my_select.value=="date"){
                my_select.remove();
                let date_select=document.createElement("select");
                date_select.setAttribute("id","date_select");
                let order=document.createElement("option");
                order.setAttribute("value","order");
                order.innerHTML="Sort in order of event date";
                let reverse=document.createElement("option");
                reverse.setAttribute("value","reverse");
                reverse.innerHTML="Sort in reverse order of event date";
                date_select.appendChild(order);
                date_select.appendChild(reverse);
                filter.appendChild(date_select);
                date_select.addEventListener("change",(e)=>{
                    if(date_select.value=="reverse"){

                    }
                })
            }
        if(my_select.value=="title"){
                
            }
        if(my_select.value=="category"){
                
            }
    })
   let filter_bar=document.getElementById("filter_bar");
   let event_list= document.getElementsByClassName("event_list");
   filter_bar.addEventListener("click",function(e){
        if(e.target.innerHTML=="CONFERENCE"){   
            for(let i=event_list.length-1;i>=0;i--){
                 if(event_list[i].className!="event_list conference"){
                     console.log(event_list[i]);
                   event_list[i].remove();
            }
        }
    }
        if(e.target.innerHTML=="MUSIC/SHOW"){ 
            showAll();  
           /* for(let i=event_list.length-1;i>=0;--i){
                 if(event_list[i].className!=="event_list show"){
                     console.log(event_list[i]);
                   event_list[i].remove();
            }
        }
      }
      function showAll(){
          document.getElementById("events").remove();
          console.log(events);
          console.log("hi");

      }
    })
})*/
