var db = require('../config/dbConfig');


class Device_dataDAO {


    static async getDeviceData() {
        try {


            const deviceid = "SELECT DISTINCT deviceId from device_data";

            const devicetime = "SELECT DISTINCT time from device_data";


            let did = await db.query(deviceid);

            let dtime = await db.query(devicetime);

            let dIdData = did[0] ;
            let dTiemData = dtime[0] ;

            // console.log (dIdData);
            // console.log (dTiemData);

            let deviceAllData = [dIdData,dTiemData];

            // let n = deviceAllData[1].map(obj => {
            //     return obj.time
            //  })

            // console.log (n);

            // console.log ("Dau" + out)

            return deviceAllData;


        } catch (e) {


            console.log(e);
        }


    }


    static async getSelectDeviceData(deviceId,startTime,endTime) {
        try {

            // console.log(deviceId);
            // console.log(startTime);
            // console.log(endTime);


            const value = "SELECT value from device_data WHERE (deviceId = ? AND time BETWEEN ? AND ?)";

            // const devicetime = "SELECT DISTINCT time from device_data";


            let out = await db.query(value,[deviceId,startTime,endTime]);


             return out[0];


        } catch (e) {


            console.log(e);
        }


    }

    





}


module.exports = Device_dataDAO;