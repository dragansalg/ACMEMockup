fetch('../scripts/events.json')
.then(response=>response.json())
.then(data=>{
   console.log(data);
});
//inuti fetchen
/*let header=document.getElementById("header");
let event1=document.createElement("div");
let heading= document.createElement("h1");
heading.innerHTML=data[1].name;
let image= document.createElement("img");
image.setAttribute('src',data[1].imageLocation);
event1.appendChild(heading);
event1.appendChild(image);
header.after(event1);*/