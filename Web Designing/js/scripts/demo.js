function demoExternalAlert(){
    alert('External Alert');
}
function demoExternalConfirm(){
    if(confirm('Are you Sure?')){
        alert('Yes');
    }
    else{
        alert('No');
    }
}
function demoExternalPrompt(){
    var fname=prompt("Enter first name");
    var lname=prompt("Enter last name");
    alert(fname+lname);
}