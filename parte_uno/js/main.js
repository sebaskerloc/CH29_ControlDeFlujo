function businessHours(dayNumber,hourNumber){
    if((dayNumber>0 && dayNumber<6) && (hourNumber>=9 && hourNumber<=18)){
        console.log("True");
    }else{
        console.log("False");
    }
}

console.log(businessHours(1,5))