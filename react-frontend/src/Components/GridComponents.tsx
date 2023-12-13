import date from './date'
export default function GridComponents({ allPosts }: any) {
    return (
        <>
            <div className="py-6 px-5">
                <div>
                    <img src="/images/illustration-4.png" alt="Blog Post illustration" className="rounded-xl" />
                </div>

                <div className="mt-8 flex flex-col justify-between">
                    <header>
                        <div className="space-x-2">
                            <a href={`/?category=${allPosts.category.slug}`}
                                className="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                                style={{ fontSize: '10px' }}>{allPosts.category.name}</a>

                        </div>

                        <div className="mt-4">
                            <h1 className="text-3xl whitespace-nowrap truncate" >
                                <a href={`/post/${allPosts.slug}`}>
                                    {allPosts.title}
                                </a>
                            </h1>

                            <span className="mt-2 block text-gray-400 text-xs">
                                Published <time> {date(allPosts.created_at)} </time>
                            </span>
                        </div>
                    </header>

                    <div className="text-sm mt-4" >
                        <p className="mt-4">
                            {allPosts.excerpt}
                        </p>
                    </div>

                    <footer className="flex justify-between items-center mt-8">
                        <div className="flex items-center text-sm">
                            <img src="/images/lary-avatar.svg" alt="Lary avatar" />
                            <div className="ml-3">

                                <h5 className="font-bold"><a href={`/?author=${allPosts.author.username}`}> {allPosts.author.name} </a></h5>

                            </div>
                        </div>

                        <div>
                            <a href={`/post/${allPosts.slug}`}
                                className="transition-colors inline-block text-center duration-300 text-xs whitespace-nowrap font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-10"
                            >Read More</a>
                        </div>
                    </footer>
                </div>
            </div>

        </>
    )
}
