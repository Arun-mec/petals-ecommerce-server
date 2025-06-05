const bcrypt = require('bcrypt');

const users = [
    {
        username: "admin_user",
        email: "admin@example.com",
        password: bcrypt.hashSync("hashed_password_123", 12),
        number: 9090909090,
        isAdmin: true,
        isActive: true
    },
    {
        username: "john_doe",
        email: "john@example.com",
        password: bcrypt.hashSync("hashed_password_123", 12), // Use hashed version in practice
        number: 9876543210,
        isAdmin: false,
        isActive: true
    },
    {
        username: "jane_smith",
        email: "jane@example.com",
        password: bcrypt.hashSync("hashed_password_123", 12),
        number: 9123456789,
        isAdmin: true,
        isActive: true
    },
    {
        username: "michael89",
        email: "michael@example.com",
        password: bcrypt.hashSync("hashed_password_123", 12),
        number: 9012345678,
        isAdmin: false,
        isActive: false
    },
    {
        username: "lisa_marie",
        email: "lisa@example.com",
        password: bcrypt.hashSync("hashed_password_123", 12),
        number: 9988776655,
        isAdmin: false,
        isActive: true
    }
];

module.exports = users;