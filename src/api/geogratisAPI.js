import axios from "axios";

export default axios.create({
  baseURL: "https://geogratis.gc.ca/services/geoname/en",
  headers: { Accept: "text/html" },
});
