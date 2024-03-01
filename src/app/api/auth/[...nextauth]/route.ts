import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../../../server";

const mySecret = process.env.NEXTAUTH_SECRET
export const authOptions:AuthOptions = {
    callbacks:{
        async redirect({url, baseUrl}:{url:string,baseUrl:string}) {
            console.log('url', url);
            console.log('baseUrl', baseUrl);
            return url.startsWith(baseUrl) ? url : baseUrl + '/dashboard';
          }
    },
    secret: mySecret,
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                username:{label:"Username",type:'text',placeholder:"Enter you username"},
                password:{label:"Password",type:'password',placeholder:"Enter you password"}
            },
            async authorize(credentials, req) {
                const name = credentials?.username as string
                const password = credentials?.password as string
                if (!name || !password) {
                    return null
                }
                const user = await prisma.admin.findUnique({
                   where:{
                    name
                   }
                })

                if (user) {
                    if (user.password == password) {
                        return user
                    }
                    else{
                        return null
                    }
                }else{
                    return null
                }
            },
        })
    ]
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }