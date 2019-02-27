/* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

//PART ONE: GENERATE A RANDOM ROOM RATE. Write a function called genRand() that has no paremeters that will return a room rate between 100 and 400. HINT: You should hit a number within this range within 10 tries.
function genRand(){
   return (Math.random() * 400) + 100;
}
  // PART TWO: CALCULATE AND RETURN THE EXPIRY DETAILS FOR THE OFFER. Write a function called offerExpires that has one parameter a Date object. The function should return a string in the format "OFFER EXPIRES NEXT "WeekDay" (Date Month Year)". The date should be one week from today's date
function offerExpires(date){
switch(date){
            case 0: return "Sunday"; break;
            case 1: return "Monday"; break;
            case 2: return "Tuesday"; break;
            case 3: return "Wednesday"; break;
            case 4: return "Thursday"; break;
            case 5: return "Friday"; break;
            case 6: return "Saturday"; break;
    }
}
document.getElementById("offerEnds").innerHTML = "<p> OFFER EXPIRES NEXT " + offerExpires(day.getDay()) + "</p>";
//PART THREE: CALL THE FUNCTIONS AND WRITE INFO TO WEBPAGE

//Call getRand() function to get random room rate and write it to the special rate section on the webpage
document.getElementById("roomRate").innerHTML = genRand();

//create a new Date object
var day = new Date();
//Call the function passing the date object to it and write it to the offer ends section on the webpage

document.getElementById("offerEnds").innerHTML = day.getDate();

