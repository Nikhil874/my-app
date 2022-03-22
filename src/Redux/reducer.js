import { GET_TODO } from "./action"

export const reducer=(store,{type,payload})=>{
    console.log(store.todo);
     switch (type){
        case GET_TODO:
            return {...store,todo:payload}
            default: 
            return store;
     }
    
}