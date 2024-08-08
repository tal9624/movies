// app.js
const express = require('express');
const app = express();
const path = require('path');
console.log('Loading routes...');
const movieRoutes = require('./movie-library/routes/movieRoutes'); // נתיב מעודכן
console.log('Routes loaded.');

// הגדרות אקספרס
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'movie-library', 'views')); // נתיב מעודכן
app.use(express.static(path.join(__dirname, 'movie-library', 'public'))); // נתיב מעודכן

// הגדרת רוטים
app.use('/', movieRoutes);

// הפעלת השרת
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
