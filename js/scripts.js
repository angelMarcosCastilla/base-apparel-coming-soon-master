const $form=document.getElementById("form");
const $containerInput=document.getElementById("container-input");
const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


const validatorEmail=(email)=>{
    if(!emailRegex.test(email) || email===""){
       $containerInput.classList.add("input-container--error")
    }else{
        $form.submit();
    }
}

/*===events */
$form.addEventListener("submit",(e)=>{
     e.preventDefault();
     validatorEmail( e.target.email.value);
 });
 
 $form.email.addEventListener("focus",(e)=>{
      $containerInput.classList.remove("input-container--error")}
      );

