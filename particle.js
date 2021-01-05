class Particle
{
    constructor(x,y,r){
    var opTians={
        restitution:0.4,
        friction:1,
        isStatic:false,
        density:1.2
    } 
    this.radius=r;
    
    this.body=Bodies.circle(x,y,r,opTians);
    this.color=color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);
}
   display(){
       var pos=this.body.position;
       var angle=this.body.angle;

       push()
       translate(pos.x,pos.y);
       rotate(angle);
       fill(this.color);
       ellipse(0,0,this.r,this.r);
       pop()
   }
}