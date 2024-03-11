import img1 from '../../../public/team/president.jpg'
import img2 from '../../../public/team/vicePresident1.png'
import img3 from '../../../public/team/vicePresident2.jpg'
import img4 from '../../../public/team/secretary.jpg'
import img5 from '../../../public/team/directorDeveloper.jpeg'
import img6 from '../../../public/team/abdusSamad.png'
import img7 from '../../../public/team/directorEventManagement.jpg'
import img8 from '../../../public/team/directorContent.jpg'
import img9 from '../../../public/parallax1.jpg'
import img10 from '../../../public/team/directorStillsAndMotions.jpeg'
import img11 from '../../../public/team/assistantDirectorContent.jpeg'
import img12 from '../../../public/team/treasurer.jpeg'
import GalleryCol from './GalleryCol'


import akashManCon from '../../../public/team/Akash(Manager-Content).jpg'
import amritavice from '../../../public/team/Amrita Kumari (Vice President).jpg'
import anishaRawatDir from '../../../public/team/AnishaRawat(directorcontent).jpg'
import anshikajointsec from '../../../public/team/Anshika khanna (joint secretary).jpg'
import arshDigitalMan from '../../../public/team/Arsh (Digital Marketing Manager).jpg'
import ashishSocialMan from '../../../public/team/Ashish Thakur(Manager - Social Media Team).jpg'
import avijotStillMan from '../../../public/team/Avijot Singh Anand(Stills & Motions Manager).jpg'
import bhavyaEventMan from '../../../public/team/Bhavya Munjal (Manager Event Management).jpg'
import divyantTreasurerMan from '../../../public/team/Divyant Mayank(Manager Treasurer) Vk.jpg'
import diyaContentMan from '../../../public/team/Diya Saroya (Manager Content).jpg'
import harpalStillDir from '../../../public/team/Harpal Singh(still and motion director).jpg'
import harshitEventMan from '../../../public/team/Harshit Verma (Event Manager)vk1.jpg'
import jaskiratPublicManager from '../../../public/team/Jaskirat Singh (public relations team - manager).jpg'
import lakshayDigitalManager from '../../../public/team/Lakshay Juneja (Manager Digital Marketing).jpg'
import maanyaContentManager from '../../../public/team/Maanya Pathak ( manager_content).jpg'
import namanSocialMediaAsDir from '../../../public/team/NAMAN BAGHEL - social media team assistant director.jpg'
import prassnaSocialManager from '../../../public/team/Prassnna Kr. Pradhan (Manager Social Media).jpg'
import priyanshiStillManager from '../../../public/team/Priyanshi Sharma - stills and motion team manager.jpg'
import rachelSocialManager from '../../../public/team/Rachel Arora (Social Media Manager).jpg'
import rishantDeveloperManager from '../../../public/team/Rishant(Manager-Developer).jpg'
import rohanEventDir from '../../../public/team/Rohan Arora(Director Event Management).jpg'
import sagarEventAssDir from '../../../public/team/Sagar Bisht (Assistant Director Event Management).jpg'
import sahilSkillsAssDir from '../../../public/team/Sahil Gupta(Assistant Director Stills and Motion).jpg'
import shahzarStillsMan from '../../../public/team/Shahzar Iqbal (Stills and Motion - MANAGER).jpg'
import shivamDeveloperManager from '../../../public/team/Shivam Gupta(Manager-DeveloperTeam).jpg'
import shivamDeveloperAssDir from '../../../public/team/Shivam Kumar(Assistant Director Developer).jpg'
import simarPublicManager from '../../../public/team/Simarpreet kaur - Public Relation Team Manager.jpg'
import tusharDigitalAssDir from '../../../public/team/Tushar Arora (Assistant Director Digital Marketing).jpg'
import ujjwalEventManager from '../../../public/team/Ujjwal Ahuja (MANAGER EVENT MANAGEMENT).jpg'
import prasoonDir from '../../../public/team/Prasoon Tripathi(Secretary).jpg'
import pawanKuman from '../../../public/team/Pawan Kumar Thakur (Social Media Manager).jpeg'



