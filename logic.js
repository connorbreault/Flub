$(document).ready(function () {
    $('.collapsible').collapsible();
    $('.materialboxed').materialbox();
});

$("#FCSignupButton").on("click", function () {
    let newSignup = $("#signupEmail").val()
    if (newSignup === "") {
        alert("Please fill out the input")
    } else {
        alert(newSignup)
    }
})