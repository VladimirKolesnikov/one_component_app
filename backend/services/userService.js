import { User } from "../models/User.js";

const normalizeUser = (user) => {
    const { id, email } = user;
    return { id, email }
}

const registerUser = async (email, password) => {
    const newUser = await User.create({
        email,
        passwordHash: password,
    })

    return newUser
}

const findByEmail = (email) => {
    return User.findOne({ where: { email }})
}

export default {
    normalizeUser,
    registerUser,
    findByEmail,
}
