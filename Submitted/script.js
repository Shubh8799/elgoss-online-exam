//function for download button
function Download(){
    let btn=document.querySelectorAll("button");
    btn[0].style.visibility="hidden";
    btn[1].style.visibility="hidden";
    print();
    btn[0].style.visibility="visible";
    btn[1].style.visibility="visible";
}
//function for retake test
function Retake(){
    window.location.href="/intro/intro.html"
}