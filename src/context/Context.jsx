import { createContext } from "react";
import runChat from "../config/gemini";
export const Context=createContext();
const ContextProvider=(props)=>{
const onsent=async (prompt)=>{
  await runChat(prompt)
}
onsent("what is react js")

  const contextValue={

  }
  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}
export default ContextProvider