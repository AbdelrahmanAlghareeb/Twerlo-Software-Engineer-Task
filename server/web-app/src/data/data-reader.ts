import fs from "fs";
import { WordList } from "../models/wordList.model";
import { JsonDb } from "../models/json-columns";
import path from "path";
const jsonFilePath = "../../db/TestData.json";
function jsonReader(filePath:string) : JsonDb {
    try {
        const jsonString = fs.readFileSync(path.join(__dirname,filePath));
        const table : JsonDb = JSON.parse(jsonString.toString());
        return table;
      } catch (err) {
        console.log(err);
        return;
      }
}

export function getWordList() :WordList[] {
    return jsonReader(jsonFilePath)?.wordList;
}


export function getScoresList() :number[] {
    return jsonReader(jsonFilePath)?.scoresList;
}
