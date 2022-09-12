const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  if(n1>n2&&n2>n3&&n1>n3)
    return n3,n2,n1
  else if (n1>n2&&n3>n2&&n1>n3)
    return n2,n3,n1
  else if (n1<n2&&n3<n2&&n3>n1)
    return n1,n3,n2
  else if (n1<n2&&n3<n2&&n1>n3)
    return n3,n1,n2
  else if (n1>n2??n2>n3)

}
module.exports = minMedMax
