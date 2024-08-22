let lasttime;
let value = 0;
let direction = 1;
let slider63 = (document.getElementById("box3-slider"));

function sf_sliderAni(timestamp) {
    if (! (lasttime === undefined) ) {
        const delta = (timestamp - lasttime) / 20.0;
        value = (value + delta* direction);
        if(slider63.value == 100){
            direction = -1;
        }
        if(slider63.value == 0){
            direction = 1;
        }
        slider63.value = Number(value);
    }
    lasttime = timestamp;
    window.requestAnimationFrame(sf_sliderAni);
}
window.requestAnimationFrame(sf_sliderAni);