class Plinko
{
    constructor(x,y)
    {
        var option={
            'isStatic' : true,
            'restitution' : 0,
           
        }
        
        this.y=y;
        this.x=x;
        this.r = 10;
        
        this.body=Bodies.circle(this.x,this.y,this.r,option);
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        fill ("yellow");
        ellipseMode(CENTER);
        ellipse( 0, 0, this.r, this.r);
        pop();     
    }

}