import axios from "axios";

export default axios.create({
  baseURL: "https://geogratis.gc.ca/services/geoname/en",
  timeout: 1000,
  headers: { Accept: "text/html" },
});

/*
const cheerio = require("cheerio");
const axios = require("axios");

let provinces = [];
// eslint-disable-next-line no-unused-vars
async function main() {
  const result = await axios.get(
    "https://geogratis.gc.ca/services/geoname/en/codes/province",
    {
      headers: {
        Accept: "text/html",
      },
    }
  );
  const $ = cheerio.load(result.data);
  console.log(result.data);
  $("body > table > tbody > tr").each((index, element) => {
    let check = $($(element).find("td")[2]).text();
    check = check.replace(/\r?\n|\r/g, " ").replace(/ /g, "");
    provinces.push(check);
  });

}
*/
