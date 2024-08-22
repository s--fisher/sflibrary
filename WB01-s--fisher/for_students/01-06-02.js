    /** @type{HTMLInputElement} */ let slider62 = (/** @type{HTMLInputElement} */ document.getElementById("box2-slider"));
    /** @type{HTMLInputElement} */ let startbtn = (/** @type{HTMLInputElement} */ document.getElementById("box2-start"));
    /** @type{HTMLInputElement} */ let stopbtn = (/** @type{HTMLInputElement} */ document.getElementById("box2-stop"));
    let speed;
    function sf_sliderAni() {

        startbtn.onclick = function (){
            speed = 1;
        };

        stopbtn.onclick = function (){
            speed = 0;
        };

        let newValue = (Number(slider62.value)+speed) % 100;
        if (newValue<0) newValue=100;
        slider62.value = newValue.toString();
        window.requestAnimationFrame(sf_sliderAni);
    }
    sf_sliderAni();
