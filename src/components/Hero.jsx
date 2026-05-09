import profile from '../assets/profile.jpg'
import BgColor from './BgColor'

export default function Hero() {

    return (
        <>
        <section className='min-h-screen bg-slate-950 text-white flex items-center'>
            <BgColor
                top="-100px"
                left="-100px"
                size="900px"
                color="bg-blue-500/10"
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

                {/* <div className="flex justify-center items-center">
                    <div className="p-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-2xl">
                        <img src={profile} alt="Profile"
                            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-slate-950"
                        />
                    </div>
                </div> */}

                {/* <div className='rounded-3xl p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='bg-slate-800 rounded-2xl p-6'>15+ Projects</div>
                        <div className='bg-slate-800 rounded-2xl p-6'>Fast UI</div>
                        <div className='bg-slate-800 rounded-2xl p-6'>Responsive</div>
                        <div className='bg-slate-800 rounded-2xl p-6'>Reusable Code</div>
                    </div>
                </div> */}
            </div>
            <BgColor
                bottom="-200px"
                right="-200px"
                size="900px"
                color="bg-blue-500/30"
            />
        </section>
        </>
    )
}