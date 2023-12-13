import FeaturedCard from "../Components/FeaturedCard"
import GridComponents from "../Components/GridComponents"
import Pagination from "../Pages/Profile/Partials/Pagination";

export default function GridLayout({ posts }: any) {

    const filteredPosts = posts.data.slice(1)

    return (
        <>
            <main className="max-w-6xl mx-auto mt-6 lg:mt-20 space-y-6">

                <FeaturedCard key={posts.data[0].id} firstPost={posts.data[0]} />
                <div className="lg:grid lg:grid-cols-6">
                    {
                        filteredPosts.map((singlePost: any, index: any) => {
                            return index < 2 ? (

                                <article key={singlePost.id} className="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl col-span-3">

                                    <GridComponents allPosts={singlePost} />
                                </article>
                            ) : (
                                <article key={singlePost.id} className="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl col-span-2">

                                    <GridComponents allPosts={singlePost} />
                                </article>
                            )
                        }
                        )}
                </div>
                <Pagination props={posts} />
            </main >
        </>

    )
}
