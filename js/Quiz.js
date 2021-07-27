class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide()
    //write code to change the background color here
    background("black")
    //write code to show a heading for showing the result of Quiz
    textSize(30)
    text("result",400,30)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
    if (allContestants  !==undefined){
      var position=200
    fill("red")
    textSize(20)
    text("You have answered all the questions right the one in brown is the winner",130,200)
    for (var plr in allContestants){
    var correctAns="2"
    if (correctAns===allContestants[plr].answer)
    fill("brown")
    else 
    fill("blue")
    position+=40
    text(allContestants[plr].name+";"+allContestants[plr].answer,250,position)
    } 
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
