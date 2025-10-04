import { Client } from "pg";
const pgClient = new Client('postgresql://neondb_owner:npg_MYb24nmqGXaf@ep-square-bread-ad0beqxg-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');
async function main() {
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users");
    console.log(response.rows);
}
main();
//# sourceMappingURL=index.js.map