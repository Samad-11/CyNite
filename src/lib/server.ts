'use server'

import { revalidatePath } from "next/cache";
import { prisma } from "../../server";
import { Prisma } from "@prisma/client";

export async function registerParticipant(formData:FormData) {

    const name = formData.get("name") as string
    const transactionId = formData.get("transactionId") as string
    const course = formData.get("course") as string

    try {
        const newParticipant = await prisma.participants.create({
            data:{
                name,
                course,
                transactionId
            }
        })
        return{message:`You have been successfully registered as ${name}`,ok:true}
    } catch (error) {
        return{message:"error",ok:false}
    }
}

export async function getAllParticipants(verify = '') {

    try {
        let data : Prisma.PrismaPromise<{
            id: string;
            course: string;
            name: string;
            transactionId: string;
            isTransactionVerify: boolean;
            createdAt: Date;
        }[]>

        if (verify == 'true' || verify == 'false') {
            const isTransactionVerify = verify == 'true' ? true : false;
            data = prisma.participants.findMany({
                where:{
                    isTransactionVerify
                }
            })        
            
        }else{
            data = prisma.participants.findMany({
            })        
        }
        return data
    } catch (error) {
        
    }
}

export async function toggleVerificationStatus(formData:FormData) {
    const id = formData.get("participant") as string
    let isVerify:string | boolean = formData.get("isVerify") as string
    if (isVerify == 'on') {
        isVerify = true
    }else{
        isVerify = false
    }
    try {
        const updateParticipant = await prisma.participants.update({
            where: {
                id
            },
            data:{
                isTransactionVerify:isVerify
            }
        })
        revalidatePath("/")
    } catch (error) {
        
    }
}

export async function revalidate() {
    revalidatePath("/")
}