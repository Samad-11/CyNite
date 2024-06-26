import NextAuth from "next-auth"
import authOptions from "../options"


const mySecret = process.env.NEXTAUTH_SECRET

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }