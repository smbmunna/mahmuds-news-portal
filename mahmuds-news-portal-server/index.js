const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cfuzedb.mongodb.net/?appName=Cluster0`;

// MongoClient setup
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let newsCollection; // Will store reference to the 'news' collection

// Connect to MongoDB
async function connectDB() {
    try {
        await client.connect();
        const db = client.db(process.env.DB_Name);
        newsCollection = db.collection('news');
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit if DB connection fails
    }
}

// Routes

// Root route
app.get('/', (req, res) => {
    res.send('News portal server running');
});

// POST news
app.post('/news', async (req, res) => {
    if (!newsCollection) return res.status(500).send("Database not connected");

    const newNews = req.body;
    newNews.createdAt = new Date();

    try {
        const result = await newsCollection.insertOne(newNews);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// GET all news (optional for frontend fetching)
app.get('/news', async (req, res) => {
    if (!newsCollection) return res.status(500).send("Database not connected");

    try {
        const news = await newsCollection.find().sort({ createdAt: -1 }).toArray();
        res.status(200).send(news);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Start server after connecting to MongoDB
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
