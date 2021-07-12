const form = document.getElementById('form');
const password1El=document.getElementById('password1');
const password2El=document.getElementById('password2');
const messageContainer=document.querySelector('.message-container');
const message=document.getElementById('message');

let isvalid=false;
let passwordsMatch=false;

function validateForm(){
    //using contraint api
    isvalid=form.checkValidity();
    /* style main message for an error */
  if(!isvalid){
    message.textContent="please fill out all fields";
    message.style.color="red";
    messageContainer.style.borderColor="red";
    return;
  }
  /* check to see if password matches */
  if(password1El.value===password2El.value){
      passwordsMatch=true;
      password1El.style.bordercolor="green"
      password2El.style.bordercolor="green"
  } else{
      passwordsMatch=false;
      message.textContent="make sure password match.";
      message.style.color="red"
      messageContainer.style.borderColor="red";
      password1El.style.borderColor="red"
      password2El.style.borderColor="red"
      return;
      
  }
  /* if form is valid and password match */
  if(isvalid && passwordsMatch){
      message.textContent="Successsfully Registered"
      messageContainer.style.borderColor="green"
      message.style.color="green"
  }
}

function storeFormData(){
  const user={
    name:form.name.value,
   phone:form.phone.value,
   email:form.email.value,
    website:form.website.value,
    password:form.password.value,
  };
  /* user data */
  console.log(user)
}


function processFormData(e){
    e.preventDefault();
   /* validate form */
   validateForm();
   /* submit data if valid */
   if(isvalid && passwordsMatch){
    storeFormData();
   }
}

/* event listener */
form.addEventListener('submit',processFormData);