import { WordList } from "./wordList.model";

export interface JsonDb {
    wordList:WordList[],
    scoresList:number[]
}