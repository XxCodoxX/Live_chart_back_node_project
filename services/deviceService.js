const device_dataDAO = require('../dao/device_dataDAO');
const randrom_update = require('../util/script ');

class DeviceService {

    static async getDeviceData() {

        let data = await device_dataDAO.getDeviceData();

        // console.log(" servic" + data);


        return data;
    }

    static async getSelectDeviceData(deviceId,startTime,endTime) {

        let data = await device_dataDAO.getSelectDeviceData(deviceId,startTime,endTime);

        // console.log(" servic" + data);


        return data;
    }

    static async updateRandomValue(min,max) {

        let data = await randrom_update.updateRandomNumber(min,max);

        // console.log(" servic" + data);


        return data;
    }


}

module.exports = DeviceService;