function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center()
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses)
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("Nose x ="+results[0].pose.nose.x);
        console.log("Nose y ="+results[0].pose.nose.y);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }
}

function modelLoaded(){
    console.log("Posenet is initialized") 
}
function draw(){
 image(video,0,0,300,300)
 fill(blue)
 stroke(lightblue)
 circle(noseX,noseY,20)
}

function take_snapshot(){
save("pic.png");
}

noseX=0
noseY=0

