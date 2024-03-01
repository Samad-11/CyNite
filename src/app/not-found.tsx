import Link from 'next/link'

const NotFoundPage = () => {
    return (
        <section className="h-screen w-screen flex justify-center items-center">
            <div>
                <h1 className='text-6xl font-semibold mb-2'>Oops ...</h1>
                <h2 className='text-4xl font-extrabold mb-2'>Page Not Found</h2>
                <p className='text-2xl font-bold'>Go back to the<Link href={'/'} className='text-primary font-normal hover:text-accent'> Home Page </Link></p>
            </div>
        </section>
    )
}
export default NotFoundPage