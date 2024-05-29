function formValid()
{
    let emailInput=document.formValidation.emailValid
    const emailRegex=/^[a-zA-Z0-9.!#%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    var csInput=document.formValidation.csName
    var phNoInput=document.formValidation.phNo
    var csMessageInput=document.formValidation.csMessage
     var phoneNoRegEx=/^[1-9]{1}[0-9]{9}$/;


     if(emailInput.value=="" && csInput.value=="" && phNoInput.value=="" && csMessageInput.value=="")
     {
         alert('kindly fill all details')
         document.formValidation.csName.focus();
     }
     else if(emailInput.value=="" )
     {
        alert('kindly fill email')
        document.formValidation.emailValid.focus();
     }
     else if(csInput.value=="")
     {
        alert('kindly fill name')
         document.formValidation.emailValid.focus();

     }
     else if(phNoInput.value=="")
     {
        alert('kindly fill phone no')
         document.formValidation.emailValid.focus();

     }
     else if(csMessageInput.value=="")
     {
        alert('kindly fill message')
         document.formValidation.emailValid.focus();

     }
     else if(phNoInput.value.match(phoneNoRegEx))
     {
        alert("kindly match the pattern of phone No!")
        document.formValidation.phNo.focus();
     }
     else if(emailInput.value.match(emailRegex))
     {
         alert("kindly match the pattern of mail!")
         document.formValidation.emailValid.focus();
     }
     else if(phNoInput.value.match(phoneNoRegEx) && emailInput.value.match(emailRegex))
     {
        alert("Congratulations! Phone No and Mail validation Successfull ")
     }

}