import bcrypt from 'bcrypt';
// import { v4 as uuidv4 } from 'uuid';
import jwtService from "../services/jwtService.js";
import userService from '../services/userService.js'

export const register = async (req, res) => {
    const { email, password } = req.body;
    const newUser = await userService.registerUser(email, password)
    const normalizedUser = userService.normalizeUser(newUser)
    res.send(normalizedUser)
}

export const login = async (req, res) => {
    const { email, password } = req.body

    const user = await userService.findByEmail(email)

    if (!user) {
        // throw new myCustomError
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash)

    if (!isPasswordValid) {
        // throw new myCustomError
        console.log(isPasswordValid, '------------')
    }

    const normalizedUser = userService.normalizeUser(user)
    const accessToken = jwtService.sign(normalizedUser)

    res.send({
        ...normalizedUser,
        accessToken,
    });
}
