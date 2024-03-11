// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//     try {
        
        
//         const mailOptions = {
//             from: "abdussamadjims@gmail.com",
//             to: "samadmalik04@gmail.com",
//             subject: "Sending mail through SMTP",
//             text: "Hello ji"
//         }

//         const info = await transporter.sendMail(mailOptions)
//         console.log(info.response)
//         return NextResponse.json({ info }, { status: 200 })
//     } catch (error) {
//         console.log(error);
//         return NextResponse.json({ error }, { status: 500 })
//     }
// }