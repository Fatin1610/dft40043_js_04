function onLoad() {
    alert("Page is loaded");
}

function PAlert() {
    alert("Hello\nMy name is Fatin Faiqah");
}

function PComfirm() {
    confirm("Press a button!");
}

function PPrompt() {
    var person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
  }

function onSubmit() {
    alert("The form was submitted");
}

function onFocus(x) {
    x.style.background = "yellow";
}

function onBlur() {
    var x = document.getElementById("myInput");
    document.getElementById("myInput").style.background = "red";
}