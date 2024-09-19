import { Zilla_Slab } from 'next/font/google'
import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import clsx from 'clsx'
import Footer from '@/components/footer'

const zillaSlab = Zilla_Slab({
    subsets: ['latin'],
    weight: ['700'],
})

export const metadata: Metadata = {
    title: 'InScrompT | Privacy Policy',
    description: 'Privacy Policy',
}

const HireUs = () => {
    return (
        <>
            <div className="hero is-medium">
                <div className="hero-head">
                    <Navbar />
                </div>
                <div className="hero-body">
                    <div>
                        <h1 className={clsx(zillaSlab.className, 'title')}>Hire Us!</h1>
                        <p className="subtitle mt-2">Let us turn your idea into reality!</p>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="card">
                        <div className="card-content">
                            <div className="columns">
                                <div className="column is-four-fifths">
                                    <div className="content">
                                        <h2 className={clsx(zillaSlab.className)}>Let's talk!</h2>
                                        <p>Before we accept your project, we'd like to talk with you and get your requirements. Book a 30 minute call</p>
                                        <p><b>We charge $2/150₹ to combat spam.</b> We'll return it after the discovery call.</p>
                                    </div>
                                </div>
                                <div className="column">
                                    <form>
                                        <script src='https://checkout.razorpay.com/v1/payment-button.js' data-payment_button_id="pl_Oxn67oQff3ACtu"></script>
                                    </form>
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

export default HireUs
