import React from 'react'

const FooterAccordion = () => {
  return (
  <section className='relative w-screen bg-grey-500 mx-auto right-5 md:right-12'>
    <section className="lg:hidden join join-vertical w-full">
      <div className="collapse collapse-arrow join-item">
        <input type='checkbox' name="my-accordion-4"/>
        <div className="collapse-title px-5 md:px-12 text-base font-bold">About</div>
        <div className="collapse-content px-0">
          <ul className='bg-gray-100 py-4 px-5 md:px-12 flex flex-col text-left gap-3 text-sm text-gray-900'>
            <li>Brand</li>
            <li>History</li>
            <li>Award</li>
            <li>Business Information</li>
            <li>Social Responsibilities</li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item">
        <input type='checkbox' name="my-accordion-4"/>
        <div className="collapse-title px-5 md:px-12 text-base font-bold">Product</div>
        <div className="collapse-content px-0">
          <ul className='bg-gray-100 py-4 px-5 md:px-12 flex flex-col text-left gap-3 text-sm text-gray-900'>
            <li>Food Container</li>
            <li>Beverageware</li>
            <li>Cookware</li>
            <li>Small Appliance</li>
            <li>E-Catalog</li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item">
        <input type='checkbox' name="my-accordion-4"/>
        <div className="collapse-title px-5 md:px-12 text-base font-bold">Innovation</div>
        <div className="collapse-content px-0">
          <ul className='bg-gray-100 py-4 px-5 md:px-12 flex flex-col text-left gap-3 text-sm text-gray-900'>
            <li>LL Labs</li>
            <li>Design Center</li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item">
        <input type='checkbox' name="my-accordion-4"/>
        <div className="collapse-title px-5 md:px-12 text-base font-bold">Story</div>
        <div className="collapse-content px-0">
          <ul className='bg-gray-100 py-4 px-5 md:px-12 flex flex-col text-left gap-3 text-sm text-gray-900'>
            <li>News</li>
            <li>Lounge</li>
            <li>Now</li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item">
        <input type='checkbox' name="my-accordion-4"/>
        <div className="collapse-title px-5 md:px-12 text-base font-bold">ESG</div>
        <div className="collapse-content px-0">
          <ul className='bg-gray-100 py-4 px-5 md:px-12 flex flex-col text-left gap-3 text-sm text-gray-900'>
            <li>Environment</li>
            <li>Social</li>
            <li>Governance</li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item">
        <input type='checkbox' name="my-accordion-4"/>
        <div className="collapse-title px-5 md:px-12 text-base font-bold">Career</div>
        <div className="collapse-content px-0">
          <ul className='bg-gray-100 py-4 px-5 md:px-12 flex flex-col text-left gap-3 text-sm text-gray-900'>
            <li>Company Culture</li>
            <li>Recruit</li>
          </ul>
        </div>
      </div>
    </section>
  </section>
  )
}

export default FooterAccordion
