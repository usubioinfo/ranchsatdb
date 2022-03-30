import React from 'react'

import "./Result.scss";

import TableComponent from './Table';





export const Results = () =>{
const sdata = JSON.parse(localStorage.getItem('species'))

        return(


    <main className="flex-shrink-0">
       
        <div className="px-0 pt-2 t-3  container">
           

                <div id='species' className="mx-auto col-md-8 h4 sid"> {sdata[0].name}</div>

            
            
            
           
<TableComponent />

         </div>

  
    </main>

      
        );
        
}