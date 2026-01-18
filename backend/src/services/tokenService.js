import { where } from "sequelize";
import { Token } from "../models/Token.js";

const save = async (userId, refreshToken) => {
    const token = await Token.findOne({ where: { userId } });

    if (token) {
        token.refreshToken = refreshToken;

        await token.save();

        return;
    }

    await Token.create({ userId, refreshToken });

    // await Token.updateOne(
    //     { userId },
    //     { refreshToken },
    //     { upsert: true }
    // );
};

const getTokenByToken = (refreshToken) => {
    return Token.findOne({ where: { refreshToken } });
};

const remove = (userId) => {
    return Token.destroy({ where: { userId } })
}

export const tokenService = {
    save,
    getTokenByToken,
    remove,
};
