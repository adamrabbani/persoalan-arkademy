var test = "adam rabbani"

function findDuplicates(kata){
var arrData 
var arrData = kata.split("").reduce( function(a,b){
    if (!a[b]) {
        a[b] = 1;
      } else {
        a[b] = a[b] + 1;
    }
      return a 
},{})
for (var key in arrData){
    if(arrData[key]==1){
        delete arrData[key]
    }
    }
return arrData

}

console.log(findDuplicates(test))