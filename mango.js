class Mango{
    constructor(x,y,r){
     
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.x = x;
        this.y = y;
        this.r = r
        this.image = loadImage("mango.png")
        this.body = Bodies.circle(this.x,this.y,this.r,options)
        World.add(world, this.body);
    }
    display(){
        var mangopos = this.body.position;
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);

        push()
        translate(mangopos.x,mangopos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(225,0,225)
        pop()
    }
}