
$(document).ready(function(){

  
  $(".shortimage").click(function(e){
    if(document.getElementById("tc").innerHTML=="completed"){
      $("#myRecieptTableId").remove();
    }
    var table = document.getElementsByClassName("myRecieptTable")[0];
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        rowCount+=1;
        cell1.innerHTML = e.target.getAttribute('alt');
        var value1=e.target.id-10+0.86;
        cell2.innerHTML ="$"+Math.round(value1 * 100) / 100;
        $("#basketCount").val(rowCount);
         value1=e.target.id-10+0.86;
        var tempPrice=parseFloat($("#totalPrice").val());
        value1=parseFloat(value1);
        value1+=tempPrice;
        value1=Math.round(value1 * 100) / 100;
        
        $("#totalPrice").val(value1);

  });
   var rowCount=0;
    $("#myButton").click(function(){
        window.location.href = "search.html";
    });
    $("#myButtonn").click(function(){
        window.location.href = "index.html";
    });
    $("#myInput").click(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          
        });
      });
    });
    $("#myRecieptTableBody").dblclick(function(e){
      if(e.target.tagName=="TD" && e.target.nextSibling.innerHTML[0]=='$' 
      && (e.target.innerHTML[0]!="G" && e.target.innerHTML[1]!="a" && e.target.innerHTML[2]!="s"))
      {
      rowCount-=1;
      $("#basketCount").val(rowCount);
      var remTempPrice=parseFloat($("#totalPrice").val());
      var removeVal=(e.target.nextSibling.innerHTML);
      if(removeVal[0]=='$')
      removeVal=removeVal.slice(1);
      removeVal=parseFloat(removeVal);
      remTempPrice=remTempPrice.toFixed(2);
      removeVal=remTempPrice-removeVal;
      removeVal=removeVal.toFixed(2);
      $("#totalPrice").val(removeVal);
      e.target.nextSibling.remove();
      e.target.remove();
     
      }
     });
    
    $("#myTable tr").click(function(){

        if(document.getElementById("tc").innerHTML=="completed"){
          $("#myRecieptTableId").remove();
        }
        $(this).addClass('selected').siblings().removeClass('selected');    
        var value=$(this).find('td:first').html();
        var value1=$(this).find('td:nth-child(3)').html();
       var table = document.getElementById("myRecieptTableBody");
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        rowCount+=1;
        cell1.innerHTML = value;
        cell2.innerHTML = value1;
        $("#basketCount").val(rowCount);
        var tempPrice=parseFloat($("#totalPrice").val());
        value1=value1.slice(1);
        value1=parseFloat(value1);
        value1+=tempPrice;
        value1=value1.toFixed(2);
        $("#totalPrice").val(value1);
     });

     $(".auth-button").click(function(e){
      if(document.getElementById("tc").innerHTML=="completed"){
        $("#myRecieptTableId").remove();
        return;
      }
      const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var dollars=3.19;
        var gallon=1;
        var cx=prompt("How many dollars of gas required?");//console.log(cx);
        if(specialChars.test(cx) || (/[a-zA-Z]/).test(cx)){
          alert("enter in number format");
          return;
        }
       
        var reqDollars=parseFloat(cx);
        if(cx==0){
          alert("enter value greater than zero");
          return;
        }
        if (cx === null || cx==="") {
          return; //break out of the function early
      }
        else if(reqDollars!=null && reqDollars!=0 && reqDollars!="")
         {
            var table = document.getElementsByClassName("myRecieptTable")[0];
            var row = table.insertRow();
            var cell1 = row.insertCell();
            var cell2 = row.insertCell();
            rowCount+=1;
            cell1.innerHTML = "Gas"+"["+(Math.round((reqDollars/dollars)*100)/100)+"gallons]";
            cell2.innerHTML = "$"+reqDollars;
            $("#basketCount").val(rowCount);
            var tempPrice=parseFloat($("#totalPrice").val());
            tempPrice+=(reqDollars);
            tempPrice=Math.round(tempPrice * 100) / 100;
            $("#totalPrice").val(tempPrice);


            let myVar = setInterval(myTimer ,1000);
            let myVar1 = setInterval(myTimer1 ,2000);
            function myTimer() {
                document.getElementsByClassName("auth-button")[e.target.id-1].style.border = "thick solid red";
                
            }
            function myTimer1() {
                document.getElementsByClassName("auth-button")[e.target.id-1].style.border = "thick solid black";
                
            }
            setTimeout(function(){clearInterval(myVar)},10000);
            setTimeout(function(){clearInterval(myVar1)},10000);
            document.getElementsByClassName("auth-button")[e.target.id-1].style.border = "thick solid green";
                   }
         });
});