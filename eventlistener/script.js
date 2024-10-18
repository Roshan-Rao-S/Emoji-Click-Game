let click =document.getElementById("container");
click.addEventListener("mouseover",function(event){
    event.target.style.background="tomato";
    event.target.innerHTML="Ouch🥲";
})

click.addEventListener("mouseout",function(event){
    event.target.style.background="orange";
    event.target.innerHTML="Click Me😊";
})

click.addEventListener("click",function(event){
    event.target.style.background="pink";
    event.target.innerHTML="Click Me😊";
})

