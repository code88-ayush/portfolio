import React, {useEffect} from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(()=> {
        AOS.init({duration: 1000})
    })

    return (
        <div name="about" className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>

                        <h2 className='text-4xl font-bold inline border-b-4 border-gray-500'>About</h2>

                </div>

                    <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-10 ease-in fade-in'>
                        In 2020, I started my journey as a B.Tech Computer Science & Engineering student in Ramkrishna Mahato Government Engineering College. I explored a lot. I tried different Fields like Graphic designing, Content Creation, Freelancing, Entrepreneurship & as well as Technologies like Python, Cloud, React, Flutter, Firebase, etc. As well as we established Google Developer Student Clubs, E-Cell in our college with my fellow classmates.I'm the Co-Lead of GDSC RKMGEC & In-Charge of E-Cell RKMGEC. I've also organized many technical workshops where I taught technologies like Python, Android, Google Cloud, etc.
                    </p>
                <br />

                    <p data-aos="fade-in" data-aos-duration="500" className='text-xl mt-5 ease-in  fade-in'>
                        I've worked for many projects for my clients as well as my personal projects. I also contributed for the GDSC RKMGEC web page. I have a Instagram page (@codewithbiki) where I create content for those who are just starting with programming and have more that 50k followers. I have learning attitude and growth mindset which helps me to collaborate with people and work for the society.
                    </p>
                    <div data-aos="zoom-in" data-aos-duration="500" className=' fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-5 gap-2'>


                    <AiOutlineCloudDownload />
                    <a href="./Ayush's Resume.pdf" download>Download CV</a>
                    </div>
            </div>
        </div>
    )
}

export default About