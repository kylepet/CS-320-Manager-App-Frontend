import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { error } from "console";


export default async function middleware(req: NextRequest) {
    let loginCookie = req.cookies.get("loggedin");
    let url = req.url;

    if (loginCookie && url === 'http://localhost:8000/') {
        const res = await fetch('http://localhost:3000/allSections', {
            method: 'GET',
            headers: { Authorization: `Bearer ${req.cookies.get('loggedin')?.value}` } 
        })
        const data = await res.json()
        console.log(data);
        return NextResponse.redirect('http://localhost:8000/dashboard');
    }

    if (!loginCookie && url.includes('dashboard')) {
        return NextResponse.redirect('http://localhost:8000');
    }
}