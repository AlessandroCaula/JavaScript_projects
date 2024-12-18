import React from 'react'

// Creating a reusable component for the images, cause in this sections there are a lot of images to use.
const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img
      src={src}
    />
  </div>
)

const Contact = () => {
  return (
    <div
      id="contact"
      className='my-20 min-h-96 w-screen px-10'
    >
      <div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden'>
        {/* Add the images to the left side of the contact section */}
        <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block ls:left-20 lg:w-96'>
          <ImageClipBox
            src='img/contact-1.webp'
            clipClass='contact-clip-path-1'
          />
          <ImageClipBox
            src='img/contact-2.webp'
            clipClass='contact-clip-path-2 lg:translate-y-40 translate-y-60'
          />
        </div>

        <div className='absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'>
          <ImageClipBox
            src='img/swordman-partial.webp'
            clipClass='absolute md:scale-125'
          />
        </div>
      </div>
    </div>
  )
}

export default Contact