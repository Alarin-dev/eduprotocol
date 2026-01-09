import express from "express";
import {users} from "../data/store.js";

const router = express.Router();

// GET /users
router.get("/", (req, res) => {
	res.json({
		count: users.lenth,
		users: users,

	});
});
// GET/users/:id
router.get("/:id", (req, res) => {
	const userid = Number(req.params.id);

	const user = users.find(u => u && u.id === userid);
	if (!user) {
		return res.status(404).json({
			error: "User not found",

		});

	}

	res.json(user);

});

//DELETE /users/:id
router.delete("/:id", (req, res) => {
	const userId = Number(req.params.id);
	const index = users.findIndex(u => u.id === userId);
	if (index === -1) {
		return res.status(404).json({
			error: "User not found",
		});
	}
	users.splice(index, 1);

	res.json({
		message: "User deleted successfully",

	});

});

//POST /users
router.post("/", (req, res) => {
	const { name, email} = req.body;

	if (!name || !email) {
		return res.status(400).json({
			error: "name and email are required",

		});

	}

	const newUser = {
		id: users.length + 1,
		name,
		email,

	};
	users.push(newUser);

	res.status(201).json(newUser);

});

//PUT /users/:id
router.put("/:id", (req, res) => {
	const id = Number(req.params.id);
	const { name, email } = req.body;

	const user = users.find(u => u.id === id);

	if (name) user.name = name;
	if (email) user.email = email;

	res.json(user);
});

export default router;
