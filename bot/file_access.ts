import fs from 'fs';
import path from 'path';

// Function to read JSON file and parse it
const readJsonFile = (filePath: string): any => {
    try {
        // Construct the full path to the file
        const fullPath = path.resolve(__dirname, filePath);
        // Read the file content
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        // Parse the JSON content and return
        return JSON.parse(fileContent);
    } catch (error) {
        console.error('Error reading JSON file:', error);
        return null;
    }
};

// Example usage: Assuming your JSON file is located in a folder named 'data' in the same directory as your script
const data = readJsonFile('data/yourFileName.json');
console.log(data);
