window.onload = function () {
        initColorPicker();
};

function  initColorPicker() {
    let colorBox = document.getElementById("color-box");
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };
    setColorPickerEventListeners(colorBox, rgb);
}

function setColorPickerEventListeners(colorBox, rgb){
    rgb.red.adddEventListener('change', () => {
        console.log("Red value: ", rgb.red.value);
    })
}