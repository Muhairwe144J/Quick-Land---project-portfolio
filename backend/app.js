const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Land = require('./models/Land'); // model file
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Route to get all lands
app.get('/api/lands', async (req, res) => {
    try {
        const lands = await Land.find();
        res.json(lands);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching lands' });
    }
});

// Basic Route
app.get('/', (req, res) => {
    res.send('Welcome to LandEase API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const landRoutes = require('./routes/lands');
app.use('/api/lands', landRoutes);
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
const paymentRoutes = require('./routes/payment');
app.use('/api/payment', paymentRoutes);
