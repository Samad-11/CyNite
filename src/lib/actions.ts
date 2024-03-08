'use server'

import { revalidatePath } from "next/cache";
import { prisma } from "../../server";
import { Prisma } from "@prisma/client";



export async function registerParticipant(formData:FormData) {
    // const date = new Date();
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const transactionId = formData.get("transactionId") as string
    const course = formData.get("course") as string
    const url = formData.get("receipt") as unknown as string
    let eventArray = []
    formData.get('coding') && eventArray.push('coding')
    formData.get('treasure') && eventArray.push('treasure')
    formData.get('innovation') && eventArray.push('innovation')
    formData.get('gaming') && eventArray.push('gaming')

    let splitNames = name.split(',')
    const memberNames = splitNames.slice(1,)
    // return {message:"Receipt Image is required",ok:true}
    // if (!url) {
    //     return {message:"Receipt Image is required"}
    // }    
    try {
        const newParticipant = await prisma.participants.create({
            data:{
                name:splitNames[0],
                email,
                phone,
                course,
                transactionId,
                receiptPath:url,
                eventSelect:eventArray,
                members:memberNames
            }
        })
        return{message:`You have been successfully registered as ${name}`,ok:true}
    } catch (error) {
        return{message:"error",ok:false}
    }
}

export async function deleteParticipant(formData:FormData) {
    const id = formData.get("id") as string;
    const url = formData.get("receiptPath") as string;
    if (url) {
       
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
             email: string;
             phone: string;
             transactionId: string | null;
             receiptPath: string | null;
             eventSelect: string[];
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
            data = prisma.participants.findMany({})   
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

