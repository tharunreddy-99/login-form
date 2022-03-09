function validate(u1, p1) {
    debugger;
    let usernames = ["usercode1", "usercode2", "usercode3"];
    let passwords = ["Abc@123", "Abc@123", "Abc@123"];
    let valid = false;
    for (let i = 0; i < usernames.length; i++) {
        if ((u1 == usernames[i]) && (p1 == passwords[i])) {
            valid = true;
            break;
        }
    }
    if (u1 == null || u1 == "") {
        alert("Username can't be empty");
        return false;
    }
    else if (p1 == null || p1 == "") {
        alert("Password can't be empty");
        return false;
    }
    else if (valid) {
        window.open("submit.html");
    }
    else if (!valid) {
        alert("Invalid Credentials")
    }
    
}
