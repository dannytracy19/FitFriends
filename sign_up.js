import firebase from "./node_modules/@firebase/app";
import "./node_modules/@firebase/auth";
const handleSubmit = function(event){
    event.preventDefault();

    let email = $(".email-input").val();
    let password = $("#pwd").val()


    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
        window.location.href = "index.html";
        console.log(email);
      // Signed in 
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });


    
}





$(function() {
    $(`.signup-button`).on("click", handleSubmit)
});
