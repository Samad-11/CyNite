import React from 'react'
import TeamSectionCarouselItem from './TeamSectionCarouselItem'
import presidentImage from '../../public/team/president.jpg'
import secretaryImage from '../../public/team/secretary.jpg'
import directorDeveloper from '../../public/team/directorDeveloper.jpeg'
import directorContent from '../../public/team/directorContent.jpg'
import directorSocialMedia from '../../public/team/directorSocialMedia.jpg'
import directorEventManagement from '../../public/team/directorEventManagement.jpg'
// import directorStillsAndMotions from '../../public/team/directorStillsAndMotions.jpg'
import treasurerImage from '../../public/team/treasurer.jpeg'
import vicePresident1Image from '../../public/team/vicePresident1.png'
import vicePresident2Image from '../../public/team/vicePresident2.jpg'
import myImage from '../../public/team/abdusSamad.png'
import assistantDirectorContentImage from '../../public/team/assistantDirectorContent.jpeg'

import vk2President from '../../public/team/vk2/vk2President.jpg'
import vk2VicePresident from '../../public/team/vk2/vk2Vice President.jpg'
import vk2Secretory from '../../public/team/vk2/vk2Secretory.jpg'
import vk2ContentDirector from '../../public/team/vk2/vk2Content Director.jpg'
import vk2SocialDirector from '../../public/team/vk2/vk2Social Media Director.jpg'
import vk2EventDirector from '../../public/team/vk2/vk2Event Manager Director.jpg'




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
    // {
    //     name: 'Sahil Gupta',
    //     designation: "Stills And Motion-Director",
    //     image: directorStillsAndMotions.src
    // },
    {
        name: 'Naman Arora',
        designation: "President (VK-2)",
        image: vk2President.src
    },
    {
        name: 'Priyanshu Maheshwari',
        designation: "Vice-President (VK-2)",
        image: vk2VicePresident.src
    },
    {
        name: 'Gouransh Harjai',
        designation: "Secretary (VK-2)",
        image: vk2Secretory.src
    },
    {
        name: 'Megha Kaushik',
        designation: "Director-Content (VK-2)",
        image: vk2ContentDirector.src
    },
    {
        name: 'Vanshika Vats',
        designation: "Director-Social Media (VK-2)",
        image: vk2SocialDirector.src
    },
    {
        name: 'Sahil Bhalla',
        designation: "Director-Event Management (VK-2)",
        image: vk2EventDirector.src
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