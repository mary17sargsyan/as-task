
export const updateObject = (oldObject, updatedValues)=>{
    return{
        ...oldObject,
        ...updatedValues

    };
};
export  const changedValueHandler = (controls, controlName, event)=>{

    let updateControl = updateObject(controls, {
        ...controls,
        [controlName]: updateObject(controls[controlName], {
            value:event.target.value,
            /*valide: checkValidity(event.target.value, controls[controlName].rules, controlName), */
        })
    });

    return updateControl;
}




export const searching = (value, object) =>{

    let newObj=[];
    
    const byLength = value.length;
    if(byLength===0){
        newObj=object
    }else{
        for(let key in object){
            const searchByTitle=object[key].name; 
            const objName=searchByTitle.toLowerCase();
            const val=value.toLowerCase();
                let filter = objName.includes(val)
                if(filter){
                    newObj.push(object[key])
                }
                
        }
          

              
                
        
           
        
      
    }
    
    return newObj;
};
