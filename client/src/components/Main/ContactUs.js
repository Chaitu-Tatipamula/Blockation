import React, { useState } from 'react'
import Hero from '../layout/Hero'
import emailjs from '@emailjs/browser'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    emailjs.send(
      'service_p9sv0sp', // Replace with your EmailJS service ID
      'template_75okfsi', // Replace with your EmailJS template ID
      {
        to_email: 'chaitutatipamula023@gmail.com',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message
      },
      '5Y43AJzhy-ufTW_Cs' // Replace with your EmailJS public key
    )
    .then((result) => {
      alert('Message sent successfully!')
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      })
    })
    .catch((error) => {
      alert('Failed to send message. Please try again.')
    })
  }

  return (
    <>
    <Hero text="Contact Us"/>
    <section id="contact" class="ud-contact relative py-20 md:py-[120px]">
      <div
        class="absolute top-0 left-0 z-[-1] h-1/2 w-full bg-[#f3f4fe] lg:h-[45%] xl:h-1/2"
      ></div>
      <div class="container px-4">
        <div class="-mx-4 flex flex-wrap items-center">
          <div class="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div class="ud-contact-content-wrapper">
              <div class="ud-contact-title mb-12 lg:mb-[150px]">
                <span
                  class="font-headingFont mb-5 text-base font-semibold text-dark"
                >
                  CONTACT US
                </span>
                <h2 class="text-[35px] font-semibold">
                  Let's talk about <br />
                  Love to hear from you!
                </h2>
              </div>
              <div class="mb-12 flex flex-wrap justify-between lg:mb-0">
                <div class="mb-8 flex w-[330px] max-w-full">
                  <div class="mr-6 text-[32px] text-primary">
                    <svg
                      width="29"
                      height="35"
                      viewBox="0 0 29 35"
                      class="fill-current"
                    >
                      <path
                        d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z"
                      />
                      <path
                        d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 class="mb-6 text-lg font-semibold">Our Location</h5>
                    <p class="text-base text-body-color">
                      401 Broadway, 24th Floor, Orchard Cloud View, London
                    </p>
                  </div>
                </div>
                <div class="mb-8 flex w-[330px] max-w-full">
                  <div class="mr-6 text-[32px] text-primary">
                    <svg
                      width="34"
                      height="25"
                      viewBox="0 0 34 25"
                      class="fill-current"
                    >
                      <path
                        d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 class="mb-6 text-lg font-semibold">How Can We Help?</h5>
                    <p class="text-base text-body-color">info@yourdomain.com</p>
                    <p class="text-base text-body-color">
                      contact@yourdomain.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div
              class="wow fadeInUp rounded-lg bg-white py-10 px-8 shadow-testimonial sm:py-12 sm:px-10 md:p-[60px] lg:p-10 lg:py-12 lg:px-10 2xl:p-[60px]"
              data-wow-delay=".2s"
            >
              <h3 class="mb-8 text-2xl font-semibold md:text-[26px]">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div class="mb-6">
                  <label for="fullName" class="block text-xs text-dark">Full Name*</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Adam Gelius"
                    class="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label for="email" class="block text-xs text-dark">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@yourmail.com"
                    class="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label for="phone" class="block text-xs text-dark">Phone*</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+885 1254 5211 552"
                    class="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label for="message" class="block text-xs text-dark">Message*</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="1"
                    placeholder="type your message here"
                    class="w-full resize-none border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none"
                    required
                  ></textarea>
                </div>
                <div class="mb-0">
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactUs