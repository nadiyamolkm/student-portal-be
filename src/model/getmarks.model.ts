
import db from "../db";

// get marks for cse
const getMarksCSE = async (details: any) => {
    console.log(details)
    const connection = await db.getConnection();
    await connection.beginTransaction();
    let result: any;
    try {
        const [res1] = await connection.query(
            "SELECT * FROM cse WHERE registernumber=?",
            [details.registerNumber]
        );
        if (res1.length > 0) {
            result = {
                success: true,
                data: res1,
            };

        } else {
            result = { success: false, data: 'nodata' };
        }

    } catch (error) {
        console.log("error", error);
        await connection.rollback();
        result = { success: false, data: 'error.message' };
    } finally {
        connection.release();
        return result;
    }

}

// get marks for ece
const getMarksECE = async (details: any) => {
    console.log(details)
    const connection = await db.getConnection();
    await connection.beginTransaction();
    let result: any;
    try {
        const [res1] = await connection.query(
            "SELECT * FROM ece WHERE registernumber=?",
            [details.registerNumber]
        );
        if (res1.length > 0) {
            result = {
                success: true,
                data: res1,
            };

        } else {
            result = { success: false, data: 'nodata' };
        }
    } catch (error) {
        console.log("error", error);
        await connection.rollback();
        result = { success: false, data: 'error.message' };

    } finally {
        connection.release();
        return result;
    }

}

//get marks eee
const getMarksEEE = async (details: any) => {
    console.log(details)
    const connection = await db.getConnection();
    await connection.beginTransaction();
    let result: any;
    try {
        const [res1] = await connection.query(
            "SELECT * FROM eee WHERE registernumber=?",
            [details.registerNumber]
        );
        if (res1.length > 0) {
            result = {
                success: true,
                data: res1,
            };

        } else {
            result = { success: false, data: 'nodata' };
        }

    } catch (error) {
        console.log("error", error);
        await connection.rollback();
        result = { success: false, data: 'error.message' };
    } finally {
        connection.release();
        return result;
    }

}

export {
    getMarksCSE,
    getMarksEEE,
    getMarksECE
}