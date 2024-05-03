// import { createContext, useContext } from "react";

// export const Filecontext= createContext({
//     // todos:[
//     //     {
//     //         id:1,
//     //         message:"Todo",
//     //         check:false,
//     //     }
//     // ],
//     da:5,
//     // addTodo:(todo)=>{},
//     // updateTodo: (id,todo)=>{},
//     // deleteTodo: (id)=>{},
//     // toggleComplete: (id)=>{}
//     updateDa:(d)=>{},
// })

// export const FileProvider= Filecontext.Provider;

// export function useTodocontext(){
//     return useContext(Filecontext);
// }
import { createContext, useContext } from "react";

export const Filecontext= createContext({
    da:5,
    updateDa:(d)=>{}
})

export const FileProvider= Filecontext.Provider;

export function useTodocontext(){
    return useContext(Filecontext);
}