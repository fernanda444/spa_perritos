let step = 0;
let loveCount = 0;

function saveName() {
    let name = document.getElementById("dogName").value;
    if (name) {
        alert("El perrito se llama " + name + " 🐶");
    }
}

function updateDog(requiredStep, imgSrc, text) {
    if (step === requiredStep) {
        document.getElementById('dogImage').src = imgSrc;
        document.getElementById('status').innerText = text;
        step++;
        document.getElementById('progressBar').style.width = (step / 3) * 100 + '%';
    }
}

function bathe() {
    updateDog(0, 'img/perrito_mojado.png', '¡El perrito está mojado! Ahora sécalo.');
}

function dry() {
    updateDog(1, 'img/perrito_seco.png', 'El perrito está seco. ¡Ahora peinalo!');
}

function comb() {
    updateDog(2, 'img/perrito_limpio.png', '¡El perrito está limpio y feliz! 🐶✨');
}

function love() {
    loveCount++;
    document.getElementById('loveCount').innerText = loveCount;
}
