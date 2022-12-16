                                ////Variables //////////
// dataset presented as array
var arrayDataset = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];



// total amount of months in array
var totalMonths;
// total  revenue = profit + losses
var totalMoney =0;
// Array length storage purely to reduce amount of recalculations later
var totalArrayLength;
totalArrayLength=arrayDataset.length;

//  total net change per whole period 
var totalMonthProfitChange =0;
// max profit (month + money)
var maxProfitMonth;
var maxProfitMoney;
// min profit (month + money)
var minProfitMonth;
var minProfitMoney;

// text for output
var textOutputMessage = "Financial Analysis";
var textDottedLine = "----------------------------";

// temporary values for looping through the array
var tempMonthProfitChange = 0;

// starting values for min/max as second-first months profit/loss
maxProfitMoney = 0;
minProfitMoney = 0;


// main loop through the array

try{
    for(let i=0;i<totalArrayLength;i++){
        
    // simply sum all profit/loss values t odisplay a total revenue
    totalMoney = totalMoney + arrayDataset[i][1]; 
         

    // track profit/loss changes (Current month aginst previous month) (except first month as there is nothing to compare against)
      if(i>0) {
    // calculate profit/loss amount 
    tempMonthProfitChange =arrayDataset[i][1]-arrayDataset[i-1][1];
    totalMonthProfitChange = totalMonthProfitChange+tempMonthProfitChange;
     
    // check if current month profit/loss change against previous period is smaller then previous value
    if(maxProfitMoney<tempMonthProfitChange){
        maxProfitMoney = tempMonthProfitChange;
        maxProfitMonth = arrayDataset[i][0];
      
    }
    // check if current month profit/loss change against previous period is bigger then previous value
    if(minProfitMoney>tempMonthProfitChange){
        minProfitMoney = tempMonthProfitChange;
        minProfitMonth = arrayDataset[i][0];
    }


}


// old code section, might be required if there is an update on profit/loss changes calculation criteria

   //if(maxProfitMoney<arrayDataset[i][1]-arrayDataset[i-1][1]){
   // maxProfitMoney = arrayDataset[i][1];
   // maxProfitMonth = arrayDataset[i][0];
//}
// // check if current month profit/loss change against previous period is smaller then previous
//if(minProfitMoney>arrayDataset[i][1]-arrayDataset[i-1][1]){
//minProfitMoney = arrayDataset[i][1];
//minProfitMonth = arrayDataset[i][0];
//}
    

    }

}

catch{
console.log("Unable to process main loop calculations");

}


//////// Export data to console /////////

try{
// header
console.log(textOutputMessage);
console.log(textDottedLine);

// output totals
console.log("Total Months: " + totalArrayLength);
console.log("Total: $"+totalMoney);

// output average profit/loss per month (Average  Change)
console.log("Average  Change: $"+ (totalMonthProfitChange/(totalArrayLength-1)).toFixed(2));

//output max and min profit
//Greatest Increase in Profits
console.log("Greatest Increase in Profits: "+ maxProfitMonth + " ($"+maxProfitMoney + ")" );
//Greatest Decrease in Profits
console.log("Greatest Decrease in Profits: "+ minProfitMonth + " ($"+minProfitMoney + ")" );

}
catch{
console.log("Unable to export data to console")

}


