function preload() {
    video = createCapture(VIDEO);
    video.hide();
}


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 600, 500);
}