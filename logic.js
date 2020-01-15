$(document).ready(function () {
    $('.collapsible').collapsible();
});
$("#FCSignupButton").on("click", function () {
    let newSignup = $("#signupEmail").val()
    if (newSignup === "") {
        alert("Please fill out the input")
    } else {
        alert(newSignup)
    }
})