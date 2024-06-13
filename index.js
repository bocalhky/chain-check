import fs from "fs";
import axios from "axios";

// defillama-sdk rpc providers file
const jsonFilePath = "providers.json";

const myAddress = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"; // vitalik.eth

// Read the JSON file
fs.promises
  .readFile(jsonFilePath, "utf-8")
  .then((jsonData) => {
    try {
      const data = JSON.parse(jsonData);
      console.log("Checking", Object.keys(data).length, "chains")
      for (let chain in data) {
        let url = data[chain]["rpc"][0];
        // create the rpc call to send to RPC urls
        const requestData = {
          method: "eth_getBalance",
          params: [myAddress, "latest"],
          id: 1,
          jsonrpc: "2.0",
        };
        axios
          .post(url, requestData)
          .then((response) => {
            // optional log for successful response, might be useful for gauging if requests are going through
            // console.log(
            //   `Request to ${url} succeeded with response:`,
            //   response.data
            // );
            if (response.data.result !== "0x0") {
              console.log("Balance found on chain", chain);
            }
          })
          .catch((error) => {});
      }
    } catch (error) {
      console.error("Error parsing JSON file:", error);
    }
  })
  .catch((error) => {
    console.error("Error reading JSON file:", error);
  });
