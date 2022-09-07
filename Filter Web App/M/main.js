noseX=0;
noseY=0;
function preload(){
    clown_nose = loadLmage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas = create.canvas(300,300);
    canvas.center();
    video = create.Capture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}
function draw(){

}
function take_snapshot(){
    save('myFilterImage.png');
}
function modelLoaded(){
    console.log('PoseNet is Intialized');
    poseNet.on(poses, gotPoses);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX;
        console.log("nose y = " + noseY;
    }
}
