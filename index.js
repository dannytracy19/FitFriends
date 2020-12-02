import firebase from "./node_modules/@firebase/app";
import "./node_modules/@firebase/auth";
const handleSubmit =  function(event){
    event.preventDefault();
    let email = $(".email-login").val();
    let password = $(".password-login").val()



    const $message = $('#message')
firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in 
      // ...
      $message.replaceWith('<h5 style="font-size: large; color:green; text-align:center;" id="message">Success! You are now logged in.</h5>')
      var timer = setTimeout(function() {
          window.location='/homepage.html'
      }, 3000);
    })
    .catch((error) => {
        $message.replaceWith('<h5 style="font-size: large; color:red; text-align:center;" id="message">Something went wrong and you were not logged in. Check your email and password and your internet connection.</h5>');
    });

    


}


//checking the user's credentials


$(function() {
    $(`.login-login`).on("click", handleSubmit)
    
});