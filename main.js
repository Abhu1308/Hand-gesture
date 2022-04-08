Webcam.set({
    height:400,
    width:400,
    image_format:"png",
    png_quality:100
});
Webcam.attach("#pic");

function snapshot() {
     Webcam.snap(function(data_uri){
         document.getElementById("Snp").innerHTML="<img id='i_1' src='"+data_uri+"'/>";        
     });
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WY6UyNzO-/model.json",modelLoaded);
function modelLoaded() {
    console.log("model loaded successfuly!")
}