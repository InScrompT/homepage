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
    title: 'InScrompT | Privacy Policy',
    description: 'Privacy Policy',
}

const PrivacyPolicyPage = () => {
    return (
        <>
            <div className="hero is-medium">
                <div className="hero-head">
                    <Navbar />
                </div>
                <div className="hero-body">
                    <div>
                        <h1 className={clsx(zillaSlab.className, 'title')}>Privacy Policy</h1>
                        <p className="subtitle mt-2">Last updated: 6th August 2024</p>
                    </div>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="content">
                        <h3>1. Introduction</h3>

                        <p>InScrompT ("we," "our," or "us") is committed to protecting the privacy of our clients and users.</p>
                        <p>This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you engage our services or use our products.</p>

                        <h3>2. Information We Collect</h3>

                        <p>We may collect the following types of information:</p>

                        <p>2.1. Personal Information: Name, email address, phone number, and other contact details provided by you.</p>

                        <p>2.2. Business Information: Company name, job title, and other relevant business details.</p>

                        <p>2.3. Project Information: Data related to the specific projects we undertake for you.</p>

                        <h3>3. How We Use Your Information</h3>

                        <p>We use the collected information for the following purposes:</p>

                        <p>3.1. To provide and maintain our services</p>
                        <p>3.2. To communicate with you about our services and projects</p>
                        <p>3.3. To fulfill our contractual obligations</p>
                        <p>3.4. To improve our services and develop new features</p>

                        <h3>4. Information Sharing and Disclosure</h3>

                        <p>We do not sell your personal information.</p>
                        <p>We may share your information in the following situations:</p>

                        <p>4.1. With your consent</p>
                        <p>4.2. To comply with legal obligations</p>
                        <p>4.3. To protect our rights, privacy, safety, or property</p>

                        <h3>5. Data Security</h3>

                        <p>We implement appropriate technical and organizational measures to protect your information.</p>
                        <p>However, no method of transmission over the Internet or electronic storage is 100% secure.</p>

                        <h3>6. Your Rights</h3>

                        <p>Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data.</p>
                        <p>Please contact us to exercise these rights.</p>

                        <h3>7. Changes to This Privacy Policy</h3>

                        <p>We may update our Privacy Policy from time to time.</p>
                        <p>We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default PrivacyPolicyPage
