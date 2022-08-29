
import { Response, Request } from "express";
import { roundToHundred } from "../util/helper-methods";
import { getScoresList } from "../data/data-reader";
import { SuccessResponse } from "../models/response";


/**
 * get the rank according to sent score
 * @route Post /api
 */
export const rank = (req: Request, res: Response<SuccessResponse<number>>) => {
    const score = req.body.score;
    const scoresList = getScoresList();
    const itemsBelowScoreCount = scoresList.reduce((accum,item)=>{
        if( score > item ) accum++;
        return accum;
    },0);
    const rank =( itemsBelowScoreCount / scoresList.length ) * 100;
    const result = roundToHundred(rank);
    return res.json({result});
};