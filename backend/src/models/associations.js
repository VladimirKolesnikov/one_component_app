import { User } from "./User.js";
import { Coord } from "./Coord.js";
import { Token } from "./Token.js";

export function applyAssociations() {
  User.hasMany(Coord, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });

  Coord.belongsTo(User, {
    foreignKey: "userId",
  });

  User.hasOne(Token, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });

  Token.belongsTo(User, {
    foreignKey: "userId",
  });
}
