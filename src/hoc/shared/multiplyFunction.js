
export const updateObject = (oldObject, updatedValues)=>{
    return{
        ...oldObject,
        ...updatedValues

    };
};
export  const changedValueHandler = (controls, controlName, event)=>{
    console.log('event',event)
    let updateControl = updateObject(controls, {
        ...controls,
        [controlName]: updateObject(controls[controlName], {
            value:event.target.value,
            /*valide: checkValidity(event.target.value, controls[controlName].rules, controlName), */
        })
    });

    return updateControl;
}


export const inputSearchHandler=(controls, controlName, event,)=>{
    const updateControl = updateObject(controls, {
        ...controls,
        [controlName]: updateObject(controls[controlName], {
            value: event.target.value,
           /* valid: checkValidity(event.target.value, controls[controlName].validation),*/
            touched: true
        })
    });
    return updateControl;
}