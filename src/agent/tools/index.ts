import { getDateTime } from "./dateTime.ts";
import { webSearch } from "./webSearch.ts";
import { readFile, writeFile, listFiles, deleteFile } from "./file.ts";

// All tools combined for the agent
export const tools = {
  getDateTime,
  webSearch,
  readFile,
  writeFile,
  listFiles,
  deleteFile,
};
