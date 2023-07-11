
//2023
function getDayNumber(janFirstDayNumber, yearDayNumber){
    if((janFirstDayNumber>=0 && janFirstDayNumber<=6)&&(yearDayNumber>=0 && yearDayNumber<=364)){
        yearDayNumber--;
        return yearDayNumber%7;
    }else{
        return "Error, one more time";
    }  
}
console.log(getDayNumber(0,5))


////////////////////////////////////////////////////////////////////////////////////////////
//2022
/*
function getDayNumber(janFirstDayNumber, yearDayNumber){
    if((janFirstDayNumber>=0 && janFirstDayNumber<=6)&&(yearDayNumber>=0 && yearDayNumber<=364)){
        yearDayNumber -= 2;
        return yearDayNumber%7;
    }else{
        return "Error, one more time";
    }  
}
console.log(getDayNumber(6,5))
*/