import { ADD_TASK , DELETE_TASK, EDIT_TASK , DONE_TASK } from "../constant/actionsTypes";

const initialState = {
 listTasks:[
    {
        id:0,
        Text: "React",
        isDone: true
    },
    {
        id:1,
        Text: "React-Router",
        isDone: false
    },
    {
        id:2,
        Text: "React-hooks",
        isDone: false
    },
    {
        id:3,
        Text: "React-Redux",
        isDone: true
    },
 ]   
}
export const taskReducer = (state=initialState , {type , payload})=>{
    switch (type) {
        case ADD_TASK:
return {...state , listTasks : [...state.listTasks , payload]}
case EDIT_TASK:
return {...state , listTasks:state.listTasks.map(el=> 
    el.id === payload.id ? {...el , Text : payload.newTask} : el )}            
case DELETE_TASK:
    return {...state , listTasks : state.listTasks.filter((el)=> el.id !== payload)}     
case DONE_TASK:
    return {...state , listTasks : state.listTasks.map((el)=>
        el.id === payload ? {...el , isDone : !el.isDone} : el)}  
    default:
            return state;
    }
}