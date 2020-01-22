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


    // Shows list
    const shows = [
        {
            date: "1-24",
            day: "24",
            month: "1",
            year: "2020",
            city: "Orangeville, Ca",
            venue: "The Boardwalk",
            time: "6:30 PM",
            bands: ["The Kennedy Veil", "Flub", "Equipoise", "Tyrannocannon", "Smack'd Up", "Bavmorda"],
            link: "https://tickets.national-acts.com/event/tkv01242020"
        },
        {
            date: "1-25",
            day: "25",
            month: "1",
            year: "2020",
            city: "Lakewood, Ca",
            venue: "Regal Inn",
            time: "7 PM",
            bands: ["The Kennedy Veil", "The Last of Lucy", "Flub", "Equipoise", "Hailbrook Hollow"],
            link: "https://tkvsocal.bpt.me/?fbclid=IwAR2_abzDSFLQ8uC37JzmJRkCI67ncTZq-zi721AeMx6JQREynKEj5xe_qzM"
        },
        {
            date: "1-26",
            day: "26",
            month: "1",
            year: "2020",
            city: "Santa Rosa, Ca",
            venue: "The Arlene Francis Center",
            time: "6 PM",
            bands: ["The Kennedy Veil", "Flub", "Equipoise"],
            link: ""
        },
    ]

    // Date functions
    let D = new Date()
    let currentDay = D.getDate()
    let currentMonth = (D.getMonth() + 1)
    let currentYear = D.getFullYear()

    // Render Shows
    for (let i = 0; i < shows.length; i++) {
        // If no link & in future (change later)
        if ((shows[i].day - currentDay) >= 0 && (shows[i].month - currentMonth) >= 0 && (shows[i].year - currentYear) >= 0 && shows[i].link === "") {
            let showListItem = (`
        <li>
            <div class="collapsible-header" style="background: none; border: gold solid 1px; border-radius: 15px">
                <div style="width: 25%">${shows[i].date}</div><div style="width: 75%">${shows[i].city}</div>
            </div>
            <div class="collapsible-body" style="border: none; padding: 0px">
                <div class="row">
                    <div class="col s8"><h6>Venue</h6><p style="word-wrap: break-word">${shows[i].venue}</p></div>
                    <div class="col s4"><h6>Time</h6><p>${shows[i].time}</p></div>
                </div>
                <div class="row">
                    <div class="col s12">
                        <h6>Bands</h6><ol>${shows[i].bands.map(function (band) { return "<li>" + band + "</li>" })}</ol>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">
                        <a class="waves-effect waves-light btn buyTickets" href="#">TICKETS AT DOOR</a>
                    </div>
                </div>
            </div>
        </li>`)
            $("#showCollapsible").append(showListItem)
        } else if ((shows[i].day - currentDay) >= 0 && (shows[i].month - currentMonth) >= 0 && (shows[i].year - currentYear) >= 0 && shows[i].link !== "") {
            // If link & in future (change later)
            let showListItem = (`
        <li>
            <div class="collapsible-header" style="background: none; border: gold solid 1px; border-radius: 15px">
                <div style="width: 25%">${shows[i].date}</div><div style="width: 75%">${shows[i].city}</div>
            </div>
            <div class="collapsible-body" style="border: none; padding: 0px">
                <div class="row">
                    <div class="col s8"><h6>Venue</h6><p style="word-wrap: break-word">${shows[i].venue}</p></div>
                    <div class="col s4"><h6>Time</h6><p>${shows[i].time}</p></div>
                </div>
                <div class="row">
                    <div class="col s12">
                        <h6>Bands</h6><ol>${shows[i].bands.map(function (band) { return "<li>" + band + "</li>" })}</ol>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">
                        <a class="waves-effect waves-light btn buyTickets" href="${shows[i].time}">Buy Tickets</a>
                    </div>
                </div>
            </div>
        </li>`)
            $("#showCollapsible").append(showListItem)
        }
    }

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
                joined: firebase.database.ServerValue.TIMESTAMP
            })
            // Toggle signup message
            $("#signedupEmail").html(newSignup)
            $("#FCSignup").addClass("hide")
            $("#thanksSignup").removeClass("hide")
        }
    })
});