import clsx from 'clsx'
import { Zilla_Slab } from 'next/font/google'
import { FaPhone, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Footer from '../components/footer'
import Navbar from '@/components/navbar'

const zillaSlab = Zilla_Slab({
    subsets: ['latin'],
    weight: ['700'],
})

const Home = () => {
    return (
        <>
            <section className="hero is-fullheight">
                <div className="hero-head">
                    <Navbar />
                </div>

                <div className="hero-body">
                    <div>
                        <h1 className={clsx('brand-title', 'has-text-weight-bold', 'is-italic', zillaSlab.className)}>
                            InScrompT
                            <span className="brand-accent-color">.</span>
                        </h1>

                        <h2 className="subtitle mt-2">Building products for humans</h2>
                    </div>
                </div>

                <div className="hero-foot">
                    <div className="mb-4 ml-4 is-flex is-justify-content-left">
                        <div className="buttons">
                            <a href="mailto:hey@inscrompt.com" className="button">
                                <span className="icon is-small">
                                    <FaEnvelope />
                                </span>
                                <span className='is-hidden-touch'>hey@inscrompt.com</span>
                            </a>

                            <a href="https://www.linkedin.com/company/inscrompt/" className="button">
                                <span className="icon is-small">
                                    <FaLinkedin />
                                </span>
                                <span className='is-hidden-touch'>inscrompt</span>
                            </a>

                            <a href="https://www.instagram.com/inscrompt/" className="button">
                                <span className="icon is-small">
                                    <FaInstagram />
                                </span>
                                <span className='is-hidden-touch'>@inscrompt</span>
                            </a>

                            <a href="tel:+919080508847" className="button">
                                <span className="icon is-small">
                                    <FaPhone />
                                </span>
                                <span className='is-hidden-touch'>+91 90805 08847</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home
