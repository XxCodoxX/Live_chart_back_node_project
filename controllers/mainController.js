var deviceService = require ("../services/deviceService");


const getDeviceDataController = async (req, res) => {

    try{


        let out = await deviceService.getDeviceData();

        // console.log ("con" + out);

        return res.send(out);


    }catch(e){

        
        console.log(e);


    }

}

const getSelectDeviceDataController = async (req, res) => {

    try{

        let deviceId = req.params["deviceId"];
        let startTime = req.params["startTime"];
        let endTime = req.params["endTime"];

        // console.log (deviceId);
 

        let out = await deviceService.getSelectDeviceData(deviceId,startTime,endTime);

        // console.log ("con" + out);

        return res.send(out);


    }catch(e){

        
        console.log(e);


    }

}

module.exports = {
    getDeviceDataController,
    getSelectDeviceDataController
}