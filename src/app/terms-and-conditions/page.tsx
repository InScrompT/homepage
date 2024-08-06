import clsx from 'clsx'
import { Zilla_Slab } from 'next/font/google'
import Footer from '../../components/footer'
import Navbar from '@/components/navbar'
import { Metadata } from 'next'

const zillaSlab = Zilla_Slab({
    subsets: ['latin'],
    weight: ['700'],
})

export const metadata: Metadata = {
    title: 'InScrompT | Terms and Conditions',
    description: 'Terms and Conditions',
}

const TermsAndConditions = () => {
    return (
        <>
            <div className="hero is-medium">
                <div className="hero-head">
                    <Navbar />
                </div>
                <div className="hero-body">
                    <div>
                        <h1 className={clsx(zillaSlab.className, 'title')}>Terms and Conditions</h1>
                        <p className="subtitle mt-2">Last updated: 6th August 2024</p>
                    </div>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="content">
                        <h3>Introduction</h3>
                        <p>
                            Welcome to InScrompT ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our services and any products
                            developed by us. By engaging our services or using our products, you agree to these Terms. If you disagree with any part of these
                            terms, please do not use our services.
                        </p>

                        <h3>Services</h3>

                        <p>
                            InScrompT, legally known as InScrompT Tech OPC Pvt. Ltd., provides product development and consultation services. The specific
                            details of each project will be outlined in individual contracts with our clients.
                        </p>

                        <h3>Client Agreements</h3>

                        <p>Each project undertaken by InScrompT will be governed by a specific contract agreed upon by both parties.</p>
                        <p>Once a project contract is signed, it cannot be cancelled unless explicitly stated otherwise in the contract.</p>
                        <p>Any modifications to these general terms for specific clients will be documented in their individual project contracts.</p>

                        <h3>Payments and Refunds</h3>
                        <p>Payment terms will be specified in each project contract.</p>
                        <p>As a general rule, InScrompT does not offer refunds for its services or products.</p>
                        <p>Exceptions to the no-refund policy, if any, will be explicitly stated in the individual project contract.</p>

                        <h3>Intellectual Property</h3>
                        <p>
                            Unless otherwise specified in the project contract, InScrompT retains all intellectual property rights to the
                            products and services we develop.
                        </p>
                        <p>Clients may be granted specific usage rights as outlined in their individual contracts.</p>

                        <h3>Limitation of Liability</h3>
                        <p>
                            InScrompT shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting
                            from your use of our services or products.
                        </p>
                        <p>Our liability is limited to the amount paid for the specific project or product in question.</p>

                        <h3>Governing Law</h3>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of India, without
                            regard to its conflict of law provisions.
                        </p>

                        <h3>Changes to Terms</h3>

                        <p>
                            We reserve the right to modify these Terms at any time. We will always post the most current version on
                            our website. By continuing to use our services after changes become effective, you agree to the revised terms.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default TermsAndConditions
