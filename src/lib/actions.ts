'use server'

import { revalidatePath } from "next/cache";
import { prisma } from "../../server";
import { participants } from "@prisma/client";
import { transporter } from "./transporter";



// export async function registerParticipant(formData:FormData) {
//     // const date = new Date();
//     const name = formData.get("name") as string
//     const email = formData.get("email") as string
//     const phone = formData.get("phone") as string
//     const transactionId = formData.get("transactionId") as string
//     const course = formData.get("course") as string
//     const url = formData.get("receipt") as unknown as string
//     let eventArray = []
//     formData.get('coding') && eventArray.push('coding')
//     formData.get('treasure') && eventArray.push('treasure')
//     formData.get('innovation') && eventArray.push('innovation')
//     formData.get('gaming') && eventArray.push('gaming')

//     let splitNames = name.split(',')
//     const memberNames = splitNames.slice(1,)
//     // return {message:"Receipt Image is required",ok:true}
//     // if (!url) {
//     //     return {message:"Receipt Image is required"}
//     // }    
//     try {
//         const newParticipant = await prisma.participants.create({
//             data:{
//                 name:splitNames[0],
//                 email,
//                 phone,

//                 event:'test',
//                 amount:100,

//                 // course,
//                 transactionId,
//                 receiptPath:url,
//                 // eventSelect:eventArray,
//                 // members:memberNames
//             }
//         })
//         return{message:`You have been successfully registered as ${name}`,ok:true}
//     } catch (error) {
//         return{message:"error",ok:false}
//     }
// }

export async function deleteParticipant(formData: FormData) {
    const id = formData.get("id") as string;
    const url = formData.get("receiptPath") as string;
    if (url) {

    }
    try {
        const deletedParticipant = await prisma.participants.delete({
            where: {
                id
            }
        })
        if (!deleteParticipant) {
            return { message: "Deletion of Participant failed ", ok: false }
        }
        revalidatePath("/")
        return { message: `${deletedParticipant.name} is successfully deleted`, ok: true }
    } catch (error) {
        return { message: "Deletion of Participant failed ", ok: false }
    }
}

export async function getAllParticipants(verify = '', event = '', last24hours = '') {
    try {
        if (verify == 'true' || verify == 'false') {
            const isTransactionVerify = verify == 'true' ? true : false;
            const data = prisma.participants.findMany({
                where: {
                    isTransactionVerify
                },
                orderBy: {
                    id: "desc"
                }
            })
            return data;
        } else if (event != '') {
            const data = await prisma.participants.findMany({
                where: {
                    event
                },
                orderBy: {
                    id: "desc"
                }
            })
            return data
        } else if (last24hours == 'true') {
            const a = new Date()
            const d = new Date(a.getTime() - 86400000)
            const data = await prisma.participants.findMany({
                where: {
                    createdAt: {
                        gt: d
                    }
                },
                orderBy: {
                    id: "desc"
                }
            })
            return data
        } else {
            const data = await prisma.participants.findMany({
                orderBy: {
                    id: 'desc'
                }
            })
            return data;
        }
    } catch (error) {

    }
}

export async function toggleVerificationStatus(formData: FormData) {
    const id = formData.get("participant") as string
    let isVerify: string | boolean = formData.get("isVerify") as string
    if (isVerify == 'on') {
        isVerify = true
    } else {
        isVerify = false
    }
    try {
        const updateParticipant = await prisma.participants.update({
            where: {
                id
            },
            data: {
                isTransactionVerify: isVerify
            }
        })
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: [updateParticipant.email
            ],
            subject: `Cynet Registration verified`.toLocaleUpperCase(),
            // text: `${name} registered in ${event} ${subEvent ? `-${subEvent}` : ''}`,
            html: `<main style="background:black;height:100vh;width:100vw;overflow:hidden;color:white;
            display:flex;justify-content:center;flex-direction:column;align-items:center
            ">
              <h1>Your registration for event ${updateParticipant.event} ${updateParticipant.subEvent ? updateParticipant.subEvent : ""} is verified successfully</h1>
              <div>
              <img src='https://cynet.jimsd.org/logo/enigmaLogo.png' alt='Enigma Logo'  />
              </div>
              <h3>Thank you for registering the event at CYNET 2024. We're excited to welcome you to the Biggest IT Fest at JIMS, Vasant Kunj. Get ready to dive into the digital cosmos and showcase your skills in the METAVERSE! For any further assistance, feel free to reach out.
              </h3>
              <h2>Date : March ${updateParticipant.subEvent ? (updateParticipant.subEvent == 'bgmi' || updateParticipant.subEvent == 'valorant' ? '14th; 11:00 AM ,ONLINE ' : '15TH MARCH ,10:00 AM') : '15th ,10:00AM'}</h2>
            </main>`
        }
        if (isVerify) {
            await new Promise((resolve, reject) => {
                transporter.sendMail(mailOptions, (err, info) => {
                    if (err) {
                        console.log(err);
                        reject(err)
                    } else {
                        resolve(info)
                    }
                })
            })
        }
        revalidatePath("/")
    } catch (error) {
        console.log(error);

    }
}

