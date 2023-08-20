import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/c8cc2b82-0f91-4a86-8a0b-1bfdd98491dd"
                  className='flex flex-col max-w-[1000px] mx-auto w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email -
                        npqa195.mark@gmail.com</p>
                </div>
                <div className='flex'>
                    <div className="w-full">
                        <input className='bg-[#ccd6f6] p-2 w-full' type="text" placeholder='Name' name='name'/>
                    </div>
                    <div className='pl-4 w-full'>
                        <input className='bg-[#ccd6f6] p-2 w-full' type="tel" placeholder='Phone Number' name='phone'/>
                    </div>
                </div>
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button
                    className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's
                    Collaborate
                </button>
            </form>
        </div>
    )
}

export default Contact
