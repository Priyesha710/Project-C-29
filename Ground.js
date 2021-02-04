class Ground{
    constructor(xInput,yInput,widthInput,heightInput){
        var options = {
            isStatic: true
        }
        this.x = xInput;
        this.y = yInput;
        this.height = heightInput;
        this.width = widthInput;
        this.body = Bodies.rectangle(xInput,yInput,widthInput,heightInput,options);
        World.add(userWorld,this.body);
    }
    display(){
        push();
        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}