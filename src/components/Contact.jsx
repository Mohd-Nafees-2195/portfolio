import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";




const Contact = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    // toast("Thank you for contanting us, Get back to you soon");
    const handleOnClick = () => {
        console.log(form);


        axios.post("https://portfolio-976f.onrender.com/mail/send-email", form)
            .then((response) => {
                console.log("Response:", response.data);
                toast("Thank you for contanting us, Get back to you soon");
            }).catch((error) => {
                console.error("Some Error:", error);
            });
        scroll(0, 0, 0, 0);
    }



    return (
        <section id='contact' className='py-24 bg-slate-900'>
            <div className='max-w-2xl mx-auto px-6'>
                <h2 className='text-4xl text-cyan-400 font-bold text-center'>Contact</h2>

                <div className='mt-10 space-y-4'>
                    <p className='text-slate-300 text-center'>I am currently open to new opportunities and collaborations. If you have any questions, project ideas, or just want to say hello, feel free to reach out to me using the contact below. I look forward to connecting with you!</p>
                    <div className='flex items-center gap-4 justify-center mt-6'>
                        <a href="mailto:mohdnafees3785@gmail.com" className='text-slate-200 hover:text-cyan-400 transition'>
                            mohdnafees3785@gmail.com
                        </a>
                        <a href="tel:+917408514306" className='text-slate-200 hover:text-cyan-400 transition'>
                            +91 74085 14306
                        </a>
                        <a href="tel:+916394755358" className='text-slate-200 hover:text-cyan-400 transition'>
                            +91 63947 55358
                        </a>
                    </div>
                </div>

                {/* <div className='mt-10 space-y-4'>
                    <input type="text" name="name" className='w-full p-4 rounded-2xl bg-slate-900 text-white' placeholder='Name' onChange={handleChange} />
                    <input type="email" name="email" className='w-full p-4 rounded-2xl bg-slate-900 text-white' placeholder='Email' onChange={handleChange} />
                    <textarea name="message" rows='5' className='w-full p-4 rounded-2xl bg-slate-900 text-white' placeholder='Message' onChange={handleChange}></textarea>
                    <button className='w-full p-4 rounded-2xl bg-cyan-400 text-black font-bold' onClick={handleOnClick}>Send Message</button>
                </div> */}
            </div>
        </section>
    )
}
export default Contact
