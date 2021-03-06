import React from 'react'
import Header from '../components/header'
import Head from 'next/head'
import ServiceDetails from '../components/Services/ServiceDetails'
import Testimonial from '../components/Home/Testimonial'
import KeyValues from '../components/Services/KeyValues'
import Footer from '../components/Footer'




const title = 'Personalized digital transformations'
const description = 'Whether you need to build cloud-native software or migrate existing legacy systems to the cloud, we take your project from idea to launch.'


const ServiceJSON = [
    {
        image: {
            src: '/img/cloud_native_service.svg',
            position: 'left',
            classes: 'items-center'
        },
        title: 'Cloud-Native Software',
        description: 'Build beautiful software that perfectly solves your business challenges',
        ctaDescription: 'Let’s work together on your next software project',
        pointers: [
            {
                title: 'Beautiful cloud-native applications for mobile, web, and desktop',
                description: 'Whether you need an iPhone, Android or iPad app, or you need a  web or desktop app, we build beautiful, functional apps that your users will love.'
            },
            {
                title: 'Rebuild legacy applications to be cloud-native',
                description: 'Rebuild an existing system using the latest cloud-native architecture and standards.'
            },
            {
                title: 'Enterprise-level backend software for cloud-native services',
                description: 'As senior solution architects, we design and build backend architecture, infrastructure, and software that matches perfectly with your unique challenges.'
            }
        ]
    },

    {
        image: {
            src: '/img/cloud_migration.svg',
            position: 'right',
            classes: 'items-center'
        },
        title: 'Cloud Migration',
        description: 'Move your legacy systems to the cloud and increase performance, reliability, availability, and scalability.',
        ctaDescription: 'Let’s work together on your cloud migration',
        pointers: [
            {
                title: 'Move existing on-premise systems to the cloud (lift & shift )',
                description: 'Keep your existing systems while taking advantage of the benefits of being in the cloud, often the quickest way to start a cloud migration.'
            },
            {
                title: 'Rebuild existing systems using the latest cloud-native architecture and standards',
                description: 'Instead of keeping old technology, leverage all the power and benefits of the cloud by rebuilding your legacy systems using cloud-native architecture.'
            },
            {
                title: 'Shift stand-alone workloads and functions to the cloud ',
                description: 'Move workloads, event-drive functions, automation, and processes, both scheduled and non-scheduled, to the cloud'
            }
        ]
    },

    {
        image: {
            src: '/img/cloud_operation.svg',
            position: 'left',
            classes: 'items-baseline cloud-operation-img-container'
        },
        title: 'Cloud Operations',
        // classes: "h-741",
        description: 'Focus on your core competencies and enjoy the peace of mind of letting us manage your cloud infrastructure.',
        ctaDescription: 'Let’s work together on your next software project',
        pointers: [
            {
                title: 'Fully managed hosting service on Microsoft Azure cloud, Heroku, AWS, or DigitalOcean.',
                description: 'From Infrastructure design to  management (capacity, billing, security, compliance, data, etc.) , including operating systems, capacity planning and billing, as well as security, compliance and personal data protection. oud migration.'
            },
            {
                title: 'Systems architecture design and deployment',
                description: 'We can design your complete cloud infrastructure, implementation and deployment, and if you’d like, we can then hand it off to you to manage yourself if you prefer.'
            }
        ]
    }
]


const TestimonialJSON = {
    userDetails: {
        name: 'Charles Mon',
        designation: 'Product Manager - RocketGate',
        profilePic: '/img/profile_icon.svg'
    },
    testimonial: "I have worked with the BikeCloud team on a few projects in the past and their JUMP system and approach...is the best in the business."
}



const Services = () => {
    return (
        <div className="flex flex-col items-center justify-center py-2">
            <Head>
                <title>Bike Cloud</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-full" style={{ height: '28rem' }}>

                <Header
                    title={title}
                    description={description}
                    bgContainer="bg-bottom"
                    headerContainer="mt-3"
                />
            </div>

            <main className='page-container'>
                <ServiceDetails arr={ServiceJSON} />
                <Testimonial userDetails={TestimonialJSON.userDetails} userTestimonial={TestimonialJSON.testimonial} />
                <KeyValues />

            </main>
            <Footer />
        </div>
    )
}


export default Services