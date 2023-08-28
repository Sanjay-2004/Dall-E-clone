import FileSaver from "file-saver";
import { surpriseMePrompts } from "../Constants";

export function getRandom(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) {
    return getRandom(prompt);
  }
  return randomPrompt;
}

export async function downloadImg(prompt, name, photo) {
  FileSaver.saveAs(photo, `${prompt}-by ${name}.jpg`);
}
