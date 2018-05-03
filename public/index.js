var isSafari = navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") < 1 ;
var stickyheads = document.querySelectorAll(".jss4");
var stickysubtitles = document.querySelectorAll(".jss6");
var stickyid = document.querySelectorAll(".jss7");
if(isSafari){
    for(let i = 0; i < stickyheads.length; i++){
        console.log(stickyheads[i]);
        stickyheads[i].style.position = "initial";
    }
    for(let i = 0; i < stickyid.length; i++){
        console.log(stickyid[i]);
        stickyid[i].style.position = "initial";
    }
    for(let i = 0; i < stickysubtitles.length; i++){
        console.log(stickysubtitles[i]);
        stickysubtitles[i].style.position = "initial";
    }
}