class Particle {
    constructor(x, y) {
        var options = {
            friction: 0,
            isStatic:false
        }
        this.r = 15;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
         
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
        if(pos.x>=0&&pos.x<=80&&pos.y>=520&&pos.y<=525){
            score=score+5
           
        } if(pos.x>=90&&pos.x<=160&&pos.y>=520&&pos.y<=525){
            score=score+1
        
        } if(pos.x>=170&&pos.x<=240&&pos.y>=520&&pos.y<=525){
            score=score+3
        
        } if(pos.x>=250&&pos.x<=320&&pos.y>=520&&pos.y<=525){
            score=score+6
        
        } if(pos.x>=330&&pos.x<=400&&pos.y>=520&&pos.y<=525){
            score=score+1
        
        } if(pos.x>=410&&pos.x<=480&&pos.y>=520&&pos.y<=525){
            score=score+4
        
        } if(pos.x>=490&&pos.x<=560&&pos.y>=520&&pos.y<=525){
            score=score+3
        
        } if(pos.x>=570&&pos.x<=640&&pos.y>=520&&pos.y<=525){
            score=score+4
        
        } if(pos.x>=650&&pos.x<=720&&pos.y>=520&&pos.y<=525){
            score=score+5
        
        } if(pos.x>=730&&pos.x<=800&&pos.y>=520&&pos.y<=525){
            score=score+2
        
        }
    }
   
};