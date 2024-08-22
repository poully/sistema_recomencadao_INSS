import { NextResponse } from "next/server";

export type ExtractResponse<T> = T extends NextResponse<infer U> ? U : never;