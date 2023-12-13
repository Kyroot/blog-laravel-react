import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function HeaderAndFooter({ ...props }: any) {

    const isLoggedIn = useSelector((state: any) => state.auth.isAuthenticated)
    const role = useSelector((state: any) => state.auth.role)
// console.log(role)
    return (
        <>
            <section className="px-6 py-8">
                <nav className="md:flex md:justify-between md:items-center">
                    <div>
                        <a href="/">
                            <img src="/images/logo.svg" alt="Laracasts Logo" width="165" height="16" />
                        </a>
                    </div>
                    <div className="mt-8 md:mt-0 flex items-center">


                        {/* <button className="text-xs font-bold uppercase">Welcome, Admin</button> */}

                        {isLoggedIn ? (
                            <>
                            {role ? (<>
                                <a className="text-xs font-bold uppercase mr-2" href="/admin/dashboard"> Admin </a>
                            </>): <></>}
                                <a className="text-xs font-bold uppercase" href="/logout"> Log out</a>
                            </>
                        ) : (
                            <>
                                <a href="/register" className="text-xs font-bold uppercase">register</a>
                                <a href="/login" className="text-xs ml-3 font-bold uppercase">log in</a>
                            </>
                        )}

                        <div className="mt-8 md:mt-0">
                            {/* <a href="/register" className="text-xs font-bold uppercase">register</a> */}

                        </div>
                        <a href="#newsletter"
                            className="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-5">
                            Subscribe for Updates
                        </a>
                    </div>
                </nav>
                {props.children}
                <footer id="newsletter"
                    className="bg-gray-100 border border-black border-opacity-5 rounded-xl text-center py-16 px-10 mt-16">
                    <img src="/images/lary-newsletter-icon.svg" alt="" className="mx-auto -mb-6" style={{ width: '145px' }} />
                    <h5 className="text-3xl">Stay in touch with the latest posts</h5>
                    <p className="text-sm mt-3">Promise to keep the inbox clean. No bugs.</p>

                    <div className="mt-10">
                        <div className="relative inline-block mx-auto lg:bg-gray-200 rounded-full">

                            <input type="text" />
                        </div>
                        <div>
                            <span> </span>
                        </div>
                    </div>

                </footer>
            </section>

        </>
    )
}
