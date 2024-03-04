'use client'
import { useInView } from 'framer-motion';
import React, { useRef } from 'react'

const AboutSectionContent = () => {
    const contentRef = useRef(null);
    const isInView = useInView(contentRef)
    return (
        <div ref={contentRef} className={`faunaOne md:text-2xl md:leading-8
        transition-all
        duration-[2.3s]
        delay-150
        ${isInView ? "opacity-100" : "opacity-0"}
        ${isInView ? "translate-y-0" : "translate-y-36"}
        `}>
            <p className='text-left faunaOne'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facilis placeat totam a minima nihil exercitationem eaque? Debitis dignissimos libero quia repudiandae pariatur? Ipsa repellat, eaque accusamus facilis modi corporis suscipit quia perspiciatis odit cumque nihil odio incidunt, sed placeat molestiae magni eveniet architecto voluptate obcaecati impedit voluptas error. Quisquam hic reiciendis veritatis non tempora voluptates! Tempore vero eum officia optio eaque totam suscipit sequi qui iste numquam, quaerat quod? Sequi, tenetur? Beatae iure magnam, magni officia hic natus distinctio nobis quaerat corrupti a expedita accusamus! Molestias quaerat repellat dignissimos sunt earum ab sequi error aliquam ipsum nobis, et nesciunt omnis corrupti laudantium. Dolorum illum illo ipsam debitis veritatis ut earum sint corporis autem molestias voluptatem laboriosam, commodi minima ea!
            </p>
        </div>
    )
}

export default AboutSectionContent