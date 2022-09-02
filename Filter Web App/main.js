function preload(){

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
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}