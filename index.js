const fetch = require("node-fetch");

var apiKey = "YOUR-KEY";

const CrUXApiUtil = {
    query: async function (requestBody, apiKey) {
    const endpointUrl = 'https://chromeuxreport.googleapis.com/v1/records:queryRecord';
    const resp = await fetch(`${endpointUrl}?key=${apiKey}`, {
      method: 'POST',
      body: JSON.stringify(requestBody),
    });
    const json = await resp.json();
    if (!resp.ok) throw new Error(json.error.message);
    return json;
  }
};

// Gather the data for example.com and display it
(async function () {
  const json = await CrUXApiUtil.query({origin: 'https://zrce.eu/'}, apiKey);
  console.log('CrUX API response:', json);

  console.log('first_input_delay', json.record.metrics.first_input_delay);

})();

