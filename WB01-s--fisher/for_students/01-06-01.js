
let slider611 = document.getElementById("box1-slider1");
let slider612 = document.getElementById("box1-slider2");
let slider613 = document.getElementById("box1-slider3");
let updateValue = function(){
    document.getElementById("box1-li1").innerHTML = `Slider 1 - value ${slider611.value}`;
    document.getElementById("box1-li2").innerHTML = `Slider 2 - value ${slider612.value}`;
    document.getElementById("box1-li3").innerHTML = `Slider 3 - value ${slider613.value}`;
}

if (slider611 && slider612 && slider613) {
    slider611.oninput = function() {
        if(slider612.value == 100){
            slider613.value = slider612.value - slider611.value;
        }

        if(slider613.value <= 50){
            slider612.value = slider613.value + slider611.value;
            slider613.value = slider612.value - slider611.value;
        } else{
            slider613.value = slider612.value - slider611.value;
        }
        updateValue;
    };
    slider612.oninput = function() {
        if(slider611.value == 0){
            slider613.value = slider612.value - slider611.value;
        }
        if(slider613.value == 0){
            slider611.value = slider612.value;
        }
        if(slider613.value <= 50){
            slider613.value = slider612.value - slider611.value;
        }else{
            slider611.value = slider612.value - slider613.value;
        }
        if(slider612.value <= 50){
            slider611.value = slider612.value - slider613.value;
            slider613.value = slider612.value - slider611.value;
        }
        updateValue;
    };

    slider613.oninput = function() {    
        if(slider611.value == 0){
            slider612.value = slider613.value;
        }else{
            if(slider612.value == 100){
                slider611.value = 100 - slider613.value;
            }

            if(slider612.value - slider611.value == 0){
                if(slider613.value <= 50){     
                    slider611.value = slider612.value - slider613.value;
                   slider612.value = slider613.value + slider611.value;
                }else{
                  slider612.value = slider613.value + slider611.value;
                  slider611.value = slider612.value - slider613.value;
                }
            }else{
                slider611.value = slider612.value - slider613.value;
            }
        }
        updateValue;
    };
}

slider611.onchange = updateValue;
slider612.onchange = updateValue;
slider613.onchange = updateValue;