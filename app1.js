// userName Var
userName
function getuserName(){
    let userName = prompt("What is your Name?")

if(userName() == "scott"){
    document.write('<h2>Welcome Padawan ' + userName + '</h2>')
} else {
    document.write('<h2>Welcome ' + userName + '<h2/>') 
}
userName();

// userAge Var
userAge 
// function userAge(){
    let userAge=prompt ("How old are you?")
    console.log (userAge)
    while(userAge !== "isNaN" && userAge == "Number"){
    
        userAge = prompt('How old are you?')
    console.log (userAge)
    }
    if (userAge === "isNaN"){
        document.write('PLease enter a numerical number')
    }  
    if(userAge === "Number"){
        document.write("")}

userAge();

// userAnswer Var
userAnswer
function getUserAnswer(){
    let userAnswer = prompt("Want to Sponsor a Rebel?");
    console.log (userAnswer)
    while(userAnswer !== "yes" && userAnswer !== "no"){
   
        userAnswer = prompt('Please Answer yes or no')
    console.log (userAnswer)
    }
    if (userAnswer === "yes"){
        document.write("Here's How You Can Help")
       }
    else if(userAnswer === "no"){
        document.write("Sorry to hear of your oppression!")}
} 
UserAnswer();
