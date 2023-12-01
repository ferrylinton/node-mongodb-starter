const fs = require('fs');
const path = require('path');

/**
 * Creates a file name based on the NODE_ENV value
 * 1. NODE_ENV=production => .env.production
 * 2. NODE_ENV=development => .env.development
 * 3. NODE_ENV=test => .env.test
 */
const envFile = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || ''}`);

// throw error if envFile is not found
if (!fs.existsSync(envFile)) {
	throw new Error(`${envFile} is not found`);
}

// loads environment variables
require('dotenv').config({
	path: envFile,
});

module.exports = {
	NODE_ENV: process.env.NODE_ENV || 'development',
	MONGODB_HOST: process.env.MONGODB_HOST || '127.0.0.1',
	MONGODB_PORT: process.env.MONGODB_PORT || '27017',
	MONGODB_AUTH_SOURCE: process.env.MONGODB_AUTH_SOURCE,
	MONGODB_USERNAME: process.env.MONGODB_USERNAME,
	MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
	MONGODB_DATABASE: process.env.MONGODB_DATABASE,
};
