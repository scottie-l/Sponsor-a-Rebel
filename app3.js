function getUserAnswer(){
    let UserAnswer = prompt("Want to Sponsor a Rebel?");
    if (UserAnswer === "yes"){
        document.write("Here's How You Can Help")
    }
    else if(UserAnswer === "no"){
        document.write("Sorry to hear of your oppression!")
    }
    else if(UserAnswer !== "yes" || UserAnswer !== "no"){
        prompt('Please Answer yes or no')}
}    
getUserAnswer();
