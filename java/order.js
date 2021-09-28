let fnameNode=document.getElementById("fname");
let spanNode1=document.getElementById("error1");

let emailNode=document.getElementById("email");
let spanNode2=document.getElementById("error2");

let mobilenoNode=document.getElementById("mobileno");
let spanNode3=document.getElementById("error3");

let i_NameNode=document.getElementById("i_Name");
let spanNode4=document.getElementById("error4");

let q_numberNode=document.getElementById("q_number");
let spanNode5=document.getElementById("error5");



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
    let email=emailNode.value;
    if(email==''){
        spanNode2.innerHTML="This field is required";
        emailNode.style.border="3px solid red";
    }
    else if(email.includes(' ')){
        spanNode2.innerHTML="space not allowed";
        emailNode.style.border="3px solid red";
    }
    else{
        emailNode.style.border="3px solid green";
    }
}

function validate3(){
    spanNode3.innerHTML="";
    let mobileno=mobilenoNode.value;
    if(mobileno==''){
        spanNode3.innerHTML="This field is required";
        mobilenoNode.style.border="3px solid red";
        return false;
    }
    else if(mobileno.length<10 || mobileno.length>10   ){
        spanNode3.innerHTML="Number should not be more thn 10";
        mobilenoNode.style.border="3px solid red";
        return false;
    }
    else{
        mobilenoNode.style.border="3px solid green";
        return true;
    }
}






function validate4(){
    spanNode4.innerHTML="";
    let i_Name=i_NameNode.value;
    if(i_Name==''){
        spanNode4.innerHTML="This field is required";
        i_NameNode.style.border="3px solid red";
    }
    else if(i_Name.includes(' ')){
        spanNode4.innerHTML="space not allowed";
        i_NameNode.style.border="3px solid red";
    }
    else{
        i_NameNode.style.border="3px solid green";
    }
}

function validate5(){
    spanNode5.innerHTML="";
    let q_number=q_numberNode.value;
    if(q_number==''){
        spanNode5.innerHTML="This field is required";
        q_numberNode.style.border="3px solid red";
        return false;
    }
    else if(q_number<0 ){
        spanNode5.innerHTML="quantity should be positive";
        q_numberNode.style.border="3px solid red";
        return false;
    }
    else{
        q_numberNode.style.border="3px solid green";
        return true;
    }
}

