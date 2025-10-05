import { Client } from "pg";

const pgClient = new Client("postgresql://neondb_owner:npg_MYb24nmqGXaf@ep-square-bread-ad0beqxg.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require");

async function main(){

  let username = "raaju";
  let email = "raaju@gmail.com";
  let password = "raaju@12";

  await pgClient.connect();

  let queryString = "INSERT INTO users (username,email , password) VALUES ($1 ,$2,$3);";

  await pgClient.query(queryString,[username,email,password]);

  let res = await pgClient.query("SELECT * FROM users");

  console.log(res);
}


main();