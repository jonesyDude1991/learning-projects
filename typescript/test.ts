import { Client } from 'pg';

const client = new Client({
  user: 'matt',
  host: 'localhost',
  database: 'testdb',
  port: 5432
});

async function main() {
  await client.connect();
  const result = await client.query('SELECT * FROM administrator');
  console.log(result.rows);
  await client.end();
}
main();
