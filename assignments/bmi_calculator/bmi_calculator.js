// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if(height<=0 || mass<=0 || (height<=0 && mass<=0)){
        return("INVALID INPUT");
    }
    else{
    var BMI;
    BMI = mass / (height * height);
    if(BMI<=0){
        return("INVALID INPUT");
    }
    else{
    return(BMI);
    }    
}
}

module.exports = BMICalculator;
