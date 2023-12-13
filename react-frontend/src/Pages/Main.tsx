
import Header from "./Profile/Partials/Header";
import GridLayout from "../Layouts/GridLayout";
import HeaderAndFooter from "../Components/HeaderAndFooter";
import { useGetPostsQuery } from "../redux/postAPIservice";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Main() {

    const {isLoading, data } = useGetPostsQuery('/')
    if (isLoading) {
        return (
            <div className="loading-pane">
            <h2 className="loader">🌀</h2>
          </div>
        );
    }

    if (data.posts.data.length <= 0 || data.categories.length <= 0) {

        return (
            <HeaderAndFooter>
                <Header categories={data.categories} currentCategory={""} />
                <div className="text-center mt-6">No posts for this search</div>
            </HeaderAndFooter>
        )

    } else {

        return (
            <>
                <HeaderAndFooter>
                    <Header currentCategory={data.currentCategory !== null ? data.currentCategory.name : ""} categories={data.categories} />
                    <GridLayout posts={data.posts} />
                </HeaderAndFooter>
            </>
        );
    }

}
