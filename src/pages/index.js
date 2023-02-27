import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, LockClosedIcon, DocumentTextIcon, LightBulbIcon } from '@heroicons/react/24/outline'

import * as React from "react"

import companyLogo from "../images/logo-volla.png"
import heroVisual from "../images/hero-visual.jpg"

const navigation = [
  { name: 'About Us', href: '#about-us' },
  { name: 'Services', href: '#services' },
]

const services = [
  {
    name: "Security",
    items: [
      "Hardware Security Modules (HSM)",
      "Trusted Execution Environment (TEE)",
      "Hardware wallets",
      "Multi-Signature wallets",
      "Air-gapped systems",
      "Audits",
    ],
    icon: <LockClosedIcon className="h-6 w-6 text-white" />
  },
  {
    name: "Smart Contracts",
    items: [
      "Smart contract design and development",
      "End-to-end validation and testing",
      "Secure, automated deployment",
    ],
    icon: <DocumentTextIcon className="h-6 w-6 text-white" />
  },
  {
    name: "Technical Advisory",
    items: [
      "Technical strategy",
      "Project architecture and design",
      "Technical due diligence",
      "Team training",
    ],
    icon: <LightBulbIcon className="h-6 w-6 text-white" />
  }
]

const IndexPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main>
      {/* Hero section */}
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            {/* Triangular cover  */}
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            {/* Nav Menu */}
            <div className="relative px-6 pt-6 lg:pl-8 lg:pr-0">
              {/* Desktop Nav */}
              <nav className="flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Volla Solutions</span>
                  <img
                    alt="Volla Solutions"
                    className="h-10 w-auto"
                    src={companyLogo}
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="hidden lg:ml-12 lg:block lg:space-x-14">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>

              {/* Mobile Nav */}
              <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                  <div className="flex flex-row-reverse items-center justify-between">
                    <button
                      type="button"
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Volla Solutions</span>
                      <img
                        className="h-10"
                        src={companyLogo}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="mt-6 space-y-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Dialog.Panel>
              </Dialog>
            </div>

            {/* Headline */}
            <div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Ambitious ideas
                  <div class="sm:text-5xl mt-2">Reliably delivered<span class="text-red-1000">.</span></div>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Volla's world-class engineering team delivers the technology backbone
                  of <span className="text-red-1000 font-bold">award winning</span> products and services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Visual */}
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={heroVisual}
            alt=""
          />
        </div>
      </div>

      {/* About Us */}
      <div className="bg-red-1000 py-24 px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl" id="about-us">About Us</h2>
          <p className="mt-6 text-lg leading-8">
            Volla is a leading software engineering firm with expertise in delivering advanced technology solutions for Web2 and Web3 projects.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="bg-white">
        {/* Services Header */}
        <div className="relative pb-32">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
              alt=""
            />
            <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" aria-hidden="true"></div>
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl" id="services">Services</h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Drawing from decades of experience across diverse industries, Volla provides best&#8209;in&#8209;class engineering and advisory services for technical solutions delivery.
            </p>
          </div>
        </div>

        {/* Services Overlapping cards */}
        <section className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8" aria-labelledby="contact-heading">
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            {services.map((service) => (
              <div className="flex flex-col rounded-2xl bg-white shadow-xl">
                <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                  <div
                    className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-red-1000 p-5 shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{service.name}</h3>
                  <ul className="list-disc mt-4 text-base text-gray-500">
                    {service.items.map(item => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-s leading-5 text-gray-500">
              &copy; 2023 Volla Solutions Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Volla Solutions</title>
