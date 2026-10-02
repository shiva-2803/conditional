let text = "Welcome to JavaScript!";
let index = 0;

function typing(callback) {

    if (index < text.length) {

        document.getElementById("message").innerText += text[index];

        index++;

        setTimeout(function() {
            typing(callback);
        }, 100);

    } else {

        callback();
    }
}

function finished() {
    document.getElementById("final").innerText = "Typing completed!";
}

function startTyping() {
    index = 0;
    document.getElementById("message").innerText = "";
    document.getElementById("final").innerText = "";

    typing(finished);
}