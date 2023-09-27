const nightmode = () =>{
    document.querySelector('body').style.background = "black";
    document.querySelector('#txt').style.color = "white";
    document.getElementById('night').style.display = "none";
    document.getElementById('day').style.display = "flex";
}

const lightmode = () => {
    document.querySelector('body').style.backgroundImage = "linear-gradient(45deg, #85FFBD 0%, #9bff7d 100%)";
    document.getElementById('day').style.display = "none";
    document.getElementById('night').style.display = "flex";
    document.querySelector('#txt').style.color = "black";
}

const signUp = () => {
    document.getElementById('hero').style.display = 'none';
    document.getElementById('form').style.display = 'block'
}

