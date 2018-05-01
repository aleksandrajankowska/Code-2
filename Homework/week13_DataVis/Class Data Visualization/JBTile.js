class JBTile extends Tile {

  // Do you feel lonely?
  processData() {
    // make a counter for each response type
    console.log(this.table.getColumn('How much of a Hype Beast are you?'));
		let answers = this.table.getColumn('How much of a Hype Beast are you?');
		this.answer =  [];
		// this.answer2 = [];
		for(var i =0; i<14;i++){
			this.answer.push(answers[i]);
			
		}
	}



  //   this.answer1 = 0;
  //   this.answer2 = 0;
  //   this.answer3 = 0;
  //   this.answer4 = 0;
  //   this.answer5 = 0;

  //   // get all the responses to that question
  //   // the useful method here is getColumn()
  //   this.hypeAnswers = this.table.getColumn('How much of a Hype Beast are you?');
  //   console.log(this.hypeAnswers);

  //   // compare each answer to the string 'Yes'
  //   // increment counters as appropriate
  //   for (let i = 0; i < this.hypeAnswers.length; i++) {
  //     if (this.hypeAnswers[i] === '1 - What is hypebeast?') {
  //       this.answer1++;
  //     } else if(this.hypeAnswers[i] === '2 - Heard about it') {
  //     	this.answer2++;
  //     } else if(this.hypeAnswers[i] === '3 - I know some things'){
  //     	this.answer3++;
  //     } else if(this.hypeAnswers[i] === '4 - Got a few Supreme shirts'){
  //     	this.answer4++;
  //     } else if(this.hypeAnswers[i] === '5 - Calculating potential income you can get from the next drop'){
  //     	this.answer5++;
  //     }else{
  //     	this.answer2++;
  //       this.answer3++;
  //       this.answer4++;
  //       this.answer5++;
  //     }
  //   }
  //   console.log(this.answer1);
  // }

  display() {
    // call super class' display method so we get our
    // clean matrix and translation
    super.display();
  }
}