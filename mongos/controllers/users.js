import Users from "../models/users.js";

export async function getUsers(req, res, next) {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 10;

    const skip = (page - 1) * limit;

    const users = await Users.find().skip(skip).limit(limit);
    const totalUsers = await Users.countDocuments();

    res.json({
      page,
      limit,
      total: totalUsers,
      totalPages: Math.ceil(totalUsers / limit),
      data: users,
    });
  } catch (error) {
    next(error);
  }
}

// get user by id
export async function getUserById(req, res, next) {
  try {
    const user = await Users.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
}

// create user
export async function createUser(req, res, next) {
  try {
    const user = await Users.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}

// update user
export async function updateUserById(req, res, next) {
  try {
    const updatedUser = await Users.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
}

// delete user
export async function deletedUserById(req, res, next) {
  try {
    const deletedUser = await Users.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(deletedUser);
  } catch (error) {
    next(error);
  }
}