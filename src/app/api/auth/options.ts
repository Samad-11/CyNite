import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../../server";
const authOptions:AuthOptions = {
    callbacks:{
        async redirect({url, baseUrl}:{url:string,baseUrl:string}) {
            // console.log('url', url);
            // console.log('baseUrl', baseUrl);
            return url.startsWith(baseUrl) ? url : baseUrl + '/dashboard';
          }
    },
    secret: process.env.NEXTAUTH_SECRET,
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

export default authOptions