//using video sketch (3) from Doug, I built this sketch to give an image of vampire lips on video!
let video;
let pose;
let nose;
function preload(){
    nose= loadImage("images/lips.png");
    //ear2 = loadImage("images/elf2.png");
    


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
    imageMode(CENTER);//didnt know how to perfectly align to the ear 

    image(nose,pose.nose.x, pose.nose.y +50, width/10,height/10);
    //scale(-1,1);
    //image(ear2,pose.rightEar.x, pose.rightEar.y,width/10,height/10);
    
    pop();
    //ellipse(pose.rightEye.x, pose.rightEye.y, 10);
    
}    
    
}