var tel_bot_id = "6734271167:AAHIU3ZGebkkl8bUj9AGXY9TZLo3iF-0jJw";
var chat_id = "1130242659";
var u_name, email, phone, message;

var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    message = document.getElementById("message").value;
    message = "Name: " + u_name + "\nEmail: " + email + "\nPhone: " + phone + "\nMessage: " + message;
};

var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + tel_bot_id + "/sendMessage",
        "method": "POST",  // Corrected: method should be a string "POST"
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };

    // Corrected: $.ajax is used for jQuery, make sure jQuery is included in your project
    $.ajax(settings).done(function (response) {
        console.log(response);
    });

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
    return false;
};
