$(document).ready(function () {
    $('.collapsible').collapsible();
    $('.materialboxed').materialbox();
});

function js_Load() {
    document.body.style.visibility = 'visible'
    transitions()
}

function transitions() {
    $("#definition").addClass("definitionAnimation")
    $("#headLogo").addClass("headLogoAnimation")
    $(".mainCollapsible").addClass("mainCollapsibleAnimation")

}

$("#FCSignupButton").on("click", function () {
    let newSignup = $("#signupEmail").val()
    if (newSignup === "") {
        alert("Please fill out the input")
    } else {
        alert(newSignup)
    }
})