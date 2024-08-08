import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import clsx from "clsx"
import { Zilla_Slab } from "next/font/google"

const zillaSlab = Zilla_Slab({
    subsets: ['latin'],
    weight: ['700'],
})

const ContactUsPage = () => {
    return (
        <>
            <div className="hero is-medium">
                <div className="hero-head">
                    <Navbar />
                </div>
                <div className="hero-body">
                    <div>
                        <h1 className={clsx(zillaSlab.className, 'title')}>Contact Us</h1>
                        <p className="subtitle mt-2">Have any questions? We'd love to hear from you!</p>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="content">
                        <h3>Office Address</h3>
                        <address>
                            GA Aarti Rajalakshmi Appartments<br />
                            No. 17 Old Township Road<br />
                            India, Tamil Nadu, Chennai - 600053 <br /><br />
                            Phone: +91 90805 08847 <br />
                            Email: <a href="mailto:hey@inscrompt.com">hey@inscrompt.com</a>
                        </address>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default ContactUsPage
