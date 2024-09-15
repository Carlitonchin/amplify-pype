"use client"
import type { ChatFunctionSchema } from "../amplify/functions/chat/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import outputs from "../amplify_outputs.json";
Amplify.configure(outputs, {
  API: {
    GraphQL: {
      withCredentials:true
    }
  }
})
export default function App() {
  async function handleClick(){
    
    console.log(Amplify.getConfig())
    const client = generateClient<ChatFunctionSchema>()
    client.queries.chatFunction({name: "Carlos"})
  }
  return <main>hola <button onClick={handleClick}>click</button></main>;
}
