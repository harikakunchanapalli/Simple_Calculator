// Import the necessary modules
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route handler for performing calculations
app.get('/calculate/:operation/:num1/:num2', (req, res) => {
    // Extract operation and numbers from the request parameters
    const operation = req.params.operation;
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    
    let result;
    
    // Perform the specified operation
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 === 0) {
                return res.status(400).json({ error: "Cannot divide by zero" });
            }
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: "Invalid operation" });
    }
    
    // Send the result as JSON response
    res.json({ result });
});

// Start the server
const port = 3000; // Choose any port number you prefer
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
