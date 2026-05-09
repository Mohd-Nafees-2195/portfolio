import { useNavigate } from "react-router-dom"

const projects = [
    {
        name: 'Book My Show Application',
        timePeriod: 'FEB 2025 - OCT 2025',
        links:[
            {
                name:"Github",
                link:"https://github.com/Mohd-Nafees-2195/bookmyshow"
            }
        ],
        desc: ["Designed and developed a monolithic full-stack movie ticket booking system using Spring Boot and React.js",
            "Containerized the monolithic application using Docker and managed deployment with Docker Compose, ensuring consistent environments and simplified deployment",
            "Tech Stack: Java | Spring Boot | Spring Security | PostgreSQL | Hibernate | React"
        ]
    },
    {
        name: 'Quiz Application',
        timePeriod: 'JUN 2024 - JAN 2025',
        links: [
            {
                name: "Github",
                link: "https://github.com/Mohd-Nafees-2195/Rest"
            }
        ],
        desc: ["I first developed it as a monolithic application and later converted it to micro services.",
              "Designed and implemented two microservices (question-service, quiz-service) using Spring Boot and registered with Eureka Server for dynamic service discovery.",
              "Tech Stack: Java | Spring Boot | Spring Security | PostgreSQL | Hibernate | React.js"
        ]
    },
    {
        name: 'Android App',
        timePeriod: 'OCT 2022 - Jun 2023',
        links: [
            {
                name: "Github",
                link: "https://github.com/Mohd-Nafees-2195/android_java"
            },
            {
                name: "Play Store",
                link: "https://play.google.com/store/apps/details?id=com.mca.mtechproject&pcampaignid=web_share&pli=1"
            },
            {
                name: "Demo",
                link: "#"
            },
        ],
        desc: ["Built an android application to manage and track the project activities of students in NIT Calicut.",
            "Tech Stack: Java | Android Studio | Firebase Auth | Firestore | UI (XML + Activities)"
        ]
    }
]

export default function Projects() {

    const navigate = useNavigate();

    return (
        <section id='projects' className='py-24 bg-slate-900'>
            <div className='max-w-6xl mx-auto px-6'>
                <h2 className='text-4xl font-bold text-center text-cyan-400 mb-12'>Projects</h2>

                <div className='grid md:grid-cols-3 gap-6'>
                    {projects.map((project, index) => (
                        <div key={index} className='rounded-3xl p-7 bg-slate-900 border border-white/10 hover:-translate-y-2 transition'>
                            <h3 className='text-2xl text-white font-semibold'>{project.name}</h3>
                            <p className='text-slate-200 mt-4'>{project.timePeriod}</p>

                            <ul className="mt-10 space-y-6 text-slate-300 max-w-3xl mx-auto text-center md:text-left">
                                {project.desc.map((des, index) => (
                                    <li key={index}>
                                        {des}
                                    </li>
                                ))}
                            </ul>

                            {project.links.map((data, ind) => (
                                <a
                                    key={ind}
                                    href={data.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-6 ml-2 px-5 py-3 rounded-2xl bg-cyan-500 text-slate-950 font-semibold shadow-lg hover:bg-cyan-400 hover:-translate-y-1 transition duration-300"
                                >
                                    {data.name} →
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}