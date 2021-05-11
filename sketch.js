var lb,lbimg,ub,rb,db, dbimg;
var pole,poleimg;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,bigb,bigimg,simg,rimg,sb,sbimg;
var door,doorimg;
var pdimg,bdimg,vdimg,tpimg,pd1,pd2,bd1,bd2,vd1,vd2,tp1;
var dimg1,d1;

function preload(){
    lbimg=loadImage("dave bg(side wall).jpg");
    dbimg=loadImage("dave bg(ud).jpg");
    poleimg=loadImage("dave bg(pole1).png");
    simg=loadImage("dave bg(small w).jpg");
    rimg=loadImage("dave bg(wall4).jpg");
    bigimg=loadImage("dave bg(wall2).jpg");
    sbimg=loadImage("dave bg(stB).jpg");
    doorimg=loadImage("dave bg(door).jpg");
    pdimg=loadImage("dave bg(pink diamond1).png");
    bdimg=loadImage("dave bg(blueDiamond1).png");
    vdimg=loadImage("dave bg(vdiamond).png");
    tpimg=loadImage("dave bg(trophy).jpg");
    dimg1=loadImage("dave pc(red1).png");


}
function setup(){

    createCanvas(windowWidth,windowHeight);
    lb=createSprite(width-1350,height-310,10,10);
    lb.addImage(lbimg);
    lb.scale=1.5;
     
    rb=createSprite(width-20,height-310,10,10);
    rb.addImage(lbimg);
    rb.scale=1.5;

    
    
    db=createSprite(width-700,height-20,10,10);
    db.addImage(dbimg);
    db.scale=1.5;
   // console.log(height);
    ub=createSprite(width-700,height-640,10,10);
    ub.addImage(dbimg);
    ub.scale=1.5;

    pole=createSprite(width-1275,height-95,10,10);
    pole.addImage(poleimg);
    pole.scale=1.5;

    b1=createSprite(width-1100,height-150,10,10);
    b1.addImage(simg);

    pd1=createSprite(width-1100,height-200,10,10);
    pd1.addImage(pdimg);
    pd1.scale=0.3;

    b2=createSprite(width-1250,height-250,10,10);
    b2.addImage(simg);

    pd2=createSprite(width-1250,height-300,10,10);
    pd2.addImage(pdimg);
    pd2.scale=0.3;

    b3=createSprite(width-900,height-250,10,10);
    b3.addImage(rimg);

    bd3=createSprite(width-900,height-300,10,10);
    bd3.addImage(bdimg);
    bd3.scale=0.15;

    /*vd1=createSprite(width-100,height-400,10,10);
    vd1.addImage(vdimg);
    vd1.scale=0.5*/

    b4=createSprite(width-1100,height-350,10,10);
    b4.addImage(simg);

    bd1=createSprite(width-1100,height-400,10,10);
    bd1.addImage(bdimg);
    bd1.scale=0.15;

    b5=createSprite(width-1250,height-450,10,10);
    b5.addImage(simg);

    bd2=createSprite(width-1250,height-500,10,10);
    bd2.addImage(bdimg);
    bd2.scale=0.15;


    /*b6=createSprite(width-900,height-450,10,10);
    b6.addImage(simg);*/

    b6=createSprite(width-750,height-500,10,10);
    b6.addImage(simg);

    bd4=createSprite(width-755,height-550,10,10);
    bd4.addImage(bdimg);
    bd4.scale=0.15;

    b7=createSprite(width-500,height-400,10,10);
    b7.addImage(rimg);

    bd5=createSprite(width-500,height-450,10,10);
    bd5.addImage(bdimg);
    bd5.scale=0.15;


    b8=createSprite(width-700,height-150,10,10);
    b8.addImage(simg);

    b9=createSprite(width-300,height-480,10,10);
    b9.addImage(simg);

    tp1=createSprite(width-300,height-537,10,10);
    tp1.addImage(tpimg);
    tp1.scale=1;

    b10=createSprite(width-150,height-350,10,10);
    b10.addImage(rimg);

    bd6=createSprite(width-150,height-400,10,10);
    bd6.addImage(bdimg);
    bd6.scale=0.15;

    bigb=createSprite(width-325,height-180,10,10);
    bigb.addImage(bigimg);

    sb=createSprite(width-480,height-110,10,10);
    sb.addImage(sbimg);

    door=createSprite(width-410,height-107,10,10);
    door.addImage(doorimg);
    door.scale=1.9;

    d1=createSprite(width-1220,height-100,10,10);
    d1.addImage(dimg1);
    d1.scale=1.2;

}
function draw(){
    background(0,0,0);
    drawSprites();
}