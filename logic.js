// Onload
function js_Load() {
    document.body.style.visibility = 'visible'
}
// Also onload
$(document).ready(function () {
    // Materialize init
    $('.collapsible').collapsible();
    $('.materialboxed').materialbox();

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBqb9rA1e9tT3uCObNH25CzqPXGGulVbGM",
        authDomain: "flubclub-rubhub.firebaseapp.com",
        databaseURL: "https://flubclub-rubhub.firebaseio.com",
        projectId: "flubclub-rubhub",
        storageBucket: "flubclub-rubhub.appspot.com",
        messagingSenderId: "563265812210",
        appId: "1:563265812210:web:1434b64f9dc816096f026b",
        measurementId: "G-GW6DJGRPD4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database()

    // Empty signup
    let newSignup = ""

    // On flub club submission
    $("#FCSignupButton").on("click", function () {
        let newSignup = $("#signupEmail").val()
        // Validation
        if (newSignup === "") {
            alert("Please fill out the input")
        } else {
            // Send to firebase
            firebase.database().ref().push({
                email: newSignup,
            })
            // Toggle signup message
            $("#signedupEmail").html(newSignup)
            $("#FCSignup").addClass("hide")
            $("#thanksSignup").removeClass("hide")
        }
    })
});