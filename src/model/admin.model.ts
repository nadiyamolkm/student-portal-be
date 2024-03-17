import db from "../db";


const adminLogin = async (details: any) => {
    console.log("===1===");
    console.log(details)
    const connection = await db.getConnection();
    await connection.beginTransaction();
    let result: any;

    try {
        const [res] = await connection.query(
            
            "SELECT * FROM admin WHERE email=? AND password=?",
            [details.email,details.password]

        );

          if (res.length===0){
            result = {
                success: false, data: 'usernotFound' 
            }
          }
          else{
            result = {
                success: true, data: 'userFound' 
            }
          }
    }

    catch(error){
        await connection.rollback();
        result = {
            data: 'error',
            success: false,
        };

    }

    finally {
        connection.release()
        return result;
    }
}

export {
    adminLogin
}