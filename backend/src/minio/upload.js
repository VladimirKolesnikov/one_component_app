import multer from "multer";

const ramStorage = multer.memoryStorage();

export const upload = multer({
    storage: ramStorage,
    limits: {
        fileSize: 100 * 1024 * 1024,
    },
});
