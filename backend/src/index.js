import express from "express";
import dotenv from "dotenv";
import usersRouter from "./routes/users.js"

dotenv.config();

const app = express();
app.use(express.json());

app.use("/users", usersRouter);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.json({ message: "EduProtocol API is running..."});
});

app.listen(PORT, () => {
	console.log('server running on port $ {PORT}');

});

