var son1 = +prompt("1-sonni kriting")
var son2 = +prompt("2-sonni kriting")
var son3 = +prompt("3-sonni kriting")
if (son1<son2 && son1 > son3 || son1 > son2  && son1 < son3 ){
   alert(son1)
} else if(son2  < son1 && son2  > son3 || son2  > son1 && son2  < uson3){

   alert(son2 )
} else if(son3 < son1 && son3 > son2  || son3 > son1 && son3 < son2 ){
 alert(son3)
}