// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if(height<=0 || mass<=0 || (height<=0 && mass<=0)){
        return("INVALID INPUT");
    }
    else{
    var bmi;
    bmi = mass / (height * height);
    if(bmi<=0){
        return("INVALID INPUT");
    }
    else{
    return(bmi);
    }    
}
}

module.exports = BMICalculator;
