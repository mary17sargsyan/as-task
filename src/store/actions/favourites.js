/*
  let weNedd={
        id: null, 
        top: null,
        active: null,
        name: null
    }
    for(let key in games.categories){
        if(games.categories[key].nameKey==="All games"){
           // top.gamesListTop=games.categories[key].games;
       }
    }
    for(let key in games.games){
        let weNeed={
            id: null, 
            top: null,
            active: null,
            name: null
        }
        weNeed.id=games.games[key].id;
        weNeed.name=games.games[key].name;
        for(let top in games.categories){
            let cat=games.categories[top].games;
            cat.map((id)=>{
               if(id.id===weNeed.id){
                   weNeed.top=id.top
               }
              }); 
        }
        for(let active in games.favorites){
            console.log(games.favorites[active].id)
         /*   games.favorites[active];
            games.favorites[active].map((id)=>{
               if(id.id===weNeed.id){
                   weNeed.active=id.active
               }
              }); 
              */
      
              /*  if(games.games[key][id]===undefined){
                    for(let types of Object.values(games)){
                        for(let t in types){
                            console.log(types.t)
                        }
                    }
                }else{
                    if(weNedd[id] === null){
                        weNedd[id]=games.games[key][id];
                    }
                   
                    
                }
                */