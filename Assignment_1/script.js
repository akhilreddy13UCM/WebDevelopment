  var images = [], x = -1;
  images[0] = "sc1.png";
  images[1] = "sc2.png";

  function startTimer() {
    //console.log("1");

    setInterval(displayNextImage, 1000);//console.log("2");
}

function displayNextImage() {
    //console.log(x);
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function highlight(e)
{
    e.target.classList.toggle("highlight");
}
var absent=0;
for(var i=0;i<=31;i++)
{
    document.getElementsByTagName('td')[i].setAttribute("block",i);
    document.getElementsByTagName('td')[i].setAttribute("val",1);
    document.getElementsByTagName('td')[i].addEventListener('click',(e)=>{
        var x = e.target.getAttribute('val');
        x=parseInt(x);
        x=x+1;
        if(x%2==0)
        {
            absent+=1;
        }
        else{
            absent-=1;
        }
        e.target.setAttribute('val',x);
        //console.log(e.target.getAttribute('val'));
        highlight(e);
        document.getElementById("ptag").innerHTML="The number of students absent="+absent;
        //console.log("absent"+absent);
    });
}
