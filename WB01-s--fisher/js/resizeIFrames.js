// fix for IFrames - they need to be resized after they load
//
// make this function execute immediately
// use it to not pollute the global context
(function() {
    function resizeIframe(obj) {
        obj.style.height = (obj.contentWindow.document.body.offsetHeight + 32) + "px";
    }
    let oldOnload = window.onload;
    let resizeFunc = function() {
        if (oldOnload) {
        oldOnload();
        }
        let frames = document.getElementsByTagName("iframe");
        for (let iframe of frames) {
        resizeIframe(iframe);
        }
    }
    // we assume this is called exactly once, so we can just set up handlers
    window.onload = resizeFunc;
    window.addEventListener("resize", function() {
        resizeFunc();
    });
})();


/* 
https://stackoverflow.com/questions/55836422/typeerror-cannot-read-property-offsetheight-of-null-after-screen-resize-when

handleResize = () => {
    let highestSlide = 0;

    this.refArray.forEach(ref => {
      if (ref.current && highestSlide < ref.current.offsetHeight) {
        highestSlide = ref.current.offsetHeight;
      }
    });
  };
 */