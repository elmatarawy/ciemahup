function validateForm() {
    var valid = true;


    if (document.inputForm.name.value == "") {
        alert("name is empty");
        document.inputForm.name.focus();
        valid = false;
    } else if (document.inputForm.email.value == "") {
        alert("email is empty");
        document.inputForm.email.focus();
        valid = false;
    } else if (document.inputForm.phone.value == "") {
        alert("phone is empty");
        document.inputForm.phone.focus();
        valid = false;
    } else if (document.inputForm.message.value == "") {
        alert("message is empty");
        document.inputForm.message.focus();
        valid = false;
    } else {
        if (document.inputForm.email.value.indexOf("@") == -1 && document.inputForm.email.value.indexOf(".") == -1) {
            alert("Please Enter valid email");
            document.inputForm.email.focus();
            valid = false;
        }
    }
    return valid;
}