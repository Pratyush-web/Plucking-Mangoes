class Launcher
{
    constructor(bodyA, pointB)
    {
        var options = {
        stiffness: 0.05, 
        bodyA:bodyA,
        pointB:pointB, 
        length:25
        };
        this.pointB = pointB;
        this.launch = Constraint.create(options);

        World.add(world, this.launch);
    }

    attach(body)
    {
        this.launch.bodyA = body;
    }

    fly()
    {
        this.launch.bodyA = null;
    }

    display()
    {
        if(this.launch.bodyA)
        {
        var pointA = this.launch.bodyA.position;
        var pointB = this.pointB;

        push();
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
        }
    }
}