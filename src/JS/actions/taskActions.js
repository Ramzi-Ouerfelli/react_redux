import { ADD_TASK , DELETE_TASK, EDIT_TASK , DONE_TASK} from "../constant/actionsTypes";

export const addTask = (newTask)=>{
    return {
        type : ADD_TASK,
        payload : newTask
    }
}
export const editTask = (id , newTask)=>{
    // console.log("action : " , id , newTask)
    return {
        type : EDIT_TASK,
        payload : {id , newTask}
    }
}
export const deleteTask = (id)=>{
    return {
        type : DELETE_TASK,
        payload : id 
    }
}
export const doneTask = (id)=>{
    return {
        type : DONE_TASK,
        payload : id 
    }
}