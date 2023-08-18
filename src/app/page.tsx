'use client'

import { getUser } from '@/lib/auth'

// const user = getUser()

import Layout from '../components/Layout'
import Image from 'next/image'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Hero />
    <Services />
    <Featured />
    <Team />
    <Finisher />
    <Contact />
  </Layout>
)

export default IndexPage

/// Page Sections
const Hero = () => (
  <div
    className="relative flex content-center items-center justify-center pb-32 pt-16"
    style={{
      minHeight: '75vh',
    }}
  >
    <div
      className="absolute top-0 h-full w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
      }}
    >
      <span
        id="blackOverlay"
        className="absolute h-full w-full bg-black opacity-75"
      ></span>
    </div>
    <div className="container relative mx-auto">
      <div className="flex flex-wrap items-center">
        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-6/12">
          <div className="pr-12">
            <h1 className="text-5xl font-semibold text-white">
              Your story starts with us.
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              This is a simple example of a Landing Page you can build using
              Tailwind Starter Kit. It features multiple CSS components based on
              the Tailwindcss design system.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      className="pointer-events-none absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden"
      style={{ height: '70px' }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          className="fill-current text-gray-300"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
  </div>
)

const Services = () => (
  <section className="-mt-24 bg-gray-300 pb-20">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <div className="w-full px-4 pt-6 text-center md:w-4/12 lg:pt-12">
          <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
            <div className="flex-auto px-4 py-5">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-400 p-3 text-center text-white shadow-lg">
                <i className="fas fa-award"></i>
              </div>
              <h6 className="text-xl font-semibold">Awarded Agency</h6>
              <p className="mb-4 mt-2 text-gray-600">
                Divide details about your product or agency work into parts. A
                paragraph describing a feature will be enough.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 text-center md:w-4/12">
          <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
            <div className="flex-auto px-4 py-5">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-400 p-3 text-center text-white shadow-lg">
                <i className="fas fa-retweet"></i>
              </div>
              <h6 className="text-xl font-semibold">Free Revisions</h6>
              <p className="mb-4 mt-2 text-gray-600">
                Keep you user engaged by providing meaningful information.
                Remember that by this time, the user is curious.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 pt-6 text-center md:w-4/12">
          <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
            <div className="flex-auto px-4 py-5">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-400 p-3 text-center text-white shadow-lg">
                <i className="fas fa-fingerprint"></i>
              </div>
              <h6 className="text-xl font-semibold">Verified Company</h6>
              <p className="mb-4 mt-2 text-gray-600">
                Write a few lines about each one. A paragraph describing a
                feature will be enough. Keep you user engaged!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 flex flex-wrap items-center">
        <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 p-3 text-center text-gray-600 shadow-lg">
            <i className="fas fa-user-friends text-xl"></i>
          </div>
          <h3 className="mb-2 text-3xl font-semibold leading-normal">
            Working with us is a pleasure
          </h3>
          <p className="mb-4 mt-4 text-lg font-light leading-relaxed text-gray-700">
            Dont let your uses guess by attaching tooltips and popoves to any
            element. Just make sure you enable them first via JavaScript.
          </p>
          <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-gray-700">
            The kit comes with three pre-built pages to help you get started
            faster. You can change the text and images and youre good to go.
            Just make sure you enable them first via JavaScript.
          </p>
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
            className="mt-8 font-bold text-gray-800"
          >
            Check Tailwind Starter Kit!
          </a>
        </div>

        <div className="ml-auto mr-auto w-full px-4 md:w-4/12">
          <div className="relative mb-6 flex w-full min-w-0  flex-col break-words rounded-lg bg-pink-600 shadow-lg">
            <Image
              alt="..."
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
              className="w-full rounded-t-lg align-middle"
              width={200}
              height={200}
            />
            <blockquote className="relative mb-4 p-8">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 block w-full"
                style={{
                  height: '95px',
                  top: '-94px',
                }}
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  className="fill-current text-pink-600"
                ></polygon>
              </svg>
              <h4 className="text-xl font-bold text-white">
                Top Notch Services
              </h4>
              <p className="text-md mt-2 font-light text-white">
                The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Featured = () => (
  <section className="relative py-20">
    <div
      className="pointer-events-none absolute bottom-auto left-0 right-0 top-0 -mt-20 w-full overflow-hidden"
      style={{ height: '80px' }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          className="fill-current text-white"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>

    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center">
        <div className="ml-auto mr-auto w-full px-4 md:w-4/12">
          <Image
            alt="..."
            className="max-w-full rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            width={200}
            height={200}
          />
        </div>
        <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
          <div className="md:pr-12">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-pink-300 p-3 text-center text-pink-600 shadow-lg">
              <i className="fas fa-rocket text-xl"></i>
            </div>
            <h3 className="text-3xl font-semibold">A growing company</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              The extension comes with three pre-built pages to help you get
              started faster. You can change the text and images and youre good
              to go.
            </p>
            <ul className="mt-6 list-none">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="mr-3 inline-block rounded-full bg-pink-200 px-2 py-1 text-xs font-semibold uppercase text-pink-600">
                      <i className="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">
                      Carefully crafted components
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="mr-3 inline-block rounded-full bg-pink-200 px-2 py-1 text-xs font-semibold uppercase text-pink-600">
                      <i className="fab fa-html5"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Amazing page examples</h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="mr-3 inline-block rounded-full bg-pink-200 px-2 py-1 text-xs font-semibold uppercase text-pink-600">
                      <i className="far fa-paper-plane"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Dynamic components</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Team = () => (
  <section className="pb-48 pt-20">
    <div className="container mx-auto px-4">
      <div className="mb-24 flex flex-wrap justify-center text-center">
        <div className="w-full px-4 lg:w-6/12">
          <h2 className="text-4xl font-semibold">Here are our heroes</h2>
          <p className="m-4 text-lg leading-relaxed text-gray-600">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
          <div className="px-6">
            <Image
              alt="..."
              src={require('../assets/img/team-1-800x800.jpg')}
              className="mx-auto max-w-full rounded-full shadow-lg"
              style={{ maxWidth: '120px' }}
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Ryan Tompson</h5>
              <p className="mt-1 text-sm font-semibold uppercase text-gray-500">
                Web Developer
              </p>
              <div className="mt-6">
                <button
                  className="mb-1 mr-1 h-8 w-8 rounded-full bg-blue-400 text-white outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="mb-1 mr-1 h-8 w-8 rounded-full bg-blue-600 text-white outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button
                  className="mb-1 mr-1 h-8 w-8 rounded-full bg-pink-500 text-white outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
          <div className="px-6">
            <Image
              alt="..."
              src={require('../assets/img/team-2-800x800.jpg')}
              className="mx-auto max-w-full rounded-full shadow-lg"
              style={{ maxWidth: '120px' }}
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Romina Hadid</h5>
              <p className="mt-1 text-sm font-semibold uppercase text-gray-500">
                Marketing Specialist
              </p>
              <div className="mt-6">
                <button
                  className="mb-1 mr-1 h-8 w-8 rounded-full bg-red-600 text-white outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-google"></i>
                </button>
                <button
                  className="mb-1 mr-1 h-8 w-8 rounded-full bg-blue-600 text-white outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
          <div className="px-6">
            <Image
              alt="..."
              src={require('../assets/img/team-3-800x800.jpg')}
              className="mx-auto max-w-full rounded-full shadow-lg"
              style={{ maxWidth: '120px' }}
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Alexa Smith</h5>
              <p className="mt-1 text-sm font-semibold uppercase text-gray-500">
                UI/UX Designer
              </p>
              <div className="mt-6">
                <button
                  className="mb-1 mr-1 h-8 w-8 rounded-full bg-red-600 text-white outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-google"></i>
                </button>
                <button
                  className="mb-1 mr-1 h-8 w-8 rounded-full bg-blue-400 text-white outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="mb-1 mr-1 h-8 w-8 rounded-full bg-gray-800 text-white outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-instagram"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
          <div className="px-6">
            <Image
              alt="..."
              src={require('../assets/img/team-4-470x470.png')}
              className="mx-auto max-w-full rounded-full shadow-lg"
              style={{ maxWidth: '120px' }}
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Jenna Kardi</h5>
              <p className="mt-1 text-sm font-semibold uppercase text-gray-500">
                Founder and CEO
              </p>
              <div className="mt-6">
                <button
                  className="mb-1 mr-1 h-8 w-8 rounded-full bg-pink-500 text-white outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="mb-1 mr-1 h-8 w-8 rounded-full bg-red-600 text-white outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-google"></i>
                </button>
                <button
                  className="mb-1 mr-1 h-8 w-8 rounded-full bg-blue-400 text-white outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="mb-1 mr-1 h-8 w-8 rounded-full bg-gray-800 text-white outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-instagram"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Finisher = () => (
  <section className="relative block bg-gray-900 pb-20">
    <div
      className="pointer-events-none absolute bottom-auto left-0 right-0 top-0 -mt-20 w-full overflow-hidden"
      style={{ height: '80px' }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          className="fill-current text-gray-900"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>

    <div className="container mx-auto px-4 lg:pb-64 lg:pt-24">
      <div className="flex flex-wrap justify-center text-center">
        <div className="w-full px-4 lg:w-6/12">
          <h2 className="text-4xl font-semibold text-white">Build something</h2>
          <p className="mb-4 mt-4 text-lg leading-relaxed text-gray-500">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </p>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap justify-center">
        <div className="w-full px-4 text-center lg:w-3/12">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-gray-900 shadow-lg">
            <i className="fas fa-medal text-xl"></i>
          </div>
          <h6 className="mt-5 text-xl font-semibold text-white">
            Excelent Services
          </h6>
          <p className="mb-4 mt-2 text-gray-500">
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
        </div>
        <div className="w-full px-4 text-center lg:w-3/12">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-gray-900 shadow-lg">
            <i className="fas fa-poll text-xl"></i>
          </div>
          <h5 className="mt-5 text-xl font-semibold text-white">
            Grow your market
          </h5>
          <p className="mb-4 mt-2 text-gray-500">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
        </div>
        <div className="w-full px-4 text-center lg:w-3/12">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-gray-900 shadow-lg">
            <i className="fas fa-lightbulb text-xl"></i>
          </div>
          <h5 className="mt-5 text-xl font-semibold text-white">Launch time</h5>
          <p className="mb-4 mt-2 text-gray-500">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
        </div>
      </div>
    </div>
  </section>
)

const Contact = () => (
  <section className="relative block bg-gray-900 py-24 lg:pt-0">
    <div className="container mx-auto px-4">
      <div className="-mt-48 flex flex-wrap justify-center lg:-mt-64">
        <div className="w-full px-4 lg:w-6/12">
          <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-gray-300 shadow-lg">
            <div className="flex-auto p-5 lg:p-10">
              <h4 className="text-2xl font-semibold">Want to work with us?</h4>
              <p className="mb-4 mt-1 leading-relaxed text-gray-600">
                Complete this form and we will get back to you in 24 hours.
              </p>
              <div className="relative mb-3 mt-8 w-full">
                <label
                  className="mb-2 block text-xs font-bold uppercase text-gray-700"
                  htmlFor="full-name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-700 placeholder-gray-400 shadow focus:outline-none focus:ring"
                  placeholder="Full Name"
                  style={{ transition: 'all .15s ease' }}
                />
              </div>

              <div className="relative mb-3 w-full">
                <label
                  className="mb-2 block text-xs font-bold uppercase text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-700 placeholder-gray-400 shadow focus:outline-none focus:ring"
                  placeholder="Email"
                  style={{ transition: 'all .15s ease' }}
                />
              </div>

              <div className="relative mb-3 w-full">
                <label
                  className="mb-2 block text-xs font-bold uppercase text-gray-700"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  cols={80}
                  className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-700 placeholder-gray-400 shadow focus:outline-none focus:ring"
                  placeholder="Type a message..."
                />
              </div>
              <div className="mt-6 text-center">
                <button
                  className="mb-1 mr-1 rounded bg-gray-900 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-gray-700"
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
