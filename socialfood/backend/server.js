const express = require("express");
const cors = require("cors");
const mealRoutes = require("./routes/mealRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/meals", mealRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
