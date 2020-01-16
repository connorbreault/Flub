$(document).ready(function () {
    $('.collapsible').collapsible();
    $('.materialboxed').materialbox();
});

function js_Load() {
    document.body.style.visibility = 'visible'
}

$("#FCSignupButton").on("click", function () {
    let newSignup = $("#signupEmail").val()
    if (newSignup === "") {
        alert("Please fill out the input")
    } else {
        $("#FCSignup").addClass("hide")
        $("#thanksSignup").removeClass("hide")
    }
})