import { Request, Response } from "express";
import * as marksModel from "../model/addmarks.model";


const addmarks = async (req: Request, res: Response): Promise<void> => {

    console.log(req.body)

    // controller for cse

    if (req.body.batch == 'cse') {
        const {
            registerNumber,
            attendence,
            operatingSystems,
            dataStructure,
            automata,
            wirelessCommunication,
            computerNetworking,
            artificialIntelligence

        } = req.body;

        const markDetails = {
            registerNumber,
            attendence,
            operatingSystems,
            dataStructure,
            automata,
            wirelessCommunication,
            computerNetworking,
            artificialIntelligence
        }
        const result = await marksModel.addmarksCSE(markDetails);

        if (result.data == "dataExist") {
            res.status(409).json({ message: 'Marks already added' })
        }
        else if (result.success == true) {
            res.status(200).json({ marksData: result.data })
        }
        else {
            res.status(400).json({ message: 'marks insertion  failed' })
        }

    }

    // controller for ece

    if (req.body.batch == 'ece') {

        const {
            registerNumber,
            attendence,
            embeddedSystems,
            wirelessCommunication,
            informationTheory,
            signalsAndSystems,
            logicDesign,
            electronicCircuit

        } = req.body

        const markDetails = {
            registerNumber,
            attendence,
            embeddedSystems,
            wirelessCommunication,
            informationTheory,
            signalsAndSystems,
            logicDesign,
            electronicCircuit
        }

        const result = await marksModel.addmarksECE(markDetails);

        console.log("===1===")
        console.log(result)

        if (result.data == "dataExist") {
            res.status(409).json({ message: 'already exist' })
        }
        else if (result.success == true) {
            res.status(200).json({ marksData: result.data })
        }
        else {
            res.status(400).json({ message: 'marks insertion  failed' })
        }

    }


    //   controller for eee

    if (req.body.batch == 'eee') {

        const {

            registerNumber,
            attendence,
            signalsAndSystems,
            analogElectronics,
            communication,
            digitalDesign,
            controlEngineering,
            electroMechanics

        } = req.body

        const markDetails = {
            registerNumber,
            attendence,
            signalsAndSystems,
            analogElectronics,
            communication,
            digitalDesign,
            controlEngineering,
            electroMechanics
        }

        const result = await marksModel.addmarksEEE(markDetails);

        console.log("===1===")
        console.log(result)

        if (result.data == "dataExist") {
            res.status(409).json({ message: 'already exist' })
        }
        else if (result.success == true) {
            res.status(200).json({ marksData: result.data })
        }
        else {
            res.status(400).json({ message: 'marks insertion  failed' })
        }

    }

}


export {
    addmarks
}