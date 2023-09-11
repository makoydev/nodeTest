const axios = require("axios");

const payload = {
  ApiKey: "fa6a5a32-24d7-3a66-99e0-bdec25f62cf0",
  SdkVersion: "1.0.0",
  ProductType: "MotorCar",
  MasterSetId: "",
};

const url = "https://eoxlpku1szzl6zq.m.pipedream.net/";

axios
  .post(url, payload)
  .then((response) => {
    const { data } = response;
    console.log("Response data:", data);
  })
  .catch((error) => {
    const { message } = error;
    console.error("Error:", message);
  });
