const sqlite3 = require("sqlite3").verbose();

const ddl = `CREATE TABLE IF NOT EXISTS employees(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code INTEGER NOT NULL,
    name TEXT NOT NULL,
    surname TEXT NOT NULL,
    identity INTEGER NOT NULL,
    address TEXT NOT NULL,
    telephone INTEGER NOT NULL,
    photo_id INTEGER NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`;

const db = new sqlite3.Database(
  "./db/employees.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

db.serialize(() => {
  db.run(
    ddl,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created items table.");

      // Clear the existing data in the products table
      db.run(`DELETE FROM employees`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("All rows deleted from items");

        // Insert new data into the products table
        const values1 = [
            "747539457",
            "Andres",
            "Perez",
            "USER",
            "Cr 1 No 10 - 20",
            "3628359223",
            "1"
        ];

        const values2 = [
            "273420348",
            "Jose",
            "Ramos",
            "USER",
            "Cr 2 No 20 - 30",
            "3452678901",
            "2"
        ];

        const values3 = [
            "945774753",
            "Lucas",
            "Carrillo",
            "USER",
            "Cll 10 No 3 - 40",
            "3256789045",
            "3"
        ];

        const values4 = [
            "324678145",
            "Juan",
            "Gomez",
            "USER",
            "Cr 30 No 1 - 40",
            "3678925461",
            "4"
        ];

        const insertSql = `INSERT INTO employees(code, name, surname, identity, address, telephone, photo_id) VALUES(?, ?, ?, ?, ?, ?, ?)`;

        db.run(insertSql, values1, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        db.run(insertSql, values2, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        db.run(insertSql, values3, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        db.run(insertSql, values4, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        //   Close the database connection after all insertions are done
        db.close((err) => {
          if (err) {
            return console.error(err.message);
          }
          console.log("Closed the database connection.");
        });
      });
    }
  );
});