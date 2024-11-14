const axios = require("axios");
const { etherscanApiKey, contractAddress } = require("../config/config");

const fetchTransactions = async () => {
  try {
    const response = await axios.get("https://api.etherscan.io/api", {
      params: {
        module: "account",
        action: "tokentx",
        contractaddress: contractAddress,
        page: 1,
        offset: 10,
        sort: "desc",
        apikey: etherscanApiKey,
      },
    });
    return response.data.result;
  } catch (error) {
    console.error("Erreur de récupération des transactions :", error.message);
  }
};

module.exports = { fetchTransactions };
