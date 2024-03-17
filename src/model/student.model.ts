import db from "../db";


/***************CREATE STUDENT **************/

const createStudent = async (details: any) => {
    console.log("===1===");
    console.log(details)
    const connection = await db.getConnection();
    await connection.beginTransaction();
    let result: any;
    try {
        const [res1] = await connection.query(
            "SELECT * FROM studentdetails WHERE registernumber=?",
            [details.registerNumber]
        );

        if (res1.length === 0) {

            const [res] = await connection.query(
                "INSERT INTO studentdetails (registernumber,name, email,mobilenumber,batch) VALUES (?,?,?,?,?)",
                [
                    details.registerNumber,
                    details.studentName,
                    details.email,
                    details.mobileNumber,
                    details.batch

                ]
            );
            if (res.insertId > 0) {
                result = { success: true, data: 'inserted' };
            } else {
                result = {
                    success: false,
                    data: 'createFailed',
                };
            }
        } else {
            result = { success: false, data: 'dataExist' };
        }

        //result = { success: true, data: null };
        await connection.commit();
    } catch (error) {
        console.log("error", error);
        await connection.rollback();
        result = { success: false, data: 'error.message' };
    } finally {
        connection.release();
        return result;
    }
};




/** *****************LIST STUDENT******************* */

const listStudent = async () => {
    const connection = await db.getConnection();
    await connection.beginTransaction();
    let result: any;
    try {
        const [res] = await connection.query(
            `SELECT *  FROM studentdetails ORDER BY id DESC`
        );
        await connection.commit();
        if (res[0]) {
            result = {
                data: res,
                success: true,
            };
        } else {
            result = {
                data:'nostudent',
                success: false,
            };
        }
    } catch (error) {
        await connection.rollback();
        
        result = {
            data: 'error.message',
            success: false,
        };
    } finally {
        connection.release();
        
        return result;
    }
};



//***************** List student by id************/

const listStudentbyid = async (id:any) => {
    const connection = await db.getConnection();
    await connection.beginTransaction();
    let result: any;
    try {
        const [res] = await connection.query(
            `SELECT *  FROM studentdetails WHERE id= ? ORDER BY id DESC`,
            [id]
        );
        await connection.commit();
        if (res[0]) {
            result = {
                data: res,
                success: true,
            };
        } else {
            result = {
                data:'nostudent',
                success: false,
            };
        }
    } catch (error) {
        await connection.rollback();
        
        result = {
            data: 'error.message',
            success: false,
        };
    } finally {
        connection.release();
        
        return result;
    }
};



/***********UPDATE STUDENT**************************/

const updateStudent = async (details: any, apiName: string) => {

    let result: any;


    // Check for validation errors


    const connection = await db.getConnection();
    await connection.beginTransaction();

    try {
        const [res1] = await connection.query(
            `SELECT * FROM studentdetails WHERE id !=? AND email = ? AND username = ? `,
            [details.name,
            details.email,
            details.mobileNumber,
            details.batch,
            ]
        );
        if (res1.length === 0) {

            const [res] = await connection.query(
                `UPDATE studentdetails
          SET studentid = ?, 
              name = ?, 
              email = ?, 
              mobilenumber = ?, 
          WHERE id = ?`,
                [
                    details.studentid,
                    details.email,
                    details.mobileNumber,
                    details.batch,
                ]
            );
            if (res.changedRows > 0) {
                result = { success: true, data: null };
            } else {
                result = { success: false, data: 'updateFailed' };
            }
        }
        else {
            result = { success: false, data: 'dataExist' };
        }

        await connection.commit();
    } catch (updateError) {
        console.error("Update error", updateError);
        await connection.rollback();
        result = { success: false, data: 'updateFailed' };
    } finally {
        connection.release();
    }
}



/*************DELETE STUDENT*****************/

const deleteStudent = async (details:any) => {
    const connection = await db.getConnection();
    await connection.beginTransaction();
    let result: any;

    try {
        const [res1] = await connection.query(
            'DELETE FROM studentdetails WHERE registernumber = ? ',
            [details.registerno],
        );
        console.log("==00000")
        console.log(res1)
        if (res1.affectedRows > 0) {
            result = { success: true, data: "deleted" };
        } else {
            result = { success: false, data: "some error" };
        }
    }
    catch (error) {

        await connection.rollback();
        result = {
            data: 'error',
            success: false,
        };

    }

    finally {
        connection.release();
        return result;
    }

}



export {

    createStudent,
    listStudent,
    deleteStudent,
    updateStudent,
    listStudentbyid


}
