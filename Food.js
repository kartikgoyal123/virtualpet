class Food {
    constructor() {
      var foodStock
      var lastfed
      this.image=loadImage("Milk.png");
    }

    getFoodStock(){
        var FoodStockRef = database.ref('FoodStock');
          FoodStockRef.on("value",function(data){
          foodStock = data.val();
        })
    }

    updateFoodStock(Stock){
        database.ref('/').update({
            foodStock: Stock
        });
      }

      display(){
        var x=80,y=100;

        imageMode(CENTRE);
        image(this.image,720,220,70,70);
        
        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30

            } 

        }
      } 

    
}  