AOS.init({offset:0,});

const navbar = document.querySelector(".dropdown");
function hamburg(){
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    navbar.style.transform = "translateY(-500px)";
}