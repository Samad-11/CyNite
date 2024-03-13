import nodemailer from 'nodemailer'
const pass = process.env.GMAIL_PASS_LUCKY
const sendFrom = process.env.GMAIL_USER_LUCKY
export const transporter2 = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: sendFrom,
        pass: pass,
    }
})
