import db from "../db";


// adding marks to cse

const addmarksCSE = async (details: any) => {

    console.log(details)

    const connection = await db.getConnection();
    await connection.beginTransaction();
    let result: any;

    try {

        const [res1] = await connection.query(
            "SELECT * FROM cse WHERE registernumber=?",
            [details.registerNumber]
        );

        if (res1.length === 0) {
            const [res] = await connection.query(
                "INSERT INTO cse (registernumber,attendence,operatingsystems,datastructure,automata,wirelesscommunication,computernetworking,artificialintelligence) VALUES (?,?,?,?,?,?,?,?)",
                [
                    details.registerNumber,
                    details.attendence,
                    details.operatingSystems,
                    details.dataStructure,
                    details.automata,
                    details.wirelessCommunication,
                    details.computerNetworking,
                    details.artificialIntelligence
                ]
            );
            if (res.insertId > 0) {
                result = { success: true, data: 'inserted' };
            } else {
                result = {
                    success: false,
                    data: 'insertion Failed',
                };
            }
        } else {
            result = { success: false, data: 'dataExist' };
        }

        await connection.commit();
    }

    catch (error) {

        console.log("error", error);
        await connection.rollback();
        result = { success: false, data: 'error.message' };
    } finally {
        connection.release();
        return result;

    }

}


// adding marks to ece


const addmarksECE = async (details: any) => {

    console.log(details)

    const connection = await db.getConnection();
    await connection.beginTransaction();
    let result: any;

    try {

        const [res1] = await connection.query(
            "SELECT * FROM ece WHERE registernumber=?",
            [details.registerNumber]
        );

        if (res1.length === 0) {
            console.log("666")
            console.log(details.registerNumber,
                details.attendence,
                details.embeddedSystems,
                details.wirelessCommunication,
                details.informationTheory,
                details.signalsAndSystems,
                details.logicDesign,
                details.electronicCircuit)
            const [res] = await connection.query(
                "INSERT INTO ece (registernumber,attendence,embeddedSystems,wirelesscommunication,informationtheory,signalsandsystems,logicdesign,electroniccircuit) VALUES (?,?,?,?,?,?,?,?)",
                [
                    details.registerNumber,
                    details.attendence,
                    details.embeddedSystems,
                    details.wirelessCommunication,
                    details.informationTheory,
                    details.signalsAndSystems,
                    details.logicDesign,
                    details.electronicCircuit
                ]
            );
            if (res.insertId > 0) {
                result = { success: true, data: 'inserted' };
            } else {
                result = {
                    success: false,
                    data: 'insertion Failed',
                };
            }
        } else {
            result = { success: false, data: 'dataExist' };
        }

        await connection.commit();
    }

    catch (error) {

        console.log("error", error);
        await connection.rollback();
        result = { success: false, data: 'error.message' };
    } finally {
        connection.release();
        return result;

    }

}

// adding marks to eee


const addmarksEEE = async (details: any) => {

    console.log(details)

    const connection = await db.getConnection();
    await connection.beginTransaction();
    let result: any;

    try {

        const [res1] = await connection.query(
            "SELECT * FROM eee WHERE registernumber=?",
            [details.registerNumber]
        );

        if (res1.length === 0) {

            const [res] = await connection.query(
                "INSERT INTO eee (registernumber,attendence,signalsandsystems,analogelectronics,communication,digitaldesign,controlengineering,electromechanics) VALUES (?,?,?,?,?,?,?,?)",
                [
                    details.registerNumber,
                    details.attendence,
                    details.signalsAndSystems,
                    details.analogElectronics,
                    details.communication,
                    details.digitalDesign,
                    details.controlEngineering,
                    details.electroMechanics
                ]
            );
            if (res.insertId > 0) {
                result = { success: true, data: 'inserted' };
            } else {
                result = {
                    success: false,
                    data: 'insertion Failed',
                };
            }
        } else {
            result = { success: false, data: 'dataExist' };
        }

        await connection.commit();
    }

    catch (error) {

        console.log("error", error);
        await connection.rollback();
        result = { success: false, data: 'error.message' };
    } finally {
        connection.release();
        return result;

    }
}

export {
    addmarksCSE,
    addmarksECE,
    addmarksEEE
}