function login() {

    let usr = document.getElementById('usr').value;
    let pass = document.getElementById('pass').value;

    sessionStorage.setItem("itemvalue",usr);
    return false;

};   


document.getElementById("result").innerHTML = sessionStorage.getItem("itemvalue");


