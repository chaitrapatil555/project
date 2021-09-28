let fnameNode=document.getElementById("fname");
let spanNode1=document.getElementById("error1");

let passNode=document.getElementById("pass");
let spanNode2=document.getElementById("error2");

function validate1(){
    spanNode1.innerHTML="";
    let fname=fnameNode.value;
    if(fname==''){
        spanNode1.innerHTML="This field is required";
        fnameNode.style.border="3px solid red";
    }
    else if(fname.includes(' ')){
        spanNode1.innerHTML="space not allowed";
        fnameNode.style.border="3px solid red";
    }
    else{
        fnameNode.style.border="3px solid green";
    }
}

function validate2(){
    spanNode2.innerHTML="";
    let password=passNode.value;
    if(password==''){
        spanNode2.innerHTML="This field is required";
        passNode.style.border="3px solid red";
    }
    else if(password.length<4 || password.length>8){
        spanNode2.innerHTML="password should be 4 to 8 character length";
        passNode.style.border="3px solid red";
    }
    else{
        passNode.style.border="3px solid green";
    }
}
