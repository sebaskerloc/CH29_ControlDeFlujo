/*
function businessHours(dayNumber,hourNumber){
    if((dayNumber>0 && dayNumber<6) && (hourNumber>=9 && hourNumber<=18)){
        console.log("True");
    }else{
        console.log("False");
    }
}
console.log(businessHours(1,5))
*/

function last(yearDayNumber,hourNumber){
    if((yearDayNumber>0 && yearDayNumber<364) && (hourNumber>=9 && hourNumber<=18)){
        yearDayNumber--;
        yearDayNumber %= 7;
        console.log(yearDayNumber)
        if(yearDayNumber>0 && yearDayNumber<6){
            console.log("Pass")
       }else{
        console.log("Error");
       }
    }else{
        console.log("Error");
    }
}

console.log(last(1,5))