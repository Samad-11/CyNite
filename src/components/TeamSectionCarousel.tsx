import React from 'react'
import TeamSectionCarouselItem from './TeamSectionCarouselItem';
import secretaryImage from '../../public/team/secretary.jpg'
import directorDeveloper from '../../public/team/directorDeveloper.jpeg'
import directorContent from '../../public/team/AnishaRawat(directorcontent).jpg'
import directorSocialMedia from '../../public/team/directorSocialMedia.jpg'
import directorEventManagement from '../../public/team/directorEventManagement.jpg'
import directorStillsAndMotions from '../../public/team/directorStillsAndMotions.jpeg'
import treasurerImage from '../../public/team/treasurer.jpeg'
import vicePresident2Image from '../../public/team/vicePresident2.jpg'
import myImage from '../../public/team/abdusSamad.png'
import assistantDirectorContentImage from '../../public/team/assistantDirectorContent.jpeg'


const members = [
    // {
    //     name: 'Varun Gupta',
    //     designation: "President",
    //     image: presidentImage.src
    // },
    // {
    //     name: 'Amrita Kumari',
    //     designation: "Vice-President",
    //     image: vicePresident1Image.src
    // },
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
        name: 'Vinay Kumar',
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
        name: 'Harpal Singh',
        designation: "Stills And Motion-Director",
        image: directorStillsAndMotions.src
    },
    {
        name: 'Tisha',
        designation: "Treasurer",
        image: treasurerImage.src
    },
    {
        name: 'Shibani Badola',
        designation: "Content-Assistant Director",
        image: assistantDirectorContentImage.src
    },
    {
        name: 'Harshit Sharma',
        designation: "Social Media-Director",
        image: directorSocialMedia.src
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