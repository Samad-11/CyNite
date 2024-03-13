'use client'
import React, { useEffect, useRef, useState } from 'react'
import qr from "../../../public/qr/qr3.jpeg"
import Image from 'next/image'
import { registerParticipant } from '@/lib/actions'
import toast from 'react-hot-toast'
import { useEdgeStore } from '@/lib/edgestore'
import FormSubmitButton from './FormSubmitButton'


const Form = () => {
    const { edgestore } = useEdgeStore();
    async function uploadImage(file: File) {
        if (file) {
            const res = await edgestore.publicFiles.upload({
                file,
                onProgressChange: (progress) => {
                    // you can use this to show a progress bar
                    setProg(progress)
                    console.log(progress);
                },
            });
            // you can run some server action or api here
            // to add the necessary data to your database
            console.log(res);
            return res.url
        }
    }

    const fileInputRef = useRef(null)
    const [prog, setProg] = useState(0)

    const eventDetails = [
        {
            name: "tezar_heist",
            fee: 200,
            player: [1, 2],
            subOption: [{
                name: '',
                fee: 0,
                player: [1]
            }]
        },
        {
            name: "ui_universe",
            fee: 0,
            player: [1],
            subOption: [{
                name: '',
                fee: 0,
                player: [1]
            }]
        },
        {
            name: "quiz_technopedia",
            fee: 0,
            player: [1, 2],
            subOption: [{
                name: '',
                fee: 0,
                player: [1]
            }]
        },
        {
            name: "innovision_5",
            fee: 0,
            player: [1, 2, 3],
            subOption: [{
                name: '',
                fee: 0,
                player: [1]
            }]
        },
        {
            name: "code_kalpana",
            fee: 0,
            player: [1, 2, 3, 4],
            subOption: [{
                name: '',
                fee: 0,
                player: [1]
            }]
        },
        {
            name: "clipclash",
            fee: 0,
            player: [1],
            subOption: [{
                name: '',
                fee: 0,
                player: [1]
            }]
        },
        {
            name: "arcade_arena",
            fee: 0,
            player: [1],
            subOption: [
                {
                    name: 'bgmi',
                    fee: 200,
                    player: [1, 2, 3, 4]
                },
                {
                    name: 'valorant',
                    fee: 250,
                    player: [1, 2, 3, 4, 5]
                },
                {
                    name: 'stumble_guys',
                    fee: 30,
                    player: [1]
                },
                {
                    name: 'tekken_7',
                    fee: 50,
                    player: [1]
                },
            ]
        },
    ]
    const [receiptUrl, setReceiptUrl] = useState('')
    const [fee, setFee] = useState(0)
    const [selectedGameDetail, setSelectedGameDetail] = useState({
        name: '',
        fee: 0,
        player: [1]
    },
    )
    const [selectedEventDetail, setSelectedEventDetail] = useState({
        name: "",
        fee: 0,
        player: [1],
        subOption: [{
            name: '',
            fee: 0,
            player: [1]
        }]
    })
    console.log('====================================');
    console.log(typeof selectedEventDetail.subOption[0]);
    console.log('====================================');
    const onEventChangeHandler = (e: any) => {
        const event = ((e.target as HTMLInputElement).value)
        for (let i = 0; i < eventDetails.length; i++) {
            if (eventDetails[i].name == event) {
                if (event != 'arcade_arena') {
                    setSelectedGameDetail({
                        name: "",
                        fee: 0,
                        player: [1],
                    })
                }
                setSelectedEventDetail(eventDetails[i])
                break;
            }
        }
    }

    const onGameChangeHandler = (e: any) => {
        const game = ((e.target as HTMLInputElement).value)
        for (let i = 0; i < eventDetails[6].subOption.length; i++) {
            if (game == eventDetails[6].subOption[i].name) {
                setSelectedGameDetail(eventDetails[6].subOption[i])
                break
            }
        }
    }
    useEffect(() => {
        setFee(selectedGameDetail.fee)

    }, [selectedGameDetail])

    useEffect(() => {
        setFee(selectedEventDetail.fee)
    }, [selectedEventDetail])

    const formRef = useRef<HTMLFormElement>(null)
    const [ok, setOk] = useState(false)
    const [isFormSubmitting, setIsFormSubmitting] = useState(false)
    const [isFileUploading, setIsFileUploading] = useState(false)
    const [isConfirm, setIsConfirm] = useState(false)

    return (
        <form ref={formRef} action={async (FormData) => {
            setIsFormSubmitting(true)
            const { message, ok } = await registerParticipant(FormData)
            ok ? formRef.current?.reset() : setOk(false);
            ok ? toast.success(message) : toast.error(message)
            ok ? setOk(true) : setOk(false)
            ok ? setFee(0) : '';
            ok ? setReceiptUrl('') : setOk(false);
            setIsFormSubmitting(false)
            setProg(0)
        }} className=' max-md:w-screen max-md:px-5'>

            {/* event select */}
            <select required onChange={onEventChangeHandler} name='event'
                defaultValue="" className="select select-bordered border-[5px] w-full  bg-transparent my-5
            max-md:text-xs 
            ">
                <option className='text-primary-content font-black' disabled value={""}>Select Event</option>
                <option className='text-primary-content' value={'tezar_heist'}>Tezar Heist</option>
                <option className='text-primary-content' value={'ui_universe'}>UI Universe</option>
                <option className='text-primary-content' value={"arcade_arena"}>Arcade Arena</option>
                <option className='text-primary-content' value={'quiz_technopedia'}>Quiz Technopedia</option>
                <option className='text-primary-content' value={'innovision_5'}>Innovision 5.0</option>
                <option className='text-primary-content' value={'code_kalpana'}>Code Kalpana</option>
                <option className='text-primary-content' value={'clipclash'}>Clipclash</option>
            </select>

            {/* subOptions */}
            {
                (selectedEventDetail.subOption[0].name != null && selectedEventDetail.subOption[0].name != "") &&
                <select required name='game' onChange={onGameChangeHandler}

                    defaultValue={""}
                    className=" select select-bordered border-[5px] w-full  bg-transparent 
                max-md:text-xs mb-3">
                    <option disabled value={""}>Select Game</option>
                    <option value={'bgmi'}>BGMI</option>
                    <option value={'tekken_7'}>Tekken 7</option>
                    <option value={"stumble_guys"}>Stumble Guys</option>
                    <option value={'valorant'}>Valorant</option>
                </select>

            }

            {
                (selectedEventDetail.name != null && selectedEventDetail.name != "") &&
                <label className="input input-bordered border-[5px]  flex items-center gap-2 bg-transparent mt-2 mb-5 max-md:text-xs overflow-x-hidden">
                    Timing
                    <input readOnly disabled type="email" className="grow" value={
                        selectedEventDetail.name != 'arcade_arena' ? "15th March, 10:00AM" :
                            (selectedGameDetail.name == 'bgmi' || selectedGameDetail.name == 'valorant') ? "14th March, 11:00AM, Online" : "14-15th March "
                    } placeholder="" />
                </label>
            }



            {/* totla fee */}
            {/* <h1 className="my-5">Amount to be paid ₹<span className='md:text-lg text-base font-bold'>{fee}</span>/- Only</h1> */}
            <input type="hidden" name="amount" value={fee} />
            {/* mail id */}
            <label className="input input-bordered border-[5px]  flex items-center gap-2 bg-transparent mt-2 mb-5 max-md:text-xs overflow-x-hidden">
                Mail ID
                <input required type="email" name='mail' className="grow" placeholder="Enter your Mail Id" />
            </label>

            {/* phone no. */}
            <label className="input input-bordered border-[5px]  flex items-center gap-2 bg-transparent my-5 max-md:text-xs overflow-x-hidden">
                Phone No.
                <input required type="text" name='phone' className="grow" title='Number Only' placeholder="Enter phone number" />
            </label>

            {/* name */}
            <label className="input input-bordered border-[5px]  flex items-center gap-2 bg-transparent my-5 max-md:text-xs overflow-x-hidden">
                Name
                <input required type="text" name='name' className="grow" placeholder="Enter your name" />
            </label>

            {/* college */}
            <label className="input input-bordered border-[5px]  flex items-center gap-2 bg-transparent my-5 max-md:text-xs overflow-x-hidden">
                College
                <input required type="text" name='college' className="grow" placeholder="Enter your college name" />
            </label>
            {/*enrollment no. */}
            <label className="input input-bordered border-[5px]  flex items-center gap-2 bg-transparent my-5 max-md:text-xs overflow-x-hidden">
                Enrolment No.
                <input required type="text" name='enrollNo' className="grow" placeholder="Enter your enrollment number" />
            </label>

            {/* {mates} */}
            {
                selectedEventDetail.player.map((mate) => {
                    if (selectedEventDetail.player.length > mate) {
                        return (
                            <label key={mate} className="input input-bordered border-[5px]  flex items-center gap-2 bg-transparent my-5 max-md:text-xs overflow-x-hidden">
                                Team mate {mate}
                                <input type="text" name={`mate${mate}`} className="grow" placeholder="Enter your team mate's name" />
                            </label>
                        )
                    }

                })
            }
            {
                selectedGameDetail.player.map((mate) => {
                    if (selectedGameDetail.player.length > mate) {
                        return (
                            <label key={mate} className="input input-bordered border-[5px]  flex items-center gap-2 bg-transparent my-5 max-md:text-xs overflow-x-hidden">
                                Team mate
                                <input type="text" name={`mate${mate}`} className="grow" placeholder="Enter your team mate's name" />
                            </label>
                        )
                    }

                })
            }
            {
                fee > 0 &&
                <>
                    <div className="flex justify-between items-center flex-wrap gap-4 mb-3">

                        <div className="w-44 max-sm:w-full h-44  input-bordered border-[5px] relative">
                            <Image src={qr} alt='qrCode' fill className='max-sm:object-contain' />
                        </div>
                        <h1 className="px-3 max-sm:w-full text-center"><span className='md:text-lg text-base font-bold'>Pay ₹{fee} using UPI</span>/-</h1>
                    </div>
                    {/* file */}
                    <label className="form-control w-full max-sm:w-ful">
                        <div className="label -mb-4">
                            <span className="label-text">Attach screenshot of payment receipt.</span>
                        </div>

                        <input
                            required
                            disabled={isFileUploading}
                            ref={fileInputRef} accept="image/*" name='file' type="file" className="file-input file-input-bordered w-full  my-5 bg-transparent border-[5px] "
                            onChange={async (e) => {
                                if (e.target.files?.[0]) {
                                    const file = e.target.files[0];
                                    if (file.size > 1048576) {
                                        e.target.value = ''
                                        toast.error("File size should be less than 1MB")
                                    } else {
                                        setIsFileUploading(true)
                                        const data = await uploadImage(e.target.files?.[0])
                                        if (data) {
                                            setReceiptUrl(data);
                                        }
                                        setIsFileUploading(false)
                                        console.log(data);
                                    }
                                }
                            }}
                        />
                    </label>
                    <input type="hidden" name="receiptUrl" value={receiptUrl && receiptUrl} />
                    <div className="label">
                        <progress className="progress w-56" value={prog} max="100"></progress>
                        {
                            prog == 100 && <span className='label-text-alt'>Upload Done</span>
                        }
                    </div>
                    <label className="input input-bordered border-[5px]  flex items-center gap-2 bg-transparent my-5 max-md:text-xs overflow-x-hidden">
                        Transaction Id
                        <input required type="text" name='transId' className="grow" placeholder="Enter the transaction id" />
                    </label>
                </>
            }
            <label className="input input-bordered border-[5px]  flex items-center justify-around gap-2 bg-transparent my-5 max-md:text-xs overflow-x-hidden">
                All the Details above are correct?
                <input required type="checkbox"
                    onChange={() => {
                        setIsConfirm(!isConfirm)
                    }}
                    className=" checkbox" placeholder="" />
            </label>
            <FormSubmitButton isConfirm={isConfirm} isFileUploading={isFileUploading} />
            <h3 className={` mt-4 p-3 text-sm bg-secondary rounded-full text-primary px-5 ${!ok && 'hidden'}`}>If Transaction Id is incorrect your registration will be withdraw</h3>
        </form >
    )
}

export default Form