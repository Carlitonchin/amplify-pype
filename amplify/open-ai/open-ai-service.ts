import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";

class ContentOpenAIError extends Error {
  constructor() {
    super("Conteudo inválido");
    this.name = "OpenAIError";
  }
}

export class OpenAIService {
  private model: string;
  private openai: OpenAI;

  constructor() {
    this.model = "gpt-3.5-turbo-0125";
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  generate = async (
    messages: ChatCompletionMessageParam[]
  ): Promise<string> => {
    const completion = await this.openai.chat.completions.create({
      model: this.model,
      messages: messages,
    });

    if (!completion?.choices?.length) {
      throw new Error("Unexpected error generating text");
    }

    if (completion.choices[0].finish_reason == "content_filter") {
      throw new ContentOpenAIError();
    }

    if (!completion.choices[0].message?.content) {
      throw new Error("Unexpected error generating text");
    }

    return completion.choices[0].message.content;
  };
}
