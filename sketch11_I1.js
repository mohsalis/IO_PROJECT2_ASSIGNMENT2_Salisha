//using video sketch (3) from Doug, I built this sketch to give images of eyes on video!

let video;
let pose;
let eye;
function preload(){
    eye = loadImage("images/eye.png");

}
function setup(){
createCanvas(1000, 680);
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)    
}

function modelLoaded(){
    console.log("modelLoaded function has been called so this work!!!!");
};

function gotPoses(poses){
    console.log(poses);
    if( poses.length >0 ){
        pose = poses[0].pose;
    } 
    
} 

function draw(){
    
image(video, 0, 0);
if(pose){
    fill(255,0,0);
    //ellipse(pose.leftEye.x, pose.leftEye.y, 10);
    push();
    imageMode(CENTER);
    image(eye,pose.leftEye.x, pose.leftEye.y,width/10,height/10);
    image(eye,pose.rightEye.x, pose.rightEye.y,width/10,height/10);
    pop();
    //ellipse(pose.rightEye.x, pose.rightEye.y, 10);
    
}    
    
}