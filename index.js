// Code your solution here



function findMatching(driver,name2){
   let list =driver.filter((driver) => driver.toLowerCase()==name2.toLowerCase())
   return list ;

}

function fuzzyMatch (arr,str){
 return arr.filter(
    (po) =>  
    po.toLowerCase().indexOf( str.toLowerCase())==0 )
}
function matchName(drivers,str){
return drivers.filter((driver)=>
driver.name==str
)
}