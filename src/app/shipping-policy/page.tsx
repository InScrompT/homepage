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
    title: 'InScrompT | Shipping Policy',
    description: 'Shipping Policy',
}

const ShippingPolicy = () => {
    return (
        <>
            <div className="hero is-medium">
                <div className="hero-head">
                    <Navbar />
                </div>
                <div className="hero-body">
                    <div>
                        <h1 className={clsx(zillaSlab.className, 'title')}>Shipping Policy</h1>
                        <p className="subtitle mt-2">Last updated: 6th August 2024</p>
                    </div>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="content">
                        <p>InScrompT is a product development and consultation firm that does not manufacture or ship physical goods.</p>
                        <p>All our services and products are delivered digitally or through in-person consultations.</p>
                        <p>Therefore, we do not have a shipping policy as it is not applicable to our business model.</p>

                        <p>For information about how we deliver our services and digital products, please refer to our Terms and Conditions or contact us.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default ShippingPolicy
