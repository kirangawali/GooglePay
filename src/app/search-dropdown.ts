 
import { Pipe, PipeTransform } from '@angular/core';  
 
 @Pipe ({ 
    name: 'SearcDropdown' 
 }) 
 
 export class SearchDropdown implements PipeTransform { 
  /* transform( query: string): String { 
    /*    let result : any ;
        result = countryList;
   console.log(' countryList length: '+ countryList.length);  
   console.log(' query : '+ query);
       

       if( query == null || query == undefined || query == "String")
       {
            query = '';
       }
       else{
        // query = 'Welcome ' + query.toLocaleUpperCase();
        query = 'Welcome ' + query.toLocaleLowerCase();
       }
       return query;
    }  */

    transform( countryList: any, query : String): any  { 
      /*    let result : any ;
          result = countryList;
     console.log(' countryList length: '+ countryList.length); */
     let result : any = [] ;
     console.log(' query : '+ countryList);
     console.log(' query : '+ query);
  
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
          /// query = 'Welcome ' + query.toLocaleUpperCase();
         // query = 'Welcome ' + query.toLocaleLowerCase();
          for(var i = 0; i < countryList.length; i++ )
          {
            console.log("Else.1.");
             var tempObj = countryList[i];
             console.log("Else.2.");
             if(tempObj.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) != -1)
             {
               console.log("Else.2.Match");
               result.push(countryList[i]);
             } 
          }
          if( result.length == 0)
          {
            result.push('Null');
          }
         }
         return result;
      } 


    
 } 