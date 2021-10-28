// Algorithm
// ----------------------------------------------------------------
/* step1: define a const variable named same frequency
step2: declare two variable named strNum1 and strNum2 
step3: if strNum1 and strNum2 have equal frequency, then it proceeds
step4: otherwise it breaks
step5: run a loop to strNum1
step6: if strNum1 value is in strNum2
step7: then true
step8: if there is no same value in strNum2, then return false
step9: end */

const sameFrequency = (num1, num2) => {
    strNum1 = num1.toString();
    strNum2 = num2.toString();
  
    if (strNum1.length !== strNum2.length) return false;
  
    const freqCount1 = {};
  
    for (let val of strNum1){
    freqCount1[val] = (freqCount1[val] || 0) + 1;
    }
    for (let val of strNum2) {
      if (!freqCount1[val]) return false;
      freqCount1[val]--;
    }
  
    return true;
  };

  // time complexity O(n)