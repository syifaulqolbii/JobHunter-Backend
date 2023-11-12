require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const { authenticate, authorize } = require('./middleware/authMiddleware');
const routes = require('./routes/index');

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes auth
app.use('/auth', authRoutes);

// penggunaan middleware
app.get('/user', authenticate, authorize(['user']), (req, res) => {
  res.json({ message: 'User data' });
});

app.get('/company', authenticate, authorize(['company']), (req, res) => {
  res.json({ message: 'Company data' });
});

app.use('/api/v1', routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
