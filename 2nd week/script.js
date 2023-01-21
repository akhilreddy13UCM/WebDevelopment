function myFunction()
{
    let x=parseFloat(document.getElementById("sub").value);
    console.log(x);
    let y=parseFloat(document.getElementById("tax").value);
    //console.log(y);
    let taxPercentage=parseFloat((x/100)*y);
    let ans=parseFloat(((x/100)*y))+x;
    taxPercentage=taxPercentage.toFixed(2);
    document.getElementById("SalesTax").value=taxPercentage;
    //console.log(taxPercentage);
    //console.log(ans);
    ans=ans.toFixed(2);
    document.getElementById("tot").value=ans;
}