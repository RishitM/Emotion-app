Webcam.set(
    width=350,
    height=300,
    image_format="png",
    png_quality=90
)
Webcam.attach("camera");

function TakeImg(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='new_pic' src="+data_uri+"></img>";
    });
}
console.log("ml5 version",ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lzTSZ2_yK/model.json",
modelLoaded);

function modelLoaded(){
    console.log("The Model Is Loaded!");
};
function IdentifyImg(){
img= document.getElementById("new_pic");
classifier.classify(img ,
    got_Result)
}
function got_Result(error,result){
   if (error){
       console.error("3rr0r");
   } 
   else {
       console.log(result);
    Name1=result[0].label;
    Name2=result[1].label;
       document.getElementById("name1").innerHTML= Name1;
       document.getElementById("name2").innerHTML= Name2;

   }
}
