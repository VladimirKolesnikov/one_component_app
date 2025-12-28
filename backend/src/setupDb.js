import "dotenv/config";
import { client } from "./utils/db.js";
import { User } from "./models/User.js";
import { Coord } from "./models/Coord.js";
import { applyAssociations } from "./models/associations.js";

applyAssociations();
client.sync({ force: true });
