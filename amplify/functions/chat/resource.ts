import { defineFunction } from '@aws-amplify/backend';
import { APP_NAME } from '../../config';
import { type ClientSchema, a, defineData } from "@aws-amplify/backend"

export const chatFunction = defineFunction({
    name: `${APP_NAME}-chat`,
    entry: './handler.ts'
});

const schema = a.schema({
    chatFunction: a
        .query()
        .arguments({
            name: a.string(),
        })
        .returns(a.string())
        .handler(a.handler.function(chatFunction)),
})

export type ChatFunctionSchema = ClientSchema<typeof schema>

export const dataChatFunction = defineData({
    schema,
    authorizationModes: {
        defaultAuthorizationMode: "iam",
    },
})