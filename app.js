function mybutton() {
        var randomValue = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
        var retVal = "";
    for (var i = 0; i < 10; ++i) {
        retVal += randomValue.charAt(Math.floor(Math.random() * randomValue.length));
    }
    document.getElementById("bresult").innerHTML = retVal
}