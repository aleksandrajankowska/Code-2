class Food{

	constructor(meal, taste, isHot){
		this.meal = meal;
		this. taste = taste;
		this.isHot = isHot;
		console.log("super class constructor")

	}

	cook(){
		console.log("super class cook");
	}

	prepareToServe(){
		if(this.isHot){
			console.log("BURN");
		}

		console.log("super class prepareToServe");
	}

	spoil(){
		console.log("super class spoil");

	}

	beConsumed(){
		console.log("super class beConsumed");

	}
}

//Child Class

class Cupcake extends Food {
	constructor(hasIcing, hasSprinkles, flavor){

		console.log("child class constructor");
		super("dessert", "sweet", false);

		this.hasIcing = hasIcing;
		this.hasSprinkles = hasSprinkles;
		this.flavor = flavor;

	}

	cook(){
		console.log("child class cook");
	}

	beConsumed(){
		console.log("child class beConsumed")

		super.beConsumed();
	}
}

let myCupcake = new Cupcake(true, false, "chocolate");
console.log(Object.keys(myCupcake));

//myCupcake.prepareToServe()
myCupcake.cook();
//myCupcake.beConsumed();
