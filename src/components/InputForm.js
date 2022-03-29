import geogratisAPI from "../api/geogratisAPI.js";
//import * as cheerio from "cheerio";
import * as React from "react";
//import { useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
//import { get } from "cheerio/lib/api/traversing";

// eslint-disable-next-line no-unused-vars
let geoData = [];
async function getgeoName(searchValue) {
  let searchItem = searchValue.concat("*");
  if (geoData.length !== 0) {
    geoData = [];
  }
  try {
    const result = await geogratisAPI.get("/geonames.json", {
      params: {
        q: searchItem,
        num: 20,
      },
    });
    let jsonObject = JSON.stringify(result);
    console.log(JSON.parse(jsonObject).data.items);
    let itemArray = JSON.parse(jsonObject).data.items;
    itemArray.forEach((element) => {
      if (element.location != null) {
        let finalValue =
          element.name +
          "," +
          element.location +
          "," +
          element.concise.code +
          "," +
          element.province.code;

        geoData.push(finalValue);
        console.log(finalValue);
      }
    });
  } catch (error) {
    console.error(error);
  }
}
// eslint-disable-next-line no-unused-vars
function InputForm() {
  const [name, setName] = React.useState();
  const handleChange = (event) => {
    setName(event.target.value);
    getgeoName(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Autocomplete
        renderInput={(params) => (
          <TextField
            {...params}
            id="outlined-name"
            label="GeoName"
            value={name}
            onChange={handleChange}
          />
        )}
        options={geoData}
      />
    </Box>
  );
}

export default InputForm;
