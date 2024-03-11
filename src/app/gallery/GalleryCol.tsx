import img1 from '../../../public/team/president.jpg'
import img2 from '../../../public/team/vicePresident1.png'
import img3 from '../../../public/team/vicePresident2.jpg'
import Image, { StaticImageData } from 'next/image'
const GalleryCol = ({ imageArray }: { imageArray: { image: StaticImageData, name: string, desig: string }[] }) => {
    return (

        <div className="col1 md:w-[22.5%] w-[45%]  gap-5 flex flex-col">
            {
                imageArray.map((image) => (
                    <div key={null} className='imgDiv relative overflow-hidden'>
                        <Image src={image.image} alt='' className='w-full hover:scale-95' />
                        {/* <h1 className='absolute top-0 cinzel bg-neutral-content rounded-full max-md:text-xs py-[.15rem] px-1 md:py-1 md:px-2 border-b-2 border-b-black  border-r-2 border-r-black font-bold text-black'>{image.desig}</h1> */}
                        <h1 className='absolute bg-accent/60 p-1 px-2 rounded-full text-sm md:text-lg imgText left-3 font-extrabold transition-duration-1000'>{image.name}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default GalleryCol