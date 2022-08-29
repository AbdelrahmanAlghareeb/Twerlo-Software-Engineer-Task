import { Response, Request } from "express";
import { WordList } from "../models/wordList.model";
import { getWordList } from "../data/data-reader";
import { posTypes } from "./part-of-speech";
import { SuccessResponse } from "../models/response";


/**
 * Return a random number of words that contain at least 1 from each type
 * @route GET /api
 */
export const words = (req: Request, res: Response<SuccessResponse<WordList[]>>) => {
    const limit = Number(req.query.limit) || 10; 
    const wordListArr = getWordList(); // load words data
    const totalWordListCount = wordListArr.length;
    const result :WordList[] = [];
    const selectedIds :number[] = [];

     // return a word by index
     const getWordByIndex = (index:number)=>{
        const outOfRange = index >= wordListArr.length;
        if(outOfRange) return null;
        return wordListArr[index];
    };

    const selectedPosTypesCount :{[key:string]:number} = posTypes.reduce((accum:{[key:string]:number},item)=>{
        accum[item] = 0;
        return accum;
    },{});

    const unSelectedPosTypesCount = ()=>Object.values(selectedPosTypesCount).reduce((accum,item)=>{
        if(item==0){
            accum++;
        }
        return accum;
    },0);

    const isUnselectedType = (type:string) : boolean => {
        return selectedPosTypesCount[type] == 0;
    };

    while(result.length < limit){
        const randomIndex = Math.floor(Math.random() * totalWordListCount);
        const currentRecord = getWordByIndex(randomIndex);
        const alreadySelectedWord = selectedIds.includes(currentRecord.id);
        const currentRecordPosType = currentRecord.pos;
        const remainingItems = limit - result.length;
        const notSelectedYetPosType = !isUnselectedType(currentRecordPosType);
        const criticalCount = remainingItems <= unSelectedPosTypesCount();
        if(alreadySelectedWord || (criticalCount && notSelectedYetPosType ) ) continue;
        selectedIds.push(currentRecord.id);
        selectedPosTypesCount[currentRecordPosType] ++;
        result.push(currentRecord);
    }
    return res.json({result});
};