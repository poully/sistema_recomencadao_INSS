import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter, expressWrapper } from "next-connect";
import fs from 'fs';
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            const folderName = `./public/uploads/${req.query.id}`;
            if (!fs.existsSync(folderName)) {
                fs.mkdirSync(folderName);
            }
            cb(null, folderName)
        },
        filename: (req, file, cb) => cb(null, `${uuidv4()}.${file.mimetype.split('/')[1]}`),
    }),
});

const router = createRouter<NextApiRequest, NextApiResponse>();


router.use(expressWrapper(upload.array('files') as any));

router.post((req, res) => {
    res.status(200).json({ data: 'success' });
});

export default router.handler({
    onError: (error: any, req, res) => {
        console.error(error?.stack);
        res.status(error?.statusCode || 500).end(error?.message);
    },
    onNoMatch: (req, res) => {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};