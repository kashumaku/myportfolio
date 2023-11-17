import { useRef, useState } from "react";
import SocialMedia from "../components/socialMedia";
import { FaEnvelopeOpen, FaPhone } from "react-icons/fa";
import { RiSendPlane2Fill } from "react-icons/ri";
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();
    const [notification, setNotification] = useState(null)


    const notify = () => {
        setTimeout(() => {
            setNotification(null)
        }, 3000);
    }
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sir6is7', 'template_hz5kv67', form.current, 'xGLXqMkP4noWCKk1-')
            .then((result) => {
                console.log(result.text);
                setNotification({ ok: true, message: "Sent successfully" })
                notify()
            }, (error) => {
                console.log(error.text);
                setNotification({ ok: false, message: "Message not sent" })
                notify()
            });
    }


    return (
        <div id="contact" className="grid lg:grid-cols-2 max-lg:block pb-8 lg:h-screen mx-2 ">
            <h1 className="col-span-2 flex justify-center text-3xl font-bold my-4 uppercase">Get in<span className="text-[#FFB400] ml-2">Touch</span></h1>
            <div className="mx-auto border max-lg:my-4 border-gray-800 p-2 rounded-xl h-fit">
                <h1 className="text-2xl font-bold uppercase ">Feel free to contact</h1>
                <p className="max-w-[500px] text-gray-300 my-2">
                    Feel free to get in touch with me.
                    I am always open to discussing new projects,
                    creative ideas or opportunities to be part of
                    your visions.
                </p>
                <div>
                    <div className="flex gap-3 items-center mb-3">
                        <span className="text-[#FFB400]"><FaEnvelopeOpen size={30} /></span>
                        <p className="flex flex-col">
                            <span className="text-gray-300 uppercase">Mail me</span>
                            <span>katme3696@gmail.com</span>
                        </p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span className="text-[#FFB400]"><FaPhone size={30} /></span>
                        <p className="flex flex-col">
                            <span className="text-gray-300 uppercase">Call me</span>
                            <span>+251928962071</span>
                        </p>
                    </div>
                </div>
                <div>
                    <SocialMedia />
                </div>
            </div>
            {/* right */}
            <form ref={form} className="w-full p-2 h-fit lg:max-w-[640px] max-lg:m-auto border border-gray-800  rounded-xl">
                {notification && <p className={notification.ok ? 'text-green-500 flex justify-center' : 'text-red-500'}>{notification.message}</p>}
                <div className="flex flex-col gap-3 lg:flex-row mb-6">
                    <input name="user_name" placeholder="Your name" className="bg-gray-600 rounded-full p-2 text-white outline-none" />
                    <input name="user_email" placeholder="Your email" className="bg-gray-600 rounded-full p-2 text-white outline-none" />
                    <input name="user_subject" placeholder="Your subject" className="bg-gray-600 rounded-full p-2 text-white outline-none" />
                </div>
                <div className="flex flex-col items-center gap-3">
                    <textarea name="message" placeholder="Your message" resize="false" className="w-full rounded-xl h-[150px] bg-gray-600 p-2 "></textarea>
                    <button onClick={sendEmail} className="border-2 pl-6 border-[#FFB400] rounded-full w-fit flex items-center gap-2" >Send <RiSendPlane2Fill size={30} className="bg-[#FFB400] px-1 rounded-full" /></button>
                </div>
            </form>
        </div>
    );
}

export default Contact;