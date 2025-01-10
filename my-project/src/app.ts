import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function initializeDatabase() {
    const db = await open({
        filename: './data/database.sqlite',
        driver: sqlite3.Database
    });

    // Create tables if they don't exist
    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE
        );
    `);

    await db.exec(`
        CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userId INTEGER,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            FOREIGN KEY (userId) REFERENCES users (id)
        );
    `);

    return db;
}

async function main() {
    const db = await initializeDatabase();

    // Application logic goes here

    // Example: Insert a user
    await db.run(`INSERT INTO users (name, email) VALUES (?, ?)`, ['John Doe', 'john@example.com']);

    // Example: Fetch users
    const users = await db.all(`SELECT * FROM users`);
    console.log(users);

    await db.close();
}

main().catch(err => {
    console.error(err);
});