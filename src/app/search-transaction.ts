
import { Pipe, PipeTransform  } from '@angular/core';  

@Pipe ({ 
    name: 'SearchTransaction' 
 }) 
  
export class SearchTransaction implements PipeTransform { 
    transform(countryList : any ,criteriaList : any ,query : String): any { 
     
      let result : any = [] ;
     //let  criteriaList : any  = ["tName"];
     //let  criteriaList : any  = ["tName","tStatus"];
      console.log(' query : '+ countryList);
      console.log(' query : '+ query);

      for(var i =0 ; i< countryList.length;i++)
      {
       console.log( countryList[i]);

      }

      for(var i =0 ; i< criteriaList.length;i++)
      {
       console.log( criteriaList[i]);

      }
   
          if( query == null || query == 'undefined' || query == "")
          {
             console.log("If..");
            result = countryList;
            // for(var i = 0; i < countryList.length; i++ )
            // {
            //       result.push(countryList[i]);
            // }
            
          }
          else{
             console.log("Else..");
           // query = 'Welcome ' + query.toLocaleUpperCase();
          // query = 'Welcome ' + query.toLocaleLowerCase();
           for(var i = 0; i < countryList.length; i++ )
           {
             console.log("Else.1.");
                for( var j = 0 ; j < criteriaList.length; j++)
                {
                    var tempObj = countryList[i];
                    console.log("Else.2.");
                     if(tempObj[criteriaList[j]].toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) != -1)
                   // if(tempObj['tName'].toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) != -1)
                    {
                      console.log("Else.2.Match");
                      result.push(countryList[i]);
                      break;
                    } 

                }

             
           }
           if( result.length == 0)
           {
             result.push('No Matching Records..');
           }
          }
          return result;

    } 
 } 