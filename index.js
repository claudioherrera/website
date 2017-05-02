var captionLength = 0;
var caption = '';

$(document).ready(function() {
    summaryOnDOM = $('#caption');
    beginTypeAnimation();
    beginCursorAnimation();
    repeatTypeAnimation();
});

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

function beginTypeAnimation() {
    caption = "a software engineer";
    typeSummary();
}

function typeSummary() {
    summaryOnDOM.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('typeSummary()', 90);
    } else {
        captionLength = 0;
        caption = '';
    }
}

function beginCursorAnimation() {
  setInterval('cursorAnimation()', 1100);
}

function repeatTypeAnimation() {
  setInterval(function() {
    beginTypeAnimation();
  }, 7500);
}
