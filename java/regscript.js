let fnameNode=document.getElementById("fname");
let spanNode1=document.getElementById("error1");

let lnameNode=document.getElementById("lname");
let spanNode2=document.getElementById("error2");

let passNode=document.getElementById("pass");
let spanNode3=document.getElementById("error3");

let emailNode=document.getElementById("email");
let spanNode4=document.getElementById("error4");

let c_passNode=document.getElementById("c_pass");
let spanNode5=document.getElementById("error5");

let mobilenoNode=document.getElementById("mobileno");
let spanNode6=document.getElementById("error6");




function validate1(){
    spanNode1.innerHTML="";
    let fname=fnameNode.value;
    if(fname==''){
        spanNode1.innerHTML="This field is required";
        fnameNode.style.border="3px solid red";
        return false;
    }
    else if(fname.includes(' ')){
        spanNode1.innerHTML="space not allowed";
        fnameNode.style.border="3px solid red";
        return false;
    }
    else{
        fnameNode.style.border="3px solid green";
        return true;
    }
    }


function validate2(){
    spanNode2.innerHTML="";
    let lname=lnameNode.value;
    if(lname==''){
        spanNode2.innerHTML="This field is required";
        lnameNode.style.border="3px solid red";
        return false;
    }
    else if(lname.includes(' ')){
        spanNode2.innerHTML="space not allowed";
        lnameNode.style.border="3px solid red";
        return false;
    }
    else{
        lnameNode.style.border="3px solid green";
        return true;
    }
    }


function validate3(){
    spanNode3.innerHTML="";
    let password=passNode.value;
    if(password==''){
        spanNode3.innerHTML="This field is required";
        passNode.style.border="3px solid red";
        return false;
    }
    else if(password.length<4 || password.length>8){
        spanNode3.innerHTML="password should be 4 to 8 character length";
        passNode.style.border="3px solid red";
        return false;
    }
    else{
        passNode.style.border="3px solid green";
        return true;
    }
    }

function validate4(){
    spanNode4.innerHTML="";
    let email=emailNode.value;
    if(email==''){
        spanNode4.innerHTML="This field is required";
        emailNode.style.border="3px solid red";
        return false;
    }
    else if(email.includes(' ')){
        spanNode4.innerHTML="space not allowed";
        emailNode.style.border="3px solid red";
        return false;
    }
    else{
        emailNode.style.border="3px solid green";
        return true;
    }
    }

function validate5(){
spanNode6.innerHTML="";
let password=passNode.value;
let c_pass=c_passNode.value;
if(c_pass==''){
    spanNode5.innerHTML="This field is required";
    c_passNode.style.border="3px solid red";
    return false;
}
else if(password!=c_pass){
   spanNode5.innerHTML="password should match";
    c_passNode.style.border="3px solid red";
    return false;
}
else{
    c_passNode.style.border="3px solid green";
    return true;
}
}

function validate6(){
    spanNode6.innerHTML="";
    let mobileno=mobilenoNode.value;
    if(mobileno==''){
        spanNode6.innerHTML="This field is required";
        mobilenoNode.style.border="3px solid red";
        return false;
    }
    else if(mobileno.length<10 || mobileno.length>10   ){
        spanNode6.innerHTML="Number should not be more thn 10";
        mobilenoNode.style.border="3px solid red";
        return false;
    }
    else{
        mobilenoNode.style.border="3px solid green";
        return true;
    }
}
function validateForm(){
    let v1= validate1();
    let v2= validate2();
    let v3= validate3();
    let v4= validate4();
    let v5= validate5();
    let v6= validate6();

    return (v1&&v2&&v3&&v4&&v5&&v6);

}