class Bob {
  constructor(x,y){
      var options={
        isStatic:false,
          'friction':0,
          'density':0.8,
          'restituition':1
      }
  this.body = Bodies.circle(x,y,15,options);
  this.radius=15;
  World.add(world,this.body)
    }
  display(){
  var pos=this.body.position;
  var angle=this.body.angle;
  push();
  translate(pos.x,pos.y);
  rotate(angle)
  ellipseMode(RADIUS)
  ellipse(0,0,this.radius,this.radius)
  pop()  
}
}
