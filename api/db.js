import fs from 'fs';
import path from 'path';

// export default function handler(req, res) {
  // Set CORS headers
  // res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow specific methods
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers

  // Handle preflight OPTIONS request
  // if (req.method === 'OPTIONS') {
  //   res.status(200).end();
  //   return;
  // }

  // Ensure the file exists and is read correctly
//   try {
//     const filePath = path.resolve('.', 'static', 'db.json'); // Adjust path if needed
//     const fileContents = fs.readFileSync(filePath, 'utf8');
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).send(fileContents);
//   } catch (error) {
//     console.error('Error reading file:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
