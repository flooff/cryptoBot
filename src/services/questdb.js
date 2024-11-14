const { Client } = require('pg'); 

const client = new Client({
  host: 'localhost',
  port: 8812,
  user: 'admin',
  password: 'quest',
  database: 'qdb'
});

client.connect();

async function insertTransaction(transaction) {
  const query = `
    INSERT INTO comp_transactions (
      transaction_hash, block_number, timestamp, from_address, to_address, value, token_name, token_symbol
    ) VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8
    )
  `;

  const values = [
    transaction.transaction_hash,
    transaction.block_number,
    transaction.timestamp,
    transaction.from_address,
    transaction.to_address,
    transaction.value,
    transaction.token_name,
    transaction.token_symbol
  ];

  try {
    await client.query(query, values);
    console.log('Transaction inserted');
  } catch (err) {
    console.error('Error inserting transaction:', err);
  }
}

module.exports = { insertTransaction };
