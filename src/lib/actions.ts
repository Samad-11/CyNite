'use server'

import { revalidatePath } from "next/cache";
import { prisma } from "../../server";
import { Prisma } from "@prisma/client";
import { join } from "path";
import { buffer } from "stream/consumers";
import { unlink, writeFile } from "fs/promises";

export async function registerParticipant(formData:FormData) {
    const date = new Date();
    const name = formData.get("name") as string
    const transactionId = formData.get("transactionId") as string
    const course = formData.get("course") as string
    const receipt:File | null = formData.get("receipt") as unknown as File

    if (!receipt) {
        return {message:"Receipt Image is required"}
    }
    const dateString = date.getUTCMilliseconds() as unknown as string
    const bytes =  await receipt.arrayBuffer();
    const buffer = Buffer.from(bytes)
    const path = join('public/tmp',dateString as string + receipt.name)
    const fileName = dateString + receipt.name 
    
    await writeFile(path,buffer)
    try {
        const newParticipant = await prisma.participants.create({
            data:{
                name,
                course,
                transactionId,
                receiptPath:fileName
            }
        })
        return{message:`You have been successfully registered as ${name}`,ok:true}
    } catch (error) {
        return{message:"error",ok:false}
    }
}

export async function deleteParticipant(formData:FormData) {
    const id = formData.get("id") as string;
    const fileName = formData.get("receiptPath") as string;
    if (fileName) {
        const path = join('public/tmp',fileName)
        await unlink(path)
    }
    try {
        const deletedParticipant = await prisma.participants.delete({
            where:{
                id
            }
        })
        if (!deleteParticipant) {
            return {message:"Deletion of Participant failed ",ok:false}
        }
        revalidatePath("/")
        return {message:`${deletedParticipant.name} is successfully deleted`,ok:true}
    } catch (error) {
        return {message:"Deletion of Participant failed ",ok:false}
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