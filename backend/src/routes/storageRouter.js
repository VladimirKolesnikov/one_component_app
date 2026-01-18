import express from "express";
import { upload } from "../minio/upload.js";
import path from "path";
import { v4 as uuidv4 } from 'uuid';
import { s3 } from "../minio/minioClient.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
// import * as coordController from "../controllers/coordController.js";

const storageRouter = express.Router();

storageRouter.post("/", upload.single('file'), async (req, res) => {
    console.log('in storage router');

    if (!req.file) {
        throw new Error('file required')
    }

    const fileExtension = path.extname(req.file.originalname).slice(1)
    const newFilename = `${uuidv4()}.${fileExtension}`;
    console.log(req.file.mimetype)

    const putMedia = new PutObjectCommand({
        Bucket: 'media',
        Key: newFilename,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
    })

    console.log('after comand creating')

    const hash = await s3.send(putMedia)

    console.log(hash, '-hash')

    res.end('abc')
});

storageRouter.get("/", (req, res) => {
    console.log('in storage router')
    res.send('from storage/ GET');
});

export { storageRouter };
