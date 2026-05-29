import React from 'react'

const Footer = () => {
  return (
    <>
         <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-600 bg-gradient-to-r from-white via-green-200/60 to-white mt-40">
                <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
                    <a href="#">
                       <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
                    </a>
                    <div>
                        <p className="text-slate-800 font-semibold">Product</p>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/" className="hover:text-green-600 transition">Home</a></li>
                            <li><a href="/" className="hover:text-green-600 transition">Support</a></li>
                            <li><a href="/" className="hover:text-green-600 transition">Pricing</a></li>
                            <li><a href="/" className="hover:text-green-600 transition">Affiliate</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-slate-800 font-semibold">Resources</p>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/" className="hover:text-green-600 transition">Company</a></li>
                            <li><a href="/" className="hover:text-green-600 transition">Blogs</a></li>
                            <li><a href="/" className="hover:text-green-600 transition">Community</a></li>
                            <li><a href="/" className="hover:text-green-600 transition">Careers<span className="text-xs text-white bg-green-600 rounded-md ml-2 px-2 py-1">We’re hiring!</span></a></li>
                            <li><a href="/" className="hover:text-green-600 transition">About</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-slate-800 font-semibold">Legal</p>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/" className="hover:text-green-600 transition">Privacy</a></li>
                            <li><a href="/" className="hover:text-green-600 transition">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
                    <p className="max-w-60">Making every customer feel valued—no matter the size of your audience.</p>
                    <div className="flex items-center gap-4 mt-3">
                        <a href="https://leetcode.com/u/01aashish/" target="_blank" rel="noreferrer">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leetcode size-5 hover:text-green-500" aria-hidden="true">
                                <path d="M13.483 0a1.374 1.374 0 0 0-.961.401L1.18 11.743a1.374 1.374 0 0 0 0 1.943l11.342 11.341a1.374 1.374 0 0 0 1.943 0l1.59-1.59a1.374 1.374 0 0 0 0-1.943l-8.43-8.43 8.43-8.43a1.374 1.374 0 0 0 0-1.943l-1.59-1.59A1.374 1.374 0 0 0 13.483 0z"/>
                             </svg>
                        </a>

                        <a href="https://www.linkedin.com/in/ashish-joshi-90577a321/" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin size-5 hover:text-green-500" aria-hidden="true">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect width="4" height="12" x="2" y="9"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>

                        <a href="https://github.com/AshishJoshi09" target="_blank" rel="noreferrer">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github size-5 hover:text-green-500" aria-hidden="true" >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.28-.36 6.73-1.6 6.73-7.12A5.56 5.56 0 0 0 19.5 3.77 5.07 5.07 0 0 0 19.41 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 4.59 1 4.59 1A5.07 5.07 0 0 0 4.5 3.77 5.56 5.56 0 0 0 3.27 7.68c0 5.52 3.45 6.76 6.73 7.12a4.8 4.8 0 0 0-1 3.2v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </a>
                    </div>
                    <p className="mt-3 text-center">© 2025 Resume Builder</p>
                </div>
            </footer>


    <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
    </>
  )
}

export default Footer