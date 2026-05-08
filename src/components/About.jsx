import BgColor from "./BgColor"

export default function About() {

    const aboutMe = [
        "Full Stack Java Developer with 1 year of experience in designing and developing web applications using Java, Spring Boot, and React.js. Experienced in building scalable backend services and microservices, developing REST APIs, and creating responsive frontend interfaces.",
        "Proficient in implementing secure authentication and authorization using OAuth 2.0 and JSON Web Tokens (JWT), with a strong understanding of application security and best practices. Skilled in designing maintainable, efficient, and scalable solutions for modern web applications.",
        "Strong problem-solving abilities backed by 700+ solved coding problems and 5-star badges on HackerRank, demonstrating solid knowledge of data structures, algorithms, and logical thinking.",
        "Currently seeking opportunities in backend or full stack Java development where I can contribute to building reliable software systems, continue growing as an engineer, and work on impactful products."
    ]

    return (
        <section id='about' className='py-24 bg-slate-900'>
                <BgColor
                bottom="200px"
                left="100px"
                size="500px"
                color="bg-blue-500/30"
            />
            <div className='max-w-5xl mx-auto px-6 text-center'>
                <h2 className='text-4xl font-bold text-cyan-400'>About Me</h2>
                <ul className="mt-10 space-y-6 text-slate-400 max-w-3xl mx-auto text-center md:text-left text-white">
                    {aboutMe.map((des, index) => (
                        <li key={index}>
                            {des}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}