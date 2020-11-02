var e_mails = ["eslam1@gmail.com", "eslam2@gmail.com", "hassan1@gmail.com", "hassan2@gmail.com", "walid@gmail.com", "ahmed@gmail.com"];
var passs = "1234";

function validLogin() {
    if (document.loginForm.email.value == "team99@gmail.com" && document.loginForm.pass.value == passs) {
        location.replace("#home");
        document.getElementById("loin").style.display = "none";
        document.getElementById("reg").style.display = "none";
        document.getElementById("adminn").style.display = "inline";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("home").style.display = "block";
        document.getElementById("register").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("Dirctors").style.display = "none";
        document.getElementById("Actress").style.display = "none";
        document.getElementById("Actors").style.display = "none";
        document.getElementById("admin").style.display = "none";
    } else if (document.loginForm.email.value != "team99@gmail.com" && document.loginForm.pass.value == passs) {

        for (var i = 0; i < 6; i++) {
            if (document.loginForm.email.value == e_mails[i]) {
                location.replace("#home");
                document.getElementById("loin").style.display = "none";
                document.getElementById("reg").style.display = "none";
                document.getElementById("adminn").style.display = "none";
                document.getElementById("logout").style.display = "inline";
                document.getElementById("home").style.display = "block";
                document.getElementById("register").style.display = "none";
                document.getElementById("login").style.display = "none";
                document.getElementById("about").style.display = "none";
                document.getElementById("Dirctors").style.display = "none";
                document.getElementById("Actress").style.display = "none";
                document.getElementById("Actors").style.display = "none";
                document.getElementById("admin").style.display = "none";
            }
        }
    } else {
        var tr = confirm("you not a memper please sign up");
        if (tr) {
            location.replace("#register");
            document.getElementById("home").style.display = "none";
            document.getElementById("register").style.display = "block";
            document.getElementById("login").style.display = "none";
            document.getElementById("about").style.display = "none";
            document.getElementById("Dirctors").style.display = "none";
            document.getElementById("Actress").style.display = "none";
            document.getElementById("Actors").style.display = "none";
            document.getElementById("admin").style.display = "none";
        }
    }
}


function validregister() {
    var reg = document.getElementById("registerform");
    if (reg.checkValidity()) {
        location.replace("#home");
        document.getElementById("loin").style.display = "none";
        document.getElementById("reg").style.display = "none";
        document.getElementById("adminn").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("home").style.display = "block";
        document.getElementById("register").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("Dirctors").style.display = "none";
        document.getElementById("Actress").style.display = "none";
        document.getElementById("Actors").style.display = "none";
        document.getElementById("admin").style.display = "none";
    }
}

function logoutbtn() {
    document.getElementById("loin").style.display = "inline";
    document.getElementById("reg").style.display = "inline";
    document.getElementById("adminn").style.display = "none";
    document.getElementById("logout").style.display = "none";
}