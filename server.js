const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const formRoute = require("./routes/forms");
mongoose
  .connect(
    "mongodb+srv://IndrajithV:olauber@shop-clone.kbvas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

app.use("/api/forms", formRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
