

function preload(){
    createCanvas(400,400);
}

function setup(){
   var umbrella
   var drop
var maxDrops = 100;
for(var i = 0; i<maxDrops; i++){
    maxDrops.push(new createDrop(random(0,400),random(0,400)))
}

}

function draw(){
    umbrella.display();
    drops.display();
}   

