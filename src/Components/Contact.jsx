import React from 'react'

function Contact() {
    return (
        <>
            <div className='Contact-Header'>
                <div className='Thought-Tag'>
                    <p>Share your thought</p>
                </div>
                <p className='HearYou-Tag'>
                    Love to hear from you
                </p>
                <p className='Company-Slogan-Tag'>
                    We believe that the best way to do business is to build relationships.<br /> That's why we're always
                    here to hear from you, answer your questions, and help you find the best solution for your needs.

                </p>
            </div>
            <div className='Main-Contact-Div'>
                <div className='Form-Main-Container'>
                    <div className='Form-Container'>
                        <div className='Contact-Form-Div'>
                            <p>Get in touch</p>
                            <p>
                                Our friendly team would love to hear from you.
                            </p>
                            <form action="#" className="Contact-Form">
                                <div className='First-Line'>
                                    <div>
                                        <label className='py-2'>First Name</label>
                                        <input type="text" placeholder='First Name' />
                                    </div>
                                    <div>
                                        <label className='py-2'>Last Name</label>
                                        <input type="text" placeholder='Last Name' />
                                    </div>
                                </div>
                                <div className='Second-Line'>
                                    <label className='py-2'>Email</label>
                                    <input type="text" placeholder='Email' />
                                </div>
                                <div className='Third-Line'>
                                    <label className='py-2'>Phone Number</label>
                                    <input type="text" placeholder='Phone number' />
                                </div>
                                <div className='Fourth-Line'>
                                    <label className='py-2'>Message</label>
                                    <input type="text" placeholder='Leave us a message' />
                                </div>
                                <button>
                                    Send Message
                                </button>
                            </form>
                        </div>

                    </div>
                    <div className='Image-Container'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact