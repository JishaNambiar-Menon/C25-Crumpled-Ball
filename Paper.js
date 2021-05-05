class Paper{
  constructor(x,y,r){

    var options = {
        
        'isStatic' : false,
        'restitution' : 1,
        'friction' :0.7,
        'density' :0.5

    }
    this.image = loadImage("paper.png");
    this.body= Bodies.circle(x,y,r,options);
    this.x = x;
    this.y = y;
    this.r = r; 

    World.add(world, this.body);

  }
  display()
	{
			var paperpos=this.body.position;		
			push()
			//translate(paperpos.x, paperpos.y);
      
			imageMode(CENTER);		
      image(this.image,paperpos.x,paperpos.y,this.r*2,this.r*2)
			//fill("white");		
          //  ellipse(0,0,this.r,this.r);


			pop()
	}

}