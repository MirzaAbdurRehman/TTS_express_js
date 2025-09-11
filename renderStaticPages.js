const express = require('express');
const path = require('path');
const FolderPath = path.join(__dirname, 'public');
const app = express();
const port = 2000;

console.log(FolderPath);

// Middleware to serve static files
app.use(express.static(FolderPath));

// Route to serve 'about.html' without .html in URL
app.get('/about', (req, res) => {
    res.sendFile(`${FolderPath}/about.html`);
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
