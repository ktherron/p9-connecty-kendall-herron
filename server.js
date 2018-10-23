const mongoose = require("mongoose");

const app = express();

// DB config

const db = require("./config/keys").mongoURI;

// Connect to MongoDB

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello!"));

// The actual port for the app in prodcution will come from the env. var. "PORT". For local dev., we just use 5000.
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));