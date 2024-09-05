import React, {useState} from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo3.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <a href="#home">
                    <img src={Logo} alt='Logo Image' style={{width: '200px'}}/>
                </a>
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
                </li>
                <li>
                    <a href="#about" onClick={() => scrollToSection('about')}>About</a>
                </li>
                <li>
                    <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
                </li>
                <li>
                    <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
                </li>
                <li>
                    <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl'>
                    <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
                </li>
                <li className='py-6 text-4xl'>
                    <a href="#about" onClick={() => scrollToSection('about')}>About</a>
                </li>
                <li className='py-6 text-4xl'>
                    <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
                </li>
                <li className='py-6 text-4xl'>
                    <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
                </li>
                <li className='py-6 text-4xl'>
                    <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/markxqa1951998/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/markx195'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='mailto:npqa195.mark@gmail.com'
                        >
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            target="_blank"
                            rel="noopener noreferrer"
                            href='https://www.dropbox.com/scl/fi/z4ud770csnyrqxxtvscl0/cv-eruro-8-2023.pdf?rlkey=za8l8kfuwrav4tllhpesnjuq7&dl=0'
                        >
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
