const amountBatteries = prompt("What's Amount of batteries?");
const defectiveRate = prompt("What's Defective rate of batteries?");
const div100 = 100;
const twoSignsAfterComma = 2;
const amountDefBat = amountBatteries * defectiveRate / div100;
const amountWorkbat = amountBatteries - amountDefBat;

function answer () {
    if (isNaN(amountBatteries)) {
        alert('Invalid input data');
    } else if (isNaN(defectiveRate)) {
        alert('Invalid input data');
    } else if (amountBatteries < 0) {
        alert('Invalid input data');
    } else if (defectiveRate < 0 || defectiveRate > div100 ) {
        alert('Invalid input data');
    } else {
        alert('Amount of batteries: ' + amountBatteries +  
        '\nDefective rate: ' + defectiveRate + '%' +
        '\nAmount of defective batteries: ' + amountDefBat.toFixed(twoSignsAfterComma) +
        '\nAmount of working batteries: ' + amountWorkbat.toFixed(twoSignsAfterComma));
    }
}

answer();
