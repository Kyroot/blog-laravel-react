import React from "react"
import date from './date'

export default function FeaturedCard({firstPost}:any) {

    return (
        <>
            <article
                className="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
                <div className="py-6 px-5 lg:flex">
                    <div className="flex-1 lg:mr-8">
                        <img src="/images/illustration-1.png" alt="Blog Post illustration" className="rounded-xl" />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                        <header className="mt-8 lg:mt-0">
                            <div className="space-x-2">
                                <a href={`/?category=${firstPost.category.slug}`}
                                    className="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                                    style={{ fontSize: '10px' }}>{firstPost.category.name}</a>

                                <a href="#"
                                    className="px-3 py-1 border border-red-300 rounded-full text-red-300 text-xs uppercase font-semibold"
                                    style={{ fontSize: '10px' }}>Updates</a>
                            </div>

                            <div className="mt-4">
                                <h1 className="text-3xl">
                                    <a href={`/post/${firstPost.slug}`}>
                                        {firstPost.title}
                                    </a>
                                </h1>

                                <span className="mt-2 block text-gray-400 text-xs">
                                    Published <time> { date(firstPost.created_at)} </time>
                                </span>
                            </div>
                        </header>

                        <div className="text-sm mt-2 space-y-4">

                            <p className="mt-4">
                                {firstPost.excerpt}
                            </p>
                        </div>

                        <footer className="flex justify-between items-center mt-8">
                            <div className="flex items-center text-sm">
                                <img src="/images/lary-avatar.svg" alt="Lary avatar" />
                                <div className="ml-3">
                                    <h5 className="font-bold"><a href={`/?author=${firstPost.author.username}`}> {firstPost.author.name}</a></h5>
                                </div>
                            </div>

                            <div className="hidden lg:block">
                                <a href={`/post/${firstPost.slug}`}
                                    className="transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8"
                                >Read More</a>
                            </div>
                        </footer>
                    </div>
                </div>
            </article>

        </>
    )
}
