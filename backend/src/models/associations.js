import { User } from "./User.js";
import { Coord } from "./Coord.js";

export function applyAssociations() {
  User.hasMany(Coord, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });

  Coord.belongsTo(User, {
    foreignKey: "userId",
  });
}
