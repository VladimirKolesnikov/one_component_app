import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { User } from "../models/User.js";

const normalizeUser = (user) => {
    const { id, email } = user;
    return { id, email }
}

const registerUser = async (email, password) => {

    // check is such user exist

    const passwordHash = await bcrypt.hash(password, 10)
    const activationToken = uuidv4()
    
    const newUser = await User.create({
        email,
        passwordHash,
        activationToken,
    })

    // call email service to send email with activation link
    // for example: emailService.sendEmail(email, activationToken)

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
