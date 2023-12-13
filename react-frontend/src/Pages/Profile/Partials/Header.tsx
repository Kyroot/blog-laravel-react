import Form from "./Form";
import { DropDown } from '../../../Components/Dropdown'
// import Search from "./Search";

type Category = {
    id: number;
    name: string;
    slug: string;
  };

type CategoriesTypes = {
    currentCategory: "";
    categories: [];
}

export default function Header({currentCategory, categories}:CategoriesTypes) {
    
    return (<>
        <header className="max-w-xl mx-auto mt-20 text-center">
            <h1 className="text-4xl">
                Latest <span className="text-blue-500">Laravel From Scratch</span> News
            </h1>

            <div className="space-y-2 lg:space-y-0 lg:space-x-4 mt-4">
                {/* <!--  Category --> */}

                <DropDown>
                    <DropDown.Container currentCategory={currentCategory}/>
                        <DropDown.List>
                        {categories.map((category:Category)=>(

                            <DropDown.ListItems key = {category.id} currentCategory={currentCategory} value = {category.name} children = {category.name} link={category.slug}/>

                            ))}
                        </DropDown.List>
                </DropDown>

            {/* Search  */}
            <Form />
            {/* <Search /> */}
            </div>
        </header>

    </>
    )
}
