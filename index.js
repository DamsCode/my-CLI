#!/usr/bin/env node

const countryList = require('country-list');
const axios = require('axios');


let getholiday = async (year,country) => {
   const rep = await axios.get(`https://date.nager.at/api/v2/PublicHolidays/${year}/${country}`);
    console.log(rep);
};

getholiday(2019,"BE");
