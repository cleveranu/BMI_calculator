function bmiCalcy()
{
    var g= document.getElementById("x1").value;
    console.log(g);
    var g2= document.getElementById("x2").value;
    console.log(g2);
    var n='';
  if(g.checked==true && g2.checked==false)
  {
    alert("male selected");
  }
  else 
  {
       alert("female selected");
  }
//   else{
//     alert("select gender");
    
//   }
  var h=document.getElementById("n1").value;
    console.log(h);
    var w=document.getElementById("n2").value;
    console.log(w);

    // if((h=0) || (w=0))
    // {
    //     alert("Enter the values in both field !!")
    //     return;
    // }
    var bmi =(w/(h*h)) *10000;
    b=Math.round(bmi); 
    console.log(b);
    alert("The BMI of " +n+ " " +b);
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
    document.getElementById("x1").value="";
    document.getElementById("x2").value="";
}
