class JBTile extends Tile {

	processData(){

		this.answer1 = 0;
		this.answer2 = 0;
		this.answer3 = 0;
		this.answer4 = 0;
		this.answer5 = 0;

		//use getColumn command
		this.hypeAnswers = this.table.getColumn('How much of a Hype Beast are you?');
		console.log(this.hypeAnswers);

		for(let i = 0; i < this.hypeAnswers; i ++);{
			if(this.hypeAnswers[i] === 'I know some things'){
				this.answer3 ++;
			}else{
				this.answer5++;
				this.answer4++;
				this.answer2++;
				this.answer1++;
			}
		}

		console.log(this.answer1);
	}

  	display() {
    	noStroke();

    // call super class' display method so we get our
    // clean matrix and translation
    	super.display();

	}
}
