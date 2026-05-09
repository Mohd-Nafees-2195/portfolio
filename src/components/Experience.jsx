export default function Experience() {

    const projects = [
    {
        role: "Software Engineer",
        name: 'Vaishnavi Information Technology(VIT)',
        timePeriod: 'JULY 2023 - MAY 2024',
        links:[
            {
                name:"github",
                link:"https://github.com/Mohd-Nafees-2195/bookmyshow"
            }
        ],
        desc: ["Collaborated with cross-functional teams to integrate the Hajj passenger reservation system, enabling reservation lookup and verification using National ID.",
            "Implemented an automated Cron job to transmit reservation data to the Egypt's government two hours before flight departure, ensuring regulatory compliance and eliminating manual intervention.",
            "Tech Stack: Java | Spring Boot | Spring Security | SQL | React.js"
        ]
    },
]


    return (
        <section id='experience' className='py-24 bg-slate-950'>
            <div className='max-w-6xl mx-auto px-6'>
                <h2 className='text-4xl font-bold text-center text-cyan-400 mb-12'>Experience</h2>

                <div className='grid md:grid-cols-3 gap-6'>
                    {projects.map((project, index) => (
                        <div key={index} className='rounded-3xl p-7 bg-slate-900 border border-white/10 hover:-translate-y-2 transition'>
                            <h3 className='text-2xl text-white font-semibold'>{project.role}</h3>
                            <p className='text-slate-200 mt-4'>{project.name}</p>
                            <p className='text-slate-200 mt-4'>{project.timePeriod}</p>

                            <ul className="mt-10 space-y-6 text-slate-300 max-w-3xl mx-auto text-center md:text-left">
                                {project.desc.map((des, index) => (
                                    <li key={index}>
                                        {des}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}