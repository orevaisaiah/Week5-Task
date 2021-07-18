function myFunction(){
    const form = document.getElementById("form");
    
    const firstName = document.getElementById("firstname").value;
    const LastName = document.getElementById("lastname").value;

    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;

    if (form.checkValidity()){
        
        if (firstName === LastName){
             alert("FirstName and LastName can't be the same");
              return false;
        }

        else if (password1 !== password2){
            alert('Password did not match')
            return false;
        }
        else{
            alert('Form Submitted');
        }
    }
}
