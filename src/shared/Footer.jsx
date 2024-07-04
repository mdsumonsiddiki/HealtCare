import { Link } from 'react-router-dom';
import logo from '../assets/footerLogo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube  } from "react-icons/fa";

const Footer = () => {
    return (
       <footer className="bg-textColorPrimary py-16 md:py-32 mt-10 md:mt-16 lg:mt-20">
            <div className="container text-center md:text-left">
                <Link><img className='block mb-8 mx-auto md:ml-0' src={logo} alt="" /></Link>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 md:gap-6'>
                    <div className='mb-4'>
                        <h3 className='text-whiteSecond'>123 Main Street Anytown, USA</h3>
                        <h3 className='text-whiteSecond md:mb-6'>Postal Code: 12345</h3>
                        <h3 className='text-whiteSecond'>Support: support@oyolloo.com</h3>
                        <h3 className='text-whiteSecond'>(Available : 10:00am to 07:00pm)</h3>
                    </div>
                    <div className='lg:mx-auto mb-4'>
                        <ul className=' space-y-3 '>
                            <li>
                                <Link className='text-whiteSecond font-semibold duration-300 hover:text-yellow hover:pl-2'>Home</Link>
                            </li>
                            <li>
                                <Link className='text-whiteSecond font-semibold duration-300 hover:text-yellow hover:pl-2'>About us</Link>
                            </li>
                            <li>
                                <Link className='text-whiteSecond font-semibold duration-300 hover:text-yellow hover:pl-2'>Success Page</Link>
                            </li>
                            <li>
                                <Link className='text-whiteSecond font-semibold duration-300 hover:text-yellow hover:pl-2'>Terms and condition</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:mx-auto mb-4'>
                        <ul className=' space-y-3 '>
                            <li>
                                <Link className='text-whiteSecond font-semibold duration-300 hover:text-yellow hover:pl-2'>Services</Link>
                            </li>
                            <li>
                                <Link className='text-whiteSecond font-semibold duration-300 hover:text-yellow hover:pl-2'>Scheduling</Link>
                            </li>
                            <li>
                                <Link className='text-whiteSecond font-semibold duration-300 hover:text-yellow hover:pl-2'>Contact Us</Link>
                            </li>
                            <li>
                                <Link className='text-whiteSecond font-semibold duration-300 hover:text-yellow hover:pl-2'>Patient Portal</Link>
                            </li>
                            
                        </ul>
                    </div>
                    <div className='lg:ms-auto'>
                        <h2 className='text-whiteSecond font-semibold '>Follow Us</h2>
                        <ul className='flex items-center gap-7 mt-6 justify-center md:justify-start'>
                            <li>
                                <Link className='text-whiteSecond font-semibold duration-300 text-3xl hover:text-yellow hover:pl-2'><FaFacebook/></Link>
                            </li>
                            <li>
                                <Link className='text-whiteSecond font-semibold duration-300 text-3xl hover:text-yellow hover:pl-2'><FaInstagram/></Link>
                            </li>
                            <li>
                                <Link className='text-whiteSecond font-semibold duration-300 text-3xl hover:text-yellow hover:pl-2'><FaLinkedin/></Link>
                            </li>
                            <li>
                                <Link className='text-whiteSecond font-semibold duration-300 text-3xl hover:text-yellow hover:pl-2'><FaYoutube /></Link>
                            </li>
                        </ul>
                        <Link className='text-whiteSecond mt-10 inline-block font-semibold '>@docplus 2024</Link>
                    </div>
                </div>
            </div>
       </footer>
    );
};

export default Footer;