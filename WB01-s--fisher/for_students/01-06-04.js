function makeBlink(id, rate) {
    rate = rate ? rate : 1000;
    let toblink = document.getElementById(id);
    let lastBlinkTime = 0;
    let lastBlinkColor = 0;
    let r = 255;
    let g = 0;
    let b = 0;
    let rgb = "rgb("+r+","+g+","+b+")";
    let gdir = 1;
    let bdir = 1;

    function blinker(time) {
        if ((time-lastBlinkTime) > rate) {
            rgb = "rgb("+r+","+g+","+b+")";
            lastBlinkTime = time;
            toblink.style.backgroundColor = rgb;
            if(g == 254){
                gdir = -1;
            }
            if(g == 1){
                gdir = 1;
            }
            if(b == 254){
                bdir = -1;
            }
            if(b == 1){
                bdir = 1;
            }
            g = Number((g+gdir) % 255);
            b = Number((b+bdir) % 255);
            console.log(rgb);
            lastBlinkTime++;
        }
        window.requestAnimationFrame(blinker);
    }
    window.requestAnimationFrame(blinker);
}
makeBlink("box4-text",1);