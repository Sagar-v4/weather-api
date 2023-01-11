import {isPrimeDay} from "../util/primeDay"
import axios from "axios";
import close from "../config/db_close";
import conn from "../config/db_conn";
require('dotenv').config()

const Audit = require("../model/audit")


/*
 * TRUE: Check Prime day
 * FALSE: Not Check Prime Day
 */
let checkPrimeCondition: boolean = true

/*
 * Showing default City
 */
const defaultCity = async (req: any, res: any) => {

    if(!isPrimeDay(checkPrimeCondition)) {

        try {
            const cityName: string = "Gandhinagar"
            const appid: string | undefined  = process.env.API_KEY

            // Getting default city weather details
            const currWeather: any = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appid}`)

            // DB Connection
            await conn()

            // Fetching default city data from db if exist
            let auditWeather = await Audit.findOne({"name": cityName});

            // if data exist then update it with current else save
            if(auditWeather) {
                console.log("[+] Updating")
                try {
                    await Audit.findByIdAndUpdate(
                        auditWeather._id,
                        {$set: currWeather.data},
                    );
                } catch (err) {
                    res.send(err)
                } finally {
                    await close()
                }
            } else {
                console.log("[+] Saving")
                try {
                    const newWeather = Audit(currWeather.data);
                    await newWeather.save()
                } catch (err) {
                    res.send(err)
                } finally {
                    await close()
                }
            }
            res.send(currWeather.data)

        } catch (err) {
            res.send(err)
        } finally {
            await close()
        }
    } else {
        await close()
        res.send(`Date is not prime so no data`)
    }
}

/*
 * Showing entered City
 */
const searchCity = async (req: any, res: any) => {

    if(!isPrimeDay(checkPrimeCondition)) {

        try {
            const cityName: string = req.params.city
            const appid: string | undefined  = process.env.API_KEY

            // Getting searched city weather details
            const currWeather: any = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appid}`)

            // DB Connection
            await conn()

            // Fetching searched city data from db if exist
            let auditWeather = await Audit.findOne({"name": cityName});

            // if data exist then update it with current else save
            if(auditWeather) {
                console.log("[+] Updating")
                try {
                    await Audit.findByIdAndUpdate(
                        auditWeather._id,
                        {$set: currWeather.data},
                    );
                } catch (err) {
                    res.send(err)
                } finally {
                    await close()
                }
            } else {
                console.log("[+] Saving")
                try {
                    const newWeather = Audit(currWeather.data);
                    await newWeather.save()
                } catch (err) {
                    res.send(err)
                } finally {
                    await close()
                }
            }
            res.send(currWeather.data)

        } catch (err) {
            res.send(err)
        } finally {
            await close()
        }
    } else {
        await close()
        res.status(401).send(`Date is not prime so no data`)
    }
}


module.exports = {
    defaultCity,
    searchCity
}