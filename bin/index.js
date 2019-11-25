#!/usr/bin/env node
'use strict'
const countryList = require('country-list');
const axios = require('axios');

const args = require('minimist')(process.argv.slice(2));

if (args.country){
    const code = countryList.getCode(args.country);
    let getholiday = async (country,year = new Date().getFullYear()) => {
        const rep = await axios.get(`https://date.nager.at/api/v2/PublicHolidays/${year}/${country}`);
        for (let day of rep.data){
            console.log(day.name + " : "+day.date);
        }
    };
    getholiday(code,args.year);
}else{
    console.log("you need the put a country parameter")
}



