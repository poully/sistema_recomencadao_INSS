import fs from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';


export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const formData = await req.formData();
        const file = formData.getAll('files')[0] as File;

        const filePath = `./public/uploads/${params.id}/${uuidv4()}.${file.type.split('/')[1]}`;
        await fs.writeFile(filePath, new Uint8Array(await file.arrayBuffer()));
        return NextResponse.json({ status: "success", data: file.size })
    }
    catch (e) {
        return NextResponse.json({ status: "fail", data: e })
    }
}