export async function revalidate() {
    revalidatePath("/")
}

export async function registerParticipant(formData: FormData) {
    const event = formData.get('event') as string
    const mail = formData.get('mail') as string
    const phone = formData.get('phone') as string
    const name = formData.get('name') as string
    const amount = formData.get('amount') as string
    const college = formData.get('college') as string
    const enrollNo = formData.get('enrollNo') as string
    const subEvent = formData.has("game") ? formData.get('game') as string : null;
    const transId = formData.has("transId") ? formData.get('transId') as string : null;
    const receiptUrl = formData.has('receiptUrl') ? formData.get('receiptUrl') as string : null;
    const mates: string[] = []
    formData.has('mate1') ? mates.push(formData.get('mate1') as string) : null;
    formData.has('mate2') ? mates.push(formData.get('mate2') as string) : null;
    formData.has('mate3') ? mates.push(formData.get('mate3') as string) : null;
    formData.has('mate4') ? mates.push(formData.get('mate4') as string) : null;
    formData.has('mate5') ? mates.push(formData.get('mate5') as string) : null;

    const paidEvents = ['tezar_heist', 'arcade_arena']
    for (let i = 0; i < paidEvents.length; i++) {
        if (paidEvents[i] == event) {
            if ((transId == null || transId == '') || (receiptUrl == null || receiptUrl == '') || (amount == '0' || amount == '')) {
                return { message: "Please Complete your payment", ok: false }
            }
        }
    }
    if ((name == '') || (mail == '') || (phone == '') || (college == '') || (enrollNo == '')) {
        return { message: "Fill all the required fields", ok: false }
    }
    try {
        let participant: participants[];
        if (subEvent) {

            participant = await prisma.participants.findMany({
                where: {
                    email: mail,
                    event: event,
                    subEvent: subEvent
                }
            })

            if (participant[0]) {
                return { message: "Already Registered", ok: false }
            }

        } else {

            participant = await prisma.participants.findMany({
                where: {
                    email: mail,
                    event: event,
                }
            })
            if (participant[0]) {
                return { message: "Already Registered", test: participant[0], ok: false }
            }

        }
        const newParticipant = await prisma.participants.create({
            data: {
                amount: parseInt(amount),
                email: mail,
                event: event,
                subEvent: subEvent,
                name,
                phone,
                transactionId: transId,
                mates,
                college,
                enrollNoY: enrollNo,
                receiptPath: receiptUrl,
            }
        })

        // const mailOptions = {
        //     from: process.env.GMAIL_USER,
        //     to: ["samadmalik04@gmail.com"
        //     ],
        //     subject: `NEW REGISTRATION ${event}`,
        //     // text: `${name} registered in ${event} ${subEvent ? `-${subEvent}` : ''}`,
        //     html: `<main style="background:black;height:100vh;width:100vw;overflow:hidden;color:white;
        //     display:flex;justify-content:center;flex-direction:column;align-items:center
        //     ">
        //       <h1>New Registration</h1>
        //       <h2>${name} from ${college}  Register in ${event} ${subEvent && `-${subEvent}`}</h2>
        //     </main>`
        // }

        // await new Promise((resolve, reject) => {
        //     transporter.sendMail(mailOptions, (err, info) => {
        //         if (err) {
        //             console.log(err);
        //             reject(err)
        //         } else {
        //             resolve(info)
        //         }
        //     })
        // })
        return { message: `You have been successfully registered as ${name}`, ok: true }
    } catch (error) {
        return { message: "error", ok: false }
    }

}

export async function getAllTest(verify = '', event = '', last24hours = '') {
    if (last24hours == 'true') {
        const a = new Date()
        const d = new Date(a.getTime() - 86400000)
        const data = await prisma.participants.findMany({
            where: {
                createdAt: {
                    gt: d
                }
            },
            orderBy: {
                id: "desc"
            }
        })
        return data
    }
    if (verify && event) {
        const isTransactionVerify = verify == 'true' ? true : false
        const data = await prisma.participants.findMany({
            where: {
                event, isTransactionVerify
            },
            orderBy: {
                id: "desc"
            }
        })
        return data;
    } else if (verify) {
        const isTransactionVerify = verify == 'true' ? true : false
        const data = await prisma.participants.findMany({
            where: {
                isTransactionVerify
            },
            orderBy: {
                id: "desc"
            }
        })
        return data;
    } else if (event) {
        const data = await prisma.participants.findMany({
            where: {
                event
            },
            orderBy: {
                id: "desc"
            }
        })
        return data;
    } else {
        const data = await prisma.participants.findMany({
            orderBy: {
                id: "desc"
            }
        })
        return data;
    }
}