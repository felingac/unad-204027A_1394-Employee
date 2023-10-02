import { open } from "sqlite";
import sqlite3 from "sqlite3";

let db = null;

export async function GET(req, res) {
  if (!db) {
    db = await open({
      filename: "./db/employees.db",
      driver: sqlite3.Database,
    });
  }

  const employees = await db.all("SELECT * FROM employees");

  return new Response(JSON.stringify(employees), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}