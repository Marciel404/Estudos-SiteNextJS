import Link from "next/link"
import { NextResponse } from "next/server"

export default function inutil(){
    return NextResponse.rewrite(<Link href="/"></Link>);
}