import vk2President from '../../../public/team/vk2/vk2President.jpg'
import vk2VicePresident from '../../../public/team/vk2/vk2Vice President.jpg'
import vk2Secretory from '../../../public/team/vk2/vk2Secretory.jpg'
import vk2ContentDirector from '../../../public/team/vk2/vk2Content Director.jpg'
import vk2SocialDirector from '../../../public/team/vk2/vk2Social Media Director.jpg'
import vk2EventDirector from '../../../public/team/vk2/vk2Event Manager Director.jpg'
import vk2DeveloperDirector from '../../../public/team/vk2/vk2Developer Director.jpg'
import vk2DeveloperManager from '../../../public/team/vk2/vk2Developer manager.jpg'
import vk2StillDirector from "../../../public/team/vk2/Mehak Chandra - Stills and Motion Director.jpg";



const Gallery = () => {
    // const col1 = [{ image: img1, name: 'Varun', desig: 'president' }, { image: img2, name: 'Varun', desig: 'president' }, { image: img3, name: 'Varun', desig: 'president' },]
    // const col2 = [{ image: img4, name: 'Varun', desig: 'president' }, { image: img5, name: 'Varun', desig: 'president' }, { image: img6, name: 'Varun', desig: 'president' },]
    // const col3 = [{ image: img7, name: 'Varun', desig: 'president' }, { image: img8, name: 'Varun', desig: 'president' }, { image: img9, name: 'Varun', desig: 'president' },]
    // const col4 = [{ image: img10, name: 'Varun', desig: 'president' }, { image: img11, name: 'Varun', desig: 'president' }, { image: img12, name: 'Varun', desig: 'president' },]

    const col1 = [
        { image: img1, name: 'Varun Gupta', desig: 'President' },
        { image: img5, name: 'Vinay Kumar', desig: 'Director Developer ' },

        { image: rohanEventDir, name: 'Rohan Arora', desig: 'Director Event Management' },
        { image: anishaRawatDir, name: 'Anisha Rawat', desig: 'Director Content ' },
        { image: akashManCon, name: 'Akash', desig: 'Manager Content ' },

        { image: arshDigitalMan, name: 'Arsh', desig: 'Manager Digital Marketing' },
        { image: ashishSocialMan, name: 'Ashish Thakur', desig: 'Manager Social Media Team' },
        { image: avijotStillMan, name: 'Avijot Singh Anand', desig: 'Manager Stills & Motions' },
        { image: sagarEventAssDir, name: 'Sagar Bisht', desig: 'Assistant Director Event Management ' },
        { image: sahilSkillsAssDir, name: 'Sahil Gupta', desig: 'Assistant Director Stills & Motions' },
        { image: tusharDigitalAssDir, name: 'Tushar Arora', desig: 'Assistant Director Digital Marketing' },
        { image: lakshayDigitalManager, name: 'Lakshay Juneja', desig: 'Manager Digital Marketing ' },




    ]
    const col2 = [
        { image: amritavice, name: 'Amrita Kumari', desig: 'Vice President' },
        { image: img6, name: 'Abdus Samad', desig: 'Manager Developer' },
        { image: vk2VicePresident, name: 'Priyanshu Maheshwari', desig: 'Vice President' },
        { image: vk2President, name: 'Naman Arora', desig: 'President-VK2' },



        { image: shivamDeveloperAssDir, name: 'Shivam Kumar', desig: 'Assistant Director Developer ' },

        { image: img11, name: 'Shibani Badola', desig: 'Manager Content' },
        { image: simarPublicManager, name: 'Simarpreet kaur', desig: 'Manager Public Relation ' },

        { image: rachelSocialManager, name: 'Rachel Arora', desig: 'Manager Social Media ' },

        { image: namanSocialMediaAsDir, name: 'Naman Bhagel', desig: 'Assistant Director Social Media ' },
        { image: priyanshiStillManager, name: 'Priyanshi Sharma', desig: 'Manager Stills & Motions' },

        { image: jaskiratPublicManager, name: 'Jaskirat Singh', desig: 'Manager Public Relations ' },




    ]
    const col3 = [
        { image: harpalStillDir, name: 'Harpal Singh', desig: 'Director Stills & Motions' },
        { image: img3, name: 'soumay sanpui', desig: 'Vice President' },
        { image: bhavyaEventMan, name: 'Bhavya Munjal', desig: 'Manager Event Management ' },
        { image: vk2EventDirector, name: 'Sahil Bhalla', desig: 'Manager Developer' },
        { image: vk2Secretory, name: 'Gauransh Harjal', desig: 'Manager Developer' },
        { image: divyantTreasurerMan, name: 'Divyant Mayank', desig: 'Manager Treasurer' },


        { image: vk2ContentDirector, name: 'Megha kaushik', desig: 'Manager Event Management ' },

        { image: maanyaContentManager, name: 'Maanya Pathak', desig: 'Manager Content ' },
        { image: prassnaSocialManager, name: 'Prassnna Kr. Pradhan', desig: 'Manager Social Media ' },
        { image: diyaContentMan, name: 'Diya Saroya', desig: 'Manager Content ' },


        { image: vk2DeveloperDirector, name: 'Kanha Yadav', desig: 'Manager Social Media ' },




    ]

    const col4 = [
        { image: shahzarStillsMan, name: 'Shahzar Iqbal', desig: 'Manager Stills & Motions' },
        { image: shivamDeveloperManager, name: 'Shivam Gupta', desig: 'Manager Developer ' },
        { image: prasoonDir, name: 'Prasoon Tripathi', desig: 'Secretary' },
        { image: anshikajointsec, name: 'Anshika khanna', desig: 'Joint Secretary' },
        { image: rishantDeveloperManager, name: 'Rishant', desig: 'Manager Developer ' },
        { image: ujjwalEventManager, name: 'Ujjwal Ahuja', desig: 'Manager Event Manager' },
        { image: harshitEventMan, name: 'Harshit Verma', desig: 'Manager Event Management ' },
        { image: vk2SocialDirector, name: 'Vanshika Vats', desig: 'Manager Event Management ' },

        { image: pawanKuman, name: 'Pawan Kumar Thakur', desig: 'Manager Social Media ' },
        { image: vk2StillDirector, name: 'Mehak Chandra', desig: 'Manager Social Media ' },

        { image: vk2DeveloperManager, name: 'Himanshu Anand', desig: 'Manager Content ' },






    ]

    return (
        <div className="photos md:p-10 p-4">
            <div className="flex flex-wrap gap-5 justify-center">
                <GalleryCol imageArray={col1} />
                <GalleryCol imageArray={col2} />
                <GalleryCol imageArray={col3} />
                <GalleryCol imageArray={col4} />

                {/* <div className="col1 md:w-[22.5%] w-[45%]  gap-5 flex flex-col">
                    <div className='imgDiv relative overflow-hidden'>
                    <Image src={img1} alt='' className='w-full hover:scale-95' />
                    <h1 className='absolute bg-accent/60 p-1 px-2 rounded-full text-sm md:text-lg imgText left-3 font-extrabold
                    transition-transform duration-1000
                    '>Varun Gupta</h1>
                    </div>
                    <div className='imgDiv relative overflow-hidden'>
                    
                    <Image src={img2} alt='' className='w-full hover:scale-95' />
                    <h1 className='absolute bg-accent/60 p-1 px-2 rounded-full text-sm md:text-lg imgText left-3 font-extrabold
                    transition-transform duration-1000
                    '>Varun Gupta</h1>
                    </div>
                    <div className='imgDiv relative overflow-hidden'>
                    
                    <Image src={img3} alt='' className='w-full hover:scale-95' />
                    <h1 className='absolute bg-accent/60 p-1 px-2 rounded-full text-sm md:text-lg imgText left-3 font-extrabold
                    transition-transform duration-1000
                    '>Varun Gupta</h1>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Gallery