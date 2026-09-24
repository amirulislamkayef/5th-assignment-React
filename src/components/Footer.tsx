const Footer = () => {
    
  return (
    <footer className="border-t border-slate-100 bg-white">

      <div className="mx-auto max-w-300 px-6 py-16">

        <div className="flex justify-between gap-12 md:grid-cols-4">

          <div className="md:col-span-2">

            <div className="flex items-center gap-2">
              <img src="/src/assets/logo-text.png" alt="" />
            </div>

            <p className="mt-4 max-w-98 text-[13px] leading-5 text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-6 flex gap-5 text-[13px] font-medium text-slate-600">
              <a href="#" className="hover:text-slate-900">
                GitHub
              </a>

              <a href="#" className="hover:text-slate-900">
                Twitter
              </a>

              <a href="#" className="hover:text-slate-900">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[13px] font-bold text-slate-900">
              PRODUCT
            </h3>

            <ul className="mt-4 space-y-2.5 text-[13px] text-slate-500">
              <li>
                <a href="#" className="hover:text-slate-900">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-900">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-900">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-bold text-slate-900">
              COMPANY
            </h3>

            <ul className="mt-4 space-y-2.5 text-[13px] text-slate-500">
              <li>
                <a href="#" className="hover:text-slate-900">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-900">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-bold text-slate-900">
              LEGAL
            </h3>

            <ul className="mt-4 space-y-2.5 text-[13px] text-slate-500">
              <li>
                <a href="#" className="hover:text-slate-900">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-14 border-t border-slate-100 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-[12px] text-slate-400 md:flex-row">

            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-700">
                Privacy
              </a>

              <a href="#" className="hover:text-slate-700">
                Terms
              </a>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;