// Code your solution here

function findMatching(arr,string){
      
    const nameMatching = arr.filter(function(driver){
         if(string ===  driver){
             return true

         }
         
        if (driver.toLowerCase()===string.toLowerCase()){
            return true 
        }
            
          
    })
         
  
    return nameMatching; 
} 



function fuzzyMatch(arr,str){

      const letterMatching = arr.filter(function(driver){
      return driver.indexOf(str) === 0          
      
   })

 return letterMatching;
}


function matchName(drivers, string){

    const match = drivers.filter(function(driver){
       return driver.name === string

    })
  
    return match;

}




