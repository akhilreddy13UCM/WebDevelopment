var ele=document.getElementById("q1");
ele.addEventListener("click",() => { fun1(ele) });
var eele=document.getElementById("q2");
eele.addEventListener("click",() => { fun1(eele) });
var eeele=document.getElementById("q3");
eeele.addEventListener("click",() => { fun1(eeele) });
var buttons=document.getElementsByTagName("input");
var count=buttons.length;
var j=document.querySelectorAll('#ans');
j[0].style.display = 'none';
j[1].style.display = 'none';
j[2].style.display = 'none';
const clicks=[0,0,0];
function fun1(a)
{
    for (var i = 0; i < count; i += 1) 
    {
        if(a.id==buttons[i].id && clicks[i]%2==0)
        {
            clicks[i]=1;
            document.getElementById(buttons[i].id).src="minus.png";
            j[i].style.display = 'block';
        }
        else
        {
            clicks[i]=2;
            document.getElementById(buttons[i].id).src="plus.png";
            j[i].style.display = 'none';
        }
     }
}