class Paper{
    constructor(x, y, width, height,angle) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Matter.Bodies.circle(x, y, 70, 70,angle, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        strokeWeight(3);
        fill(255,0,255);
        ellipse( 0, 0, this.width, this.height);
        pop();
      }
}