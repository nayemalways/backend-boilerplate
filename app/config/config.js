import * as path from 'path';


// MONGODB CONNECTION
export const MONOGDB_CONNECTION = "mongodb+srv://nishanahmed:OWkuWunl7pJvLVNF@cluster0.9h6vm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


// JWT TOKEN
export const JWT_SECRET = '5EC7CEFA1BE7C9354A639369A2AA8';
export const JWT_EXPIRATION_TIME = 60*60*24*30; // (30 days)


// EMAIL
export const EMAIL_HOST = "smtp.titan.email";
export const EMAIL_PORT = "465";
export const EMAIL_USER = "support@laravelpoint.com";
export const EMAIL_PASSWORD = "Rup77_4827";
export const MAIL_ENCRYPTION="ssl";

// JSON SIZE
export const MAX_JSON_SIZE = "50mb";

// URL ENCODE
export const URL_ENCODED = true;

// REQUEST LIMIT
export const REQUEST_LIMIT_TIME = 15 * 60 * 1000; // 15 MINIUTES
export const REQUEST_LIMIT_NUMER = 3000; // IN 15 MIN


// WEB CACHE
export const WEB_CACHE = false;

// PORT
export const PORT = 5050;


// File upload path 
export function UPLOAD_FOLDER(filename){
    return path.resolve(process.cwd(), 'storage', filename)
}


