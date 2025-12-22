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
        //alsow check password
    }

    const normalizedUser = userService.normalizeUser(user)
    const accessToken = jwtService.sign(normalizedUser)

    res.send({
        ...normalizedUser,
        accessToken,
    });
}
