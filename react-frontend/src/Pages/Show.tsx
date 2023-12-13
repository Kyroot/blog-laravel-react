import React from "react";
import HeaderAndFooter from "../Components/HeaderAndFooter";
import date from '../Components/date';
import Comments from "../Components/Comments";
import { useGetSinglePostQuery } from "../redux/postAPIservice";
import {useParams} from "react-router-dom";

export default function Show(){

    const {slug} = useParams();
    const {isLoading, data: post} = useGetSinglePostQuery(slug)

    if(isLoading){
        return (
            <div className="loading-pane">
              <h2 className="loader">🌀</h2>
            </div>
          );
    }

    return(
    <HeaderAndFooter>
    <main className="max-w-6xl mx-auto mt-10 lg:mt-20 space-y-6">
        <article className="max-w-4xl mx-auto lg:grid lg:grid-cols-12 gap-x-10">
            <div className="col-span-4 lg:text-center lg:pt-14 mb-10">
                <img src="" alt="" className="rounded-xl" />

                <p className="mt-4 block text-gray-400 text-xs">
                    Published <time> { date(post.post.created_at) } </time>
                </p>

                <div className="flex items-center lg:justify-center text-sm mt-4">
                    <img src="/images/lary-avatar.svg" alt="Lary avatar" />
                    <div className="ml-3 text-left">
                        <h5 className="font-bold"><a
                                href={`/?author=${post.post.author.username}`}>{post.post.author.name}</a></h5>
                    </div>
                </div>
            </div>

            <div className="col-span-8">
                <div className="hidden lg:flex justify-between mb-6">
                    <a href="/"
                        className="transition-colors duration-300 relative inline-flex items-center text-lg hover:text-blue-500">
                        <svg width="22" height="22" viewBox="0 0 22 22" className="mr-2">
                            <g fill="none" fillRule="evenodd">
                                <path stroke="#000" strokeOpacity=".012" strokeWidth=".5" d="M21 1v20.16H.84V1z">
                                </path>
                                <path className="fill-current"
                                    d="M13.854 7.224l-3.847 3.856 3.847 3.856-1.184 1.184-5.04-5.04 5.04-5.04z">
                                </path>
                            </g>
                        </svg>

                        Back to Posts
                    </a>

                    <div className="space-x-2">

                    </div>
                </div>

                <h1 className="font-bold text-3xl lg:text-4xl mb-10">
                {post.post.title}
                </h1>

                <div className="space-y-4 lg:text-lg leading-loose">
                {post.post.body}
                </div>
            </div>
            <section className="col-span-8 col-start-5 mt-5 space-y-2">
                <Comments comments = {post.comments} />
            </section>
        </article>
    </main>
    </HeaderAndFooter>
    )
}
