import { Request, Response } from "express";
import * as getmarksModel from '../model/getmarks.model'

const getMarks = async (req: Request, res: Response): Promise<void> => {
    const { registerNumber, batch } = req.params;
    const details = {
        registerNumber,
        batch
    }
    console.log("====3===")
    console.log(details)
    if (batch === 'cse') {

        const result = await getmarksModel.getMarksCSE(details);
        if (result.data == "nodata") {
            res.status(409).json({ message: 'Register number not found' })
        }
        else if (result.success == true) {
            res.status(200).json({ marksData: result.data[0] })
        }
        else {
            res.status(400).json({ message: 'marks insertion  failed' })
        }
    }
    else if (batch === 'ece') {
        const result = await getmarksModel.getMarksECE(details);
        if (result.data == "nodata") {
            console.log("===2=");
            console.log(result)
            res.status(400).json({ message: 'Register number not found' })
        }
        else if (result.success == true) {
            res.status(200).json({ marksData: result.data[0] })
        }
        else {
            res.status(400).json({ message: 'marks insertion  failed' })
        }
    }
    else {
        const result = await getmarksModel.getMarksEEE(details);
        if (result.data == "nodata") {
            res.status(409).json({ message: 'Register number not found' })
        }
        else if (result.success == true) {
            res.status(200).json({ marksData: result.data[0] })
        }
        else {
            res.status(400).json({ message: 'marks insertion  failed' })
        }
    }

}
export {
    getMarks
}