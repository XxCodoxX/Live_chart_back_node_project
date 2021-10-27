
const db = require("../config/dbConfig");

class Script {

    static async updateRandomNumber(min, max) {
        try {

            min = Math.ceil(min);
            max = Math.floor(max);

            for (let i = 1; i <= 30; i++) {

                let data = Math.floor(Math.random() * (max - min + 1)) + min;
                //console.log(i +"number-:" + data);
                const sql = "UPDATE device_data SET value = ? WHERE id = ?"
                let out = await db.query(sql, [data, i]);
                

            };



        } catch (e) {


            console.log(e);
        }


    };

};

module.exports = Script;