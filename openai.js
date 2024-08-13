import fs from "fs";
import OpenAI from "openai";
import "dotenv/config";
import path from "path";

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

// file = path.join("downloadedfile.mp3");

async function main() {
  const translation = await openai.audio.translations.create({
    file: fs.createReadStream("file.ogg"),
    model: "whisper-1",
  });

  console.log(translation.text);
}
main();
