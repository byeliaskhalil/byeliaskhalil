
document.getElementById("status").addEventListener("click", addHtml);
function addHtml() {
    let status = document.getElementById("status")
    var x = status.options[status.selectedIndex].text;
    if (x == "Student") {
        let element = document.getElementById("edu-id")
        element.innerHTML =
            `
            <p>When is your expected graduation date?</p>
            <input type="text" name="user_gradDate" id="gradDate" placeholder="Your answer" required>
            `
    } else {
        let element = document.getElementById("edu-id")
        element.innerHTML = "";
    }
}
document.getElementById("prev").addEventListener("click", addHtml2);
function addHtml2() {
    let prev = document.getElementById("prev")
    var x = prev.options[prev.selectedIndex].text;
    if (x == "Yes") {
        let element = document.getElementById("xperience")
        element.innerHTML =
            `
            <p>How many years of experience?</p>
            <input type="text" name="user_xperience" id="xperience-numb" placeholder="Your answer" required>
            `
    } else {
        let element = document.getElementById("xperience")
        element.innerHTML = "";
    }
}
