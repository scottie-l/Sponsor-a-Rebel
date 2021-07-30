// userName Var
// userName
function userName(){
    let userNameprompt = prompt("What is your Name?")

    if (userNameprompt == "scott"){
        document.write('<h2>Welcome Padawan ' + userNameprompt + '</h2>')
    } else {
        document.write('<h2>Welcome ' + userNameprompt + '<h2/>') 
    }
}
// userName();

// userAge Var
// userAge 
function userAge(){
    let userAge=prompt ("How old are you?")
    console.log(userAge)
    parseInt(userAge)
    while(isNaN(userAge) === true){
        userAge = prompt('How old are you?')
        console.log (userAge)
    }
    if (isNaN(userAge)=== true){
        document.write('PLease enter a numerical number')
    } 
    if(isNaN(userAge) === false){
        document.write("")}
}

// userAge();

// userAnswer Var
// userAnswer
function userAnswer(){
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
// UserAnswer();

picsOnPg
function picturesOnPage(){
    let numofpic = prompt('How many planets must be destroyed?')
    for(let i = 0; i < numofpic; i++){
        document.write('<img src="https://2.bp.blogspot.com/-fOgVYdI3bbI/WDqx_-655AI/AAAAAAAAKT8/oYDYpS2is0U-IHBNcZGZBBLxwIz4FelowCLcB/s400/alderaan.jpg">')
    }
}
// picturesOnPage();
