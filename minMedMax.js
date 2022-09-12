const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let min
  let med
  let max
  if(n1>n2&&n2>n3){
    min = n3, med = n2, max = n1
  }else if (n2>n1&&n1>n3){
    min = n3, med = n1, max = n2
  }else if (n1>n3&&n3>n2){
    min = n2, med = n3, max = n1
  }else if (n3>n1&&n1>n2){
    min = n2, med = n1, max = n3
  }else if (n3>n2&&n2>n1){
    min = n1, med = n3, max = n2
  }else{
    min = n1, med = n2, max = n3
  }
  return {"min":min,"med":med,"max":max}
}
module.exports = minMedMax
