

const express = require('express');
const app = express();
const path = require('path');
const FolderPath = path.join(__dirname, 'public');
const port = 4000;

app.set('view engine', 'ejs'); // exact same line

app.get('/about/:name/:age/:city', (req, res) => {
    const User = {
        name: req.params.name,
        age: req.params.age,
        city: req.params.city,
        skills: ['JavaScript', 'React', 'Node.js']
    }
       res.render('About', {User});
})

app.use((req, res) => {
    res.sendFile(
        `${FolderPath}/notFound.html`
    )
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
