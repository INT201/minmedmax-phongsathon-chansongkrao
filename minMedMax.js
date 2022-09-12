const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  if(n1>n2&&n2>n3)
    return min = n3, med = n2, max = n1
  else if (n2>n1&&n1>n3)
    return min = n3, med = n1, max = n2
  else if (n1>n3&&n3>n2)
    return min = n2, med = n3, max = n1
  else if (n3>n1&&n1>n2)
    return min = n2, med = n1, max = n3
  else if (n3>n2&&n2>n1)
    return min = n1, med = n3, max = n2
  else
    return min = n1, med = n2, max = n3
}
module.exports = minMedMax
