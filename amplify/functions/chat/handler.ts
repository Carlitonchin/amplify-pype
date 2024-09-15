import type { ChatFunctionSchema } from "./resource";

export const handler: ChatFunctionSchema["chatFunction"]["functionHandler"] = async (event) => {
    return `Hello, ${event.arguments.name}!`;
};