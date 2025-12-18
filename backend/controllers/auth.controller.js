import { User } from "../models/User.js";
import userService from '../services/userService.js'

export const register = async (req, res) => {
    const { email, password } = req.body;
// console.log('from auth controller')
    const newUser = await User.create({ email, passwordHash: password})
    // console.log(newUser)
    res.send(newUser)
}

export const login = async (req, res) => {
    const { email, password } = req.body
    const user = await userService.findByEmail(email)
    console.log('=====', user.email, '============================')
    res.send(user)
}
