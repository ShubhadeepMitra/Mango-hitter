class chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            //stiffness:0.7,
            length:10,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.offsetX=offsetX
        this.offsetY=offsetY
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        
        strokeWeight(2);

        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y
        
        var Anchor2X=pointB.x+this.offsetX
        var Anchor2Y=pointB.y+this.offsetY

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}