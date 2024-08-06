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
    title: 'InScrompT | Cancellation and Refunds',
    description: 'Cancellation and Refunds',
}

const CancellationAndRefundsPage = () => {
    return (
        <>
            <div className="hero is-medium">
                <div className="hero-head">
                    <Navbar />
                </div>
                <div className="hero-body">
                    <div>
                        <h1 className={clsx(zillaSlab.className, 'title')}>Cancellation and Refund Policy</h1>
                        <p className="subtitle mt-2">Last updated: 6th August 2024</p>
                    </div>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="content">
                        <h3>1. Project Cancellation</h3>

                        <p>Once a project contract is signed with InScrompT, it cannot be cancelled unless explicitly stated otherwise in the specific project contract.</p>

                        <h3>2. Refunds</h3>

                        <p>As a general rule, InScrompT does not offer refunds for its services or products.</p>
                        <p>This policy applies to all projects and digital products we develop.</p>

                        <h3>3. Exceptions</h3>

                        <p>Any exceptions to this no-refund policy will be clearly documented in the individual project contract.</p>
                        <p>These exceptions are made on a case-by-case basis and are not standard practice.</p>

                        <h3>4. Modifications</h3>

                        <p>InScrompT reserves the right to make changes to this policy.</p>
                        <p>Any modifications will be communicated to clients and updated on our website.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default CancellationAndRefundsPage
