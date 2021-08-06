class Stone {
    constructor(x, y, r) 

    {
        var stone_options={
             density: 0.001
        };
        
        this.stone  = Bodies.circle(x,y,r,stone_options)
      this.r = r;
        World.add(world, this.stone);
      }
    
      show() {
        let pos = this.stone.position;
        push();
        ellipseMode(RADIUS);
        noStroke();
        fill(148,127,146);
        ellipse(pos.x,pos.y,this.r,this.r)
        pop();
      }
    }
    
