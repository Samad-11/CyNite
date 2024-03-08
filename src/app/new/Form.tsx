'use client'
import React, { useEffect, useState } from 'react'
import qr from "../../../public/qr/testQR2.jpg"
import Image from 'next/image'

const Form = () => {
    const eventDetails = [
        {
            name: "tezar_heist",
            fee: 200,
            player: [1, 2],
            subOption: []
        },
        {
            name: "ui_universe",
            fee: 0,
            player: [1],
            subOption: []
        },
        {
            name: "quiz_technopedia",
            fee: 0,
            player: [1, 2],
            subOption: []
        },
        {
            name: "innovision_5",
            fee: 0,
            player: [1, 2, 3],
            subOption: []
        },
        {
            name: "code_kalpana",
            fee: 0,
            player: [1, 2, 3, 4],
            subOption: []
        },
        {
            name: "clipclash",
            fee: 0,
            player: [1],
            subOption: []
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
                    fee: 200,
                    player: [1, 2, 3, 4, 5]
                },
                {
                    name: 'stumble_guys',
                    fee: 30,
                    player: [1]
                },
                {
                    name: 'tekken_7',
                    fee: 100,
                    player: [1]
                },
            ]
        },
    ]
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
        subOption: [{}]
    })

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



    return (
        <form action='' className=' max-md:w-screen max-md:px-5'>

            {/* event select */}
            <select onChange={onEventChangeHandler} name='event' defaultValue={""} className="select select-bordered border-[5px] w-full  bg-transparent my-5
            max-md:text-xs
            ">
                <option disabled value={""}>Select Event</option>
                <option value={'tezar_heist'}>Tezar Heist</option>
                <option value={'ui_universe'}>UI Universe</option>
                <option value={"arcade_arena"}>Arcade Arena</option>
                <option value={'quiz_technopedia'}>Quiz Technopedia</option>
                <option value={'innovision_5'}>Innovision 5.0</option>
                <option value={'code_kalpana'}>Code Kalpana</option>
                <option value={'clipclash'}>Clipclash</option>
            </select>

            {/* subOptions */}
            {
                selectedEventDetail.subOption[0] != null &&
                <select name='event' onChange={onGameChangeHandler} defaultValue={""} className=" select select-bordered border-[5px] w-full  bg-transparent 
                max-md:text-xs">
                    <option disabled value={""}>Select Game</option>
                    <option value={'bgmi'}>BGMI</option>
                    <option value={'tekken_7'}>Tekken 7</option>
                    <option value={"stumble_guys"}>Stumble Guys</option>
                    <option value={'valorant'}>Valorant</option>
                </select>
            }

            {/* totla fee */}
            <h1 className="my-5">Amount to be paid ₹<span className='md:text-lg text-base font-bold'>{fee}</span>/- Only</h1>

            {/* mail id */}
            <label className="input input-bordered border-[5px]  flex items-center gap-2 bg-transparent my-5 max-md:text-xs overflow-x-hidden">
                Mail ID
                <input type="email" name='mail' className="grow" placeholder="Enter your Mail Id" />
            </label>

            {/* phone no. */}
            <label className="input input-bordered border-[5px]  flex items-center gap-2 bg-transparent my-5 max-md:text-xs overflow-x-hidden">
                Phone No.
                <input type="text" name='phone' className="grow" placeholder="Enter your mail id" />
            </label>

            {/* name */}
            <label className="input input-bordered border-[5px]  flex items-center gap-2 bg-transparent my-5 max-md:text-xs overflow-x-hidden">
                Name
                <input type="text" name='name' className="grow" placeholder="Enter your name" />
            </label>

            {/* {mates} */}
            {
                selectedEventDetail.player.map((mate) => {
                    if (selectedEventDetail.player.length > mate) {
                        return (
                            <label key={mate} className="input input-bordered border-[5px]  flex items-center gap-2 bg-transparent my-5 max-md:text-xs overflow-x-hidden">
                                Team mate
                                <input type="text" name='name' className="grow" placeholder="Enter your team mate's name" />
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
                                <input type="text" name='name' className="grow" placeholder="Enter your team mate's name" />
                            </label>
                        )
                    }

                })
            }
            {
                fee > 0 &&
                <>
                    <div className="flex justify-between items-center flex-wrap">
                        <div className="w-44 h-44  input-bordered border-[5px] relative">
                            <Image src={qr} alt='qrCode' fill className='object-cover' />
                        </div>
                        <h1 className="">₹<span className='md:text-lg text-base font-bold'>{fee}</span>/-</h1>
                    </div>
                    <label className="input input-bordered border-[5px]  flex items-center gap-2 bg-transparent my-5 max-md:text-xs overflow-x-hidden">
                        TransId
                        <input type="text" name='transId' className="grow" placeholder="Enter the transaction id" />
                    </label>
                </>
            }
            <button type="submit" className='btn border-[5px] bg-transparent input-bordered w-full font-semibold tracking-wider 
            uppercase hover:input-bordered hover:bg-neutral-content hover:text-neutral max-md:text-xs overflow-x-hidden
            '>Submit</button>
        </form>
    )
}

export default Form