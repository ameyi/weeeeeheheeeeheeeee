//https://teachablemachine.withgoogle.com/models/IyyaoROiO/
function startclassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/IyyaoROiO/model.json", modelReady);
}
function modelReady(){
    console.log("Model has been tested and loaded");
    classifier.classify(gotResults);
}