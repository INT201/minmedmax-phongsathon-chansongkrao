const { template } = require('@babel/core')

function minMedMax(num1, num2, num3) {
  if(num1>num2&&num2>num3&&num1>num3)
    return num3,num2,num1
  else if (num1>num2&&num3>num2&&num1>num3)
    return num2,num3,num1
  else if (num1<num2&&num3<num2&&num3>num1)
    return num1,num3,num2
  else if (num1<num2&&num3<num2&&num1>num3)
    return num3,num1,num2
  else if (num2>num1&&num3>num2&&num3>num1)
    return num1,num2,num3
  else
    return num2,num1,num3
}
module.exports = minMedMax
