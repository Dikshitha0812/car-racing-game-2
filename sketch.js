
var form;
var player;
var playerCount=0;

function setup(){
    createCanvas(500,500);
    db=firebase.database();
    form=new Form();
   
    

}

function draw(){
    background("white");
    form.display();
}

