import fs from "fs";
import OpenAI from "openai";
import "dotenv/config";
import path from "path";

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

async function main() {
  const translation = await openai.audio.translations.create({
    file: fs.createReadStream("file.ogg"),
    model: "whisper-1",
  });

  console.log(translation.text);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a given a context of chat or conversation, or a description from a user trancsribed for you, The languages can be english, hindi, punjabi, etc your task is to write a description/bio of the user based on the given input make it at most best you can.",
      },
      { role: "user", content: `${translation.text}` },
    ],
  });

  console.log(response.choices[0]);
}
main();
