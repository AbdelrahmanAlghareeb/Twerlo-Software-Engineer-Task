
import { Response, Request } from "express";
import { SuccessResponse } from "../models/response";


export const posTypes = [
    "adjective",
    "adverb",
    "verb",
    "noun"
];

/**
 * Return all the part of speech types dynamically
 * @route GET /api
 */
export const partOfSpeechTypes = (req: Request, res: Response<SuccessResponse<string[]>>) => {
    
    return res.json({result:posTypes});
};