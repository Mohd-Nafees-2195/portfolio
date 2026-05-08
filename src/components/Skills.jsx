const skills = ['Java','Spring Boot','Spring Security','Hibernate','React.js', 'Node.js', 'JavaScript', 'Tailwind','HTML', 'CSS', 'Rest API', 'Git','Docker','Microservices']

export default function Skills() {
    return (
        <section id='skills' className='py-24 bg-slate-950'>
            <div className='max-w-5xl mx-auto px-6'>
                <h2 className='text-4xl font-bold text-center text-cyan-400 mb-12'>Skills</h2>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                    {skills.map(skill => (
                        <div key={skill} className='bg-slate-800 p-6 rounded-2xl text-center text-white'>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}