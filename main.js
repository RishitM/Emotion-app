Webcam.set(
    width=350,
    height=300,
    image_format="png",
    png_quality=90
)
Webcam.attach("camera");

function TakeImg(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img src="+data_uri+"></img>";
    });
    
}