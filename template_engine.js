

const express = require('express');
const app = express();
const path = require('path');
const FolderPath = path.join(__dirname, 'public');
const port = 3000;

app.set('view engine', 'ejs'); // exact same line


app.get('/welcome', (req, res) => {

    const empInfo = {
        name: 'Alice',
        age: 30,
        city: 'New York'
    }

    res.render('Welcome', {empInfo});
})


app.use((req, res) => {
    res.sendFile(
        `${FolderPath}/notFound.html`
    )
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


