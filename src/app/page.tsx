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

            <section className="section">
                <div className="container">
                    <h2 className={clsx(zillaSlab.className, 'title')}>Services we provide</h2>
                    <p className="subtitle mt-2">We meticulously craft products that align with your vision</p>

                    <hr />

                    <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <div className="content">
                                        <h4 className={clsx(zillaSlab.className)}>Product Development Consultation</h4>
                                        <p className='has-text-justified'>
                                            At InScrompT, we work closely with clients who have an in-house tech team or
                                            hire a dedicated tech team. We collaborate with these teams to help launch innovative products.
                                            We provide guidance, best practices, and strategic input to ensure the successful development
                                            and deployment of our clients' products.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mt-5">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <div className="content">
                                        <h4 className={clsx(zillaSlab.className)}>Turn-Key Product Development</h4>
                                        <p className='has-text-justified'>
                                            In some cases, clients entrust us with the complete product development process.
                                            We take on the project, handle all the technical work, and deliver the final product
                                            back to the client. This allows our clients to focus on their core business while we handle
                                            the end-to-end product development lifecycle.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mt-5">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <div className="content">
                                        <h4 className={clsx(zillaSlab.className)}>Ongoing Support and Maintenance</h4>
                                        <p className='has-text-justified'>
                                            Even after the initial product launch, InScrompT provides ongoing support and maintenance services.
                                            We work with clients to ensure their products remain up-to-date, secure, and continuously improved
                                            based on user feedback and market changes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mt-5">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <div className="content">
                                        <h4 className={clsx(zillaSlab.className)}>Custom Solutions</h4>
                                        <p className='has-text-justified'>
                                            Every client's needs are unique, and we understand that. InScrompT offers customized
                                            solutions tailored to the specific requirements of each project. We work closely with
                                            our clients to understand their challenges and deliver bespoke products or services
                                            that address their unique business needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home
