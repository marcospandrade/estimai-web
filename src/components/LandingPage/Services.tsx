import Image from 'next/image'

export function Services() {
  return (
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
                  then thaws every summer, and that process will continue
                  whatever happens.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
