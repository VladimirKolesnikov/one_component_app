import { User } from "../models/User.js";

const normalizeUser = (user) => {
    const { id, email } = user;
    return { id, user }
}

const findByEmail = (email) => {
    return User.findOne({ where: { email }})
}

export default {
    normalizeUser,
    findByEmail,
}
