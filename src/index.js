const { fetchTransactions } = require("./services/etherscan");
const { insertTransaction, connectToQuestDB } = require("./services/questdb");
const { formatTimestamp, formatValue } = require("./utils/formatter");

const main = async () => {
  await connectToQuestDB();
  const transactions = await fetchTransactions();

  for (const tx of transactions) {
    const formattedTransaction = {
      hash: tx.hash,
      blockNumber: parseInt(tx.blockNumber),
      timeStamp: formatTimestamp(tx.timeStamp),
      fromAddress: tx.from,
      toAddress: tx.to,
      value: formatValue(tx.value),
      tokenName: tx.tokenName,
      tokenSymbol: tx.tokenSymbol,
    };

    await insertTransaction(formattedTransaction);
  }
};

main().finally(() => {
  process.exit();
});
