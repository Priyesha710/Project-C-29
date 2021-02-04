class SlingShot{
    constructor(bodyAInput,pointBInput){
        var options = {
            bodyA : bodyAInput,
            pointB: pointBInput,
            length: 100,
            stiffness:0.2,
        }
        this.constraint = Constraint.create(options);
        World.add(userWorld,this.constraint);
    }
    display(){
        push();
        if(this.constraint.bodyA){
            strokeWeight(5);
            var pointA = this.constraint.bodyA.position;
            var pointB = this.constraint.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        pop();
    }
    attach(bodyAInput){
      this.constraint.bodyA = bodyAInput;
    }
    detach(){
        this.constraint.bodyA = null;
        
    }
}