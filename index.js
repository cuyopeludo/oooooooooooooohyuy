
function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/AqI1ZfULV/model.json",nkb);

}
function nkb(){
classifier.classify(gty);

}


function gty(error, mjk){
if (error) {
    console.log(error);
} else {
    console.log(mjk);
    document.getElementById("result_label").innerHTML="silencion pusieron" + mjk[0].label;
    document.getElementById("result_confidence").innerHTML="ohhhhhhhhhhhhhhhhhhhhh" + mjk[0].confidence;
    aliens1=document.getElementById("alien1");
    aliens2=document.getElementById("alien2");
    aliens3=document.getElementById("alien3");
    aliens4=document.getElementById("alien4");
    if (mjk[0].label=="Ruido de fondo") {
        aliens1.src="aliens-01.gif";
        aliens2.src="aliens-02.png";
         aliens3.src="aliens-03.png"; 
         aliens4.src="aliens-04.png";
    }
    if (mjk[0].label=="sonido2") {
        aliens1.src="aliens-01.png";
        aliens2.src="aliens-02.gif";
         aliens3.src="aliens-03.png"; 
         aliens4.src="aliens-04.png";
    }
    if (mjk[0].label=="Class 3") {
        aliens1.src="aliens-01.png";
        aliens2.src="aliens-02.png";
         aliens3.src="aliens-03.gif"; 
         aliens4.src="aliens-04.png";
    }
    if (mjk[0].label=="Class 4") {
        aliens1.src="aliens-01.png";
        aliens2.src="aliens-02.png";
         aliens3.src="aliens-03.png"; 
         aliens4.src="aliens-04.gif";
    }
    }
    
    }