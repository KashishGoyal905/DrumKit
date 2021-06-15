const audio = document.querySelector('audio');
const audioSource = document.querySelectorAll('.key');
const clap = document.querySelector('.clap');
const hihat = document.querySelector('.hihat');
const kick = document.querySelector('.kick');
const openhat = document.querySelector('.openhat');
const boom = document.querySelector('.boom');
const ride = document.querySelector('.ride');
const snare = document.querySelector('.snare');
const tom = document.querySelector('.tom');
const tink = document.querySelector('.tink');

document.addEventListener('keydown',function(e){
if(e.keyCode==65){
    
    clap.play();
    clap.currentTime=0;
}
else if(e.keyCode==83){
    hihat.play();
    hihat.currentTime=0;
}
else if(e.keyCode==68){
    kick.play();
    kick.currentTime=0;
}
else if(e.keyCode==70){
    openhat.play();
    openhat.currentTime=0;
}
else if(e.keyCode==71){
    boom.play();
    boom.currentTime=0;
}
else if(e.keyCode==72){
    ride.play();
    ride.currentTime=0;
}
else if(e.keyCode==74){
    snare.play();
    snare.currentTime=0;
}
else if(e.keyCode==75){
    tom.play();
    tom.currentTime=0;
}
else if(e.keyCode==76){
    tink.play();
    tink.currentTime=0;
}
});