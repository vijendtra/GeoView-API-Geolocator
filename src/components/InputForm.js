import geogratisAPI from "../api/geogratisAPI.js";
import * as cheerio from "cheerio";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

let provinces = [];
// eslint-disable-next-line no-unused-vars
async function getProvince() {
  try {
    const result = await geogratisAPI.get("/codes/province");
    const $ = cheerio.load(result.data);
    $("body > table > tbody > tr").each((index, element) => {
      let check = $($(element).find("td")[2]).text();
      check = check.replace(/\r?\n|\r/g, " ").replace(/ /g, "");
      provinces.push(check);
    });
  } catch (error) {
    console.error(error);
  }
}
getProvince().then(() => console.log(`Got the final provinces: ${provinces}`));
export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={provinces}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Province" />}
    />
  );
}
