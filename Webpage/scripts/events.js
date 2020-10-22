/*fetch('events.json')
.then(response=>response.json())
.then(data=>{
    console.log(data);
});*/
document.addEventListener("DOMContentLoaded",function(){
   let filter=document.getElementById("filter_bar");
 
   filter.addEventListener("click",function(e){
        let event_list= document.getElementsByClassName("event_list");
        console.log(event_list);
        if(e.target.innerHTML=="CONFERENCE"){
           
        for(let item of event_list){
            console.log(item);
            if(item.className!=="event_list conference"){
               
            }
        }
      }
   })
})