class Plinko
{
    constructor(x,y,r){
    var opTians={
        restitution:0.4,
        friction:1,
        isStatic:true,
        density:1.2
    } 
    this.x=x;
    this.y=y;
    this.radius=r;
    
    this.body=Bodies.circle(x,y,r,opTians);
    World.add(world,this.body);
}
   display(){
       var stonepos=this.body.position;
       push()
       translate(stonepos.x,stonepos.y);
       strokeWeight(4);
       fill("red");
       ellipse(0,0,this.r,this.r);
       pop()
   }
}