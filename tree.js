class Tree{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            restitution:0,
            friction:0,
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("tree.png")
        World.add(world, this.body);

    }
    display(){
        var treepos = this.body.position;
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        push()
        translate(treepos.x,treepos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(225,0,225)
        pop()
    }
}