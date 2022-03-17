import geogratisAPI from "../api/geogratisAPI.js";
import * as cheerio from "cheerio";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@material-ui/core";
import {get} from "cheerio/lib/api/traversing";

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
getProvince().then(() => console.log(`All provinces : ${provinces}`));


let concises = [];
// eslint-disable-next-line no-unused-vars
async function getConcise() {
  try {
    const result = await geogratisAPI.get("/codes/concise");
    const $ = cheerio.load(result.data);
    $("body > table > tbody > tr").each((index, element) => {
      let check = $($(element).find("td")[1]).text();
      check = check.replace(/\r?\n|\r/g, " ").replace(/ /g, "");
      concises.push(check);
    });
  } catch (error) {
    console.error(error);
  }
}

getConcise().then(() => console.log(`All concises : ${concises}`));

export default function ControllableStates() {
  const [value, setValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div style={{ paddingLeft: 100 }}>
      <Box height={50} />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={provinces}
        sx={{ width: 250 }}
        renderInput={(params) => (
          <TextField {...params} label="Select Province" />
        )}
      />
    </div>

  );
}
