const model_container=document.getElementById("model_container");
const open=document.getElementById("open");
const close=document.getElementById("close"); 

open.addEventListeners('click', () => {
    model_container.classLis.add("show")

});

close.addEventListeners('click', () => {
    model_container.classLis.remove("show")

});