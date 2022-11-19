
function login() {
    // get values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // set values
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("profilepicture", "https://i.stack.imgur.com/34AD2.jpg");

    window.location.href = "loggedin.html"
}

function checkIfUserIsLoggedIn() {
    var user_local = localStorage.getItem("username");
    if (user_local == "") {
        window.location.href = "http://127.0.0.1:5500/index.html?error=You cannot leave the username field blank.";
    } else {
        if (document.getElementById("pfp-display").src == null) {
            localStorage.setItem("profilepicture", "https://i.stack.imgur.com/34AD2.jpg");
            document.getElementById("pfp-display").src = "https://i.stack.imgur.com/34AD2.jpg";
            window.location.reload();
        } else {
            document.getElementById("pfp-display").src = localStorage.getItem("profilepicture");
            document.getElementById("display-username").textContent = "Welcome " + localStorage.getItem("username") + "!";
        }
    }
}

function errorMessage() {
    // You can get url_string from window.location.href if you want to work with
// the URL of the current page
var url_string = window.location.href; 
var url = new URL(url_string);
var errormess = url.searchParams.get("error");
var successmess = url.searchParams.get("success");
document.getElementById("errormessage").textContent = errormess;
document.getElementById("successmessage").textContent = successmess;
}

function logOut() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("profilepicture");
    window.location.href = "http://127.0.0.1:5500/index.html?success=Successfully Logged Out!";
}

function changePassword() {
    var useraccountname = localStorage.getItem("username");
    localStorage.setItem("password", prompt("Please enter a new password for the account " + useraccountname + "."));
    alert("Changed Password Successfully!");
    window.location.href = "loggedin.html";
} 

function changeUsername() {
    var useraccountname2 = localStorage.getItem("username");
    localStorage.setItem("username", prompt("Please enter a new username for the account " + useraccountname2 + "."));
    alert("Changed Username Successfully!");
    window.location.href = "loggedin.html";
}

function changeProfilePicture() {
    var useraccountname3 = localStorage.getItem("username");
    localStorage.setItem("profilepicture", prompt("Please enter a image url to be the profile picture for the account " + useraccountname3 + "."));
    alert("Changed Profile Picture Successfully!");
    window.location.href = "loggedin.html";
}

function changeProfilePictureAlt() {
    $("#change-pfp").click(function() {
        var input = $(document.createElement('input')); 
        input.attr("type", "file");
        input.trigger('click');
        return false;
    });
}

