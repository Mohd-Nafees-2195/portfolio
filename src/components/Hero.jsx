import profile from '../assets/profile.jpg'
import BgColor from './BgColor'

export default function Hero() {

    return (
        <>
        <section className='min-h-screen bg-slate-950 text-white flex items-center'>
           
            <BgColor
                bottom="100px"
                left="100px"
                size="700px"
                color="bg-blue-500/30 animate-pulse"
            />
            <div className='max-w-6xl mx-auto px-6 grid md:grid-cols-1 gap-10 items-center'>
                <div>
                    <p className='text-cyan-400 mb-3'>Software Engineer</p>
                    <h1 className='text-5xl md:text-7xl font-black leading-tight'>Turning ideas into scalable software.</h1>
                    <p className='mt-6 text-slate-400 text-lg'>Building robust software systems focused on scalability and performance.</p>
                    <div className='mt-8 flex flex-wrap gap-4'>
                        <a href='#projects' className='px-6 py-3 rounded-2xl bg-cyan-400 text-black font-bold'>View Work</a>
                        <a href='#contact' className='px-6 py-3 rounded-2xl border border-slate-700'>Hire Me</a>
                    </div>
                </div>

            </div>
            <BgColor
                bottom="100px"
                left="100px"
                size="700px"
                color="bg-green-500/30 animate-pulse"
            />
        </section>
        </>
    )
}