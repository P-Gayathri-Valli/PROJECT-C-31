class umbrella {
    constructor(x,y){
        var options={
            isStatic :true,
            //friction:0.1,
            //density:1
        }
        this.umbrella = Bodies.circle(x,y,40,options);
        this.radius=40;
        this.image=loadImage("walking_1.png")
        World.add(world, this.umbrella);

    }
    display(){
        var pos =this.umbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y+50, 250,250);
      }
   
}