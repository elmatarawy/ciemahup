function cinema() {

    var x = location.hash;
    if (x == "" || x == null || x == "#home") {
        document.getElementById("home").style.display = "block";
        document.getElementById("register").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("Dirctors").style.display = "none";
        document.getElementById("Actress").style.display = "none";
        document.getElementById("Actors").style.display = "none";
        document.getElementById("admin").style.display = "none";
    } else if (x == "#register") {
        document.getElementById("home").style.display = "none";
        document.getElementById("register").style.display = "block";
        document.getElementById("login").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("Dirctors").style.display = "none";
        document.getElementById("Actress").style.display = "none";
        document.getElementById("Actors").style.display = "none";
        document.getElementById("admin").style.display = "none";
    } else if (x == "#login") {
        document.getElementById("home").style.display = "none";
        document.getElementById("register").style.display = "none";
        document.getElementById("login").style.display = "block";
        document.getElementById("about").style.display = "none";
        document.getElementById("Dirctors").style.display = "none";
        document.getElementById("Actress").style.display = "none";
        document.getElementById("Actors").style.display = "none";
        document.getElementById("admin").style.display = "none";
    } else if (x == "#about") {
        document.getElementById("home").style.display = "none";
        document.getElementById("register").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("about").style.display = "block";
        document.getElementById("Dirctors").style.display = "none";
        document.getElementById("Actress").style.display = "none";
        document.getElementById("Actors").style.display = "none";
        document.getElementById("admin").style.display = "none";
    } else if (x == "#Directors") {
        document.getElementById("home").style.display = "none";
        document.getElementById("register").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("Dirctors").style.display = "block";
        document.getElementById("Actress").style.display = "none";
        document.getElementById("Actors").style.display = "none";
        document.getElementById("admin").style.display = "none";
    } else if (x == "#Actress") {
        document.getElementById("home").style.display = "none";
        document.getElementById("register").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("Dirctors").style.display = "none";
        document.getElementById("Actress").style.display = "block";
        document.getElementById("Actors").style.display = "none";
        document.getElementById("admin").style.display = "none";
    } else if (x == "#Actors") {
        document.getElementById("home").style.display = "none";
        document.getElementById("register").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("Dirctors").style.display = "none";
        document.getElementById("Actress").style.display = "none";
        document.getElementById("Actors").style.display = "block";
        document.getElementById("admin").style.display = "none";
    } else if (x == "#admin") {
        document.getElementById("home").style.display = "none";
        document.getElementById("register").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("Dirctors").style.display = "none";
        document.getElementById("Actress").style.display = "none";
        document.getElementById("Actors").style.display = "none";
        document.getElementById("admin").style.display = "block";
    }
    var logo = document.getElementById("logout").style.display
    var adin = document.getElementById("adminn").style.display
    if (adin == "inline") {
        document.getElementById("loin").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("reg").style.display = "none";
        document.getElementById("adminn").style.display = "inline";
    } else if (logo == "inline") {
        document.getElementById("loin").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("reg").style.display = "none";
        document.getElementById("adminn").style.display = "none";
    } else {
        document.getElementById("loin").style.display = "inline";
        document.getElementById("logout").style.display = "none";
        document.getElementById("reg").style.display = "inline";
        document.getElementById("adminn").style.display = "none";
    }
}


function cinema1() {
    document.getElementById("home").style.display = "block";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("Dirctors").style.display = "none";
    document.getElementById("Actress").style.display = "none";
    document.getElementById("Actors").style.display = "none";
    document.getElementById("admin").style.display = "none";

}

function cinema2() {
    document.getElementById("home").style.display = "none";
    document.getElementById("register").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("Dirctors").style.display = "none";
    document.getElementById("Actress").style.display = "none";
    document.getElementById("Actors").style.display = "none";
    document.getElementById("admin").style.display = "none";
    var logo = document.getElementById("logout").style.display
    var adin = document.getElementById("adminn").style.display
    if (adin == "inline") {
        document.getElementById("loin").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("reg").style.display = "none";
        document.getElementById("adminn").style.display = "inline";
    } else if (logo == "inline") {
        document.getElementById("loin").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("reg").style.display = "none";
        document.getElementById("adminn").style.display = "none";
    } else {
        document.getElementById("loin").style.display = "inline";
        document.getElementById("logout").style.display = "none";
        document.getElementById("reg").style.display = "inline";
        document.getElementById("adminn").style.display = "none";
    }
}

function cinema3() {
    document.getElementById("home").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("Dirctors").style.display = "none";
    document.getElementById("Actress").style.display = "none";
    document.getElementById("Actors").style.display = "none";
    document.getElementById("admin").style.display = "none";
    var logo = document.getElementById("logout").style.display
    var adin = document.getElementById("adminn").style.display
    if (adin == "inline") {
        document.getElementById("loin").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("reg").style.display = "none";
        document.getElementById("adminn").style.display = "inline";
    } else if (logo == "inline") {
        document.getElementById("loin").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("reg").style.display = "none";
        document.getElementById("adminn").style.display = "none";
    } else {
        document.getElementById("loin").style.display = "inline";
        document.getElementById("logout").style.display = "none";
        document.getElementById("reg").style.display = "inline";
        document.getElementById("adminn").style.display = "none";
    }
}

function cinema4() {
    document.getElementById("home").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("Dirctors").style.display = "none";
    document.getElementById("Actress").style.display = "none";
    document.getElementById("Actors").style.display = "none";
    document.getElementById("admin").style.display = "none";
    var logo = document.getElementById("logout").style.display
    var adin = document.getElementById("adminn").style.display
    if (adin == "inline") {
        document.getElementById("loin").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("reg").style.display = "none";
        document.getElementById("adminn").style.display = "inline";
    } else if (logo == "inline") {
        document.getElementById("loin").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("reg").style.display = "none";
        document.getElementById("adminn").style.display = "none";
    } else {
        document.getElementById("loin").style.display = "inline";
        document.getElementById("logout").style.display = "none";
        document.getElementById("reg").style.display = "inline";
        document.getElementById("adminn").style.display = "none";
    }
}

function cinema5() {
    document.getElementById("home").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("Dirctors").style.display = "block";
    document.getElementById("Actress").style.display = "none";
    document.getElementById("Actors").style.display = "none";
    document.getElementById("admin").style.display = "none";
    var logo = document.getElementById("logout").style.display
    var adin = document.getElementById("adminn").style.display
    if (adin == "inline") {
        document.getElementById("loin").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("reg").style.display = "none";
        document.getElementById("adminn").style.display = "inline";
    } else if (logo == "inline") {
        document.getElementById("loin").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("reg").style.display = "none";
        document.getElementById("adminn").style.display = "none";
    } else {
        document.getElementById("loin").style.display = "inline";
        document.getElementById("logout").style.display = "none";
        document.getElementById("reg").style.display = "inline";
        document.getElementById("adminn").style.display = "none";
    }
}

function cinema6() {
    document.getElementById("home").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("Dirctors").style.display = "none";
    document.getElementById("Actress").style.display = "block";
    document.getElementById("Actors").style.display = "none";
    document.getElementById("admin").style.display = "none";
    var logo = document.getElementById("logout").style.display
    var adin = document.getElementById("adminn").style.display
    if (adin == "inline") {
        document.getElementById("loin").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("reg").style.display = "none";
        document.getElementById("adminn").style.display = "inline";
    } else if (logo == "inline") {
        document.getElementById("loin").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("reg").style.display = "none";
        document.getElementById("adminn").style.display = "none";
    } else {
        document.getElementById("loin").style.display = "inline";
        document.getElementById("logout").style.display = "none";
        document.getElementById("reg").style.display = "inline";
        document.getElementById("adminn").style.display = "none";
    }
}

function cinema7() {
    document.getElementById("home").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("Dirctors").style.display = "none";
    document.getElementById("Actress").style.display = "none";
    document.getElementById("Actors").style.display = "block";
    document.getElementById("admin").style.display = "none";
    var logo = document.getElementById("logout").style.display
    var adin = document.getElementById("adminn").style.display
    if (adin == "inline") {
        document.getElementById("loin").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("reg").style.display = "none";
        document.getElementById("adminn").style.display = "inline";
    } else if (logo == "inline") {
        document.getElementById("loin").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("reg").style.display = "none";
        document.getElementById("adminn").style.display = "none";
    } else {
        document.getElementById("loin").style.display = "inline";
        document.getElementById("logout").style.display = "none";
        document.getElementById("reg").style.display = "inline";
        document.getElementById("adminn").style.display = "none";
    }
}

function cinema8() {
    document.getElementById("home").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("Dirctors").style.display = "none";
    document.getElementById("Actress").style.display = "none";
    document.getElementById("Actors").style.display = "none";
    document.getElementById("admin").style.display = "block";
    var logo = document.getElementById("logout").style.display
    var adin = document.getElementById("adminn").style.display
    if (adin == "inline") {
        document.getElementById("loin").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("reg").style.display = "none";
        document.getElementById("adminn").style.display = "inline";
    } else if (logo == "inline") {
        document.getElementById("loin").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("reg").style.display = "none";
        document.getElementById("adminn").style.display = "none";
    } else {
        document.getElementById("loin").style.display = "inline";
        document.getElementById("logout").style.display = "none";
        document.getElementById("reg").style.display = "inline";
        document.getElementById("adminn").style.display = "none";
    }
}

function adminnn(x) {
    document.bgColor = x;
}