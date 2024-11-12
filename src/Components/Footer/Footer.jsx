
import React from 'react'

const Footer = () => {
  return (
    <footer className=" shadow m-4 mx-0 w-full   footer-main-nav">
    <div className="w-[80%] mx-auto max-w-screen-xl p-4  md:flex md:items-center md:justify-between">
      <span className="span-footer">© 2024 <a href="https://www.nestle.in/" className="hover:underline">Nestlé
      </a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium ul-class-main-footer  sm:mt-0 w-[70%] gap-5">
        <li>
            <a target='_blank' href="https://www.nestle.in/aboutus/allaboutnestl%C3%A9" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a target='_blank' href="https://www.nestle.in/info" className="hover:underline me-4 md:me-6">Contact us</a>
        </li>
        <li>
            <a target='_blank' href="https://www.nestle.com/about/overview/global-addresses" className="hover:underline me-4 md:me-6">Change country</a>
        </li>
        <li>
            <a target='_blank' href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=638548066765544254.NDdhMGJmZTUtM2IxNi00OWNmLWEyZmYtNGQ1Zjc2ODIzZDAxNzg5ZDg3ZTQtYTE0OS00ZmEzLTk4YzAtY2ZmZGExOWI0MjNh&ui_locales=en-GB&mkt=en-GB&client-request-id=6f2b9abb-5c9b-40a4-8a55-609819574bbe&state=qJqGwD-j1JpyjWQ_a4q0DTkM083QhN5HLrtrRGf9_tOEZGf7WNxvkBq79HrLYAFQMf7Znto-a1ko4pK_EvAKI5Yphuv9Aob2F4XDKNjKFBXQEqjJhkx-SbKObxJlFd72LCWeZrwbffej2eBUIB4TODpenSszeQJn2Y_cv6FFUUcvRL3EVYf48D3GTc3WqkyXCFRM3X3-l84eHp_zqIvT9AriooeE_V2wUSdUKTqBV8jU2cNZGw_eOz5hYY35CK9O2umkod4frLqAx3NwRC0Gow&x-client-SKU=ID_NET8_0&x-client-ver=7.3.1.0&sso_reload=true" className="hover:underline">Employee Login</a>
        </li>
        <li>
            <a target='_blank' href="https://www.nestle.in/info/copyright" className="hover:underline">Copyright</a>
        </li>
        <li>
            <a target='_blank' href="https://www.nestle.in/info/faqs" className="hover:underline">FAQ's</a>
        </li>
        <li>
            <a target='_blank' href="https://www.nestle.in/info/sitemap" className="hover:underline">Site map</a>
        </li>
        <li>
            <a target='_blank' href="https://www.nestle.in/info/termsofuse" className="hover:underline">Terms of Use</a>
        </li>
    </ul>
    </div>
</footer>
  )
}

export default Footer




