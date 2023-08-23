import Image from 'next/image'

export function Featured() {
  return (
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
                started faster. You can change the text and images and youre
                good to go.
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
}
