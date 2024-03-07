import React from 'react'
import SponsorCarouselItem from './TeamSectionCarouselItem'
import { map } from 'zod'
import TeamSectionCarouselItem from './TeamSectionCarouselItem'
import presidentImage from '../../public/team/president.jpg'
import secretaryImage from '../../public/team/secretary.jpg'
import directorDeveloper from '../../public/team/directorDeveloper.jpeg'
import directorContent from '../../public/team/directorContent.jpg'
import directorSocialMedia from '../../public/team/directorSocialMedia.jpg'
import directorEventManagement from '../../public/team/directorEventManagement.jpg'
import directorStillsAndMotions from '../../public/team/directorStillsAndMotions.jpg'
import directorDigitalMarketing from '../../public/team/directorDigitalMarketing.jpg'
import treasurerImage from '../../public/team/treasurer.jpeg'
import vicePresident1Image from '../../public/team/vicePresident1.png'
import vicePresident2Image from '../../public/team/vicePresident2.jpg'
import myImage from '../../public/team/abdusSamad.png'



const members = [
    {
        name: 'Varun Gupta',
        designation: "President",
        image: presidentImage.src
    },
    {
        name: 'Amrita Kumari',
        designation: "Vice-President",
        image: vicePresident1Image.src
    },
    {
        name: 'SOUMAY SANPUI',
        designation: "Vice-President",
        image: vicePresident2Image.src
    },
    {
        name: 'Prasoon Tripathi',
        designation: "Secretary",
        image: secretaryImage.src
    },
    {
        name: 'Vinay Gupta',
        designation: "Developer-Director",
        image: directorDeveloper.src
    },
    {
        name: 'Abdus Samad',
        designation: "Developer-Manager",
        image: myImage.src
    },
    {
        name: 'Rohan Arora',
        designation: "Event Management-Director",
        image: directorEventManagement.src
    },
    {
        name: 'Anisha Rawat',
        designation: "Content-Director",
        image: directorContent.src
    },
    {
        name: 'Tisha',
        designation: "Treasurer",
        image: treasurerImage.src
    },
    {
        name: 'Harshit Sharma',
        designation: "Social Media-Director",
        image: directorSocialMedia.src
    },
    {
        name: 'Krushnansh Gupta',
        designation: "Digital Marketing-Director",
        image: directorDigitalMarketing.src
    },

    {
        name: 'Sahil Gupta',
        designation: "Stills And Motion-Director",
        image: directorStillsAndMotions.src
    },
]


const TeamSectionCarousel = () => {

    return (
        <div className="carousel flex h-64 items-center     rounded-box   gap-3 ">
            {
                members.map((member) => {
                    return (
                        <TeamSectionCarouselItem key={member.name} image={member.image} name={member.name} desig={member.designation} />
                    )
                })

            }

        </div>
    )
}

export default TeamSectionCarousel