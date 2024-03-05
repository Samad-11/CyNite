'use client'
import { useInView } from 'framer-motion';
import React, { useRef } from 'react'

const AboutSectionContent = () => {
    const contentRef = useRef(null);
    const isInView = useInView(contentRef)
    return (
        <>
            <div ref={contentRef} className={`faunaOne md:text-2xl md:leading-10
            max-sm:text-sm
        transition-all
        duration-[2.3s]
        delay-150
        ${isInView ? "opacity-100" : "opacity-0"}
        ${isInView ? "translate-y-0" : "translate-y-52"}
        bg-accent
        p-8
        bg-opacity-85
        rounded-3xl
        flex flex-col
        `
            }>
                <hr className='w-1/3 mb-4 border-2' />
                <p className='text-justify faunaOne '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facilis placeat totam a minima nihil exercitationem eaque? Debitis dignissimos libero quia repudiandae pariatur? Ipsa repellat, eaque accusamus facilis modi corporis suscipit quia perspiciatis odit cumque nihil odio incidunt, sed placeat molestiae magni eveniet architecto voluptate obcaecati impedit voluptas error. Quisquam hic reiciendis veritatis non tempora voluptates! Tempore vero eum officia optio eaque totam suscipit sequi qui iste numquam, quaerat quod? Sequi, tenetur? Beatae iure magnam, magni officia hic natus distinctio nobis quaerat corrupti a expedita accusamus! Molestias quaerat repellat dignissimos sunt earum ab sequi error aliquam ipsum nobis, et nesciunt omnis corrupti laudantium. Dolorum illum illo ipsam debitis veritatis ut earum sint corporis autem molestias voluptatem laboriosam, commodi minima ea!
                </p>
                <hr className='w-1/3 self-end  mt-4 border-2' />
            </div>
        </>
    )
}

export default AboutSectionContent