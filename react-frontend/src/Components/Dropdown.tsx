import React, { useCallback, useState, useContext, createContext, Dispatch, SetStateAction, useEffect } from "react";

interface DropDownContextType {
    open: boolean;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    toggle: () => void;
}


const DropDownContext = createContext<DropDownContextType>({
    open: false,
    value: "",
    setValue: () => { },
    toggle: () => { },
});

const useDropDown = () => useContext(DropDownContext);



export function DropDown({ children }: any) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const toggle = useCallback(() => setOpen((state) => !state), [])

    useEffect(() => {
        const handleClickOutside = (ev: MouseEvent) => {
            const target = ev.target as HTMLElement;
            if (target && !target.closest(".dropdown")) {
                setOpen(false)
            }
        }
        document.addEventListener("click", handleClickOutside);

        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
    }, [])



    return (
        <>
            <DropDownContext.Provider value={{ open, value, setValue, toggle }}>
                <div className="dropdown relative lg:inline-flex bg-gray-100 rounded-xl"> {children} </div>
            </DropDownContext.Provider>
        </>
    )
}

const Container = ({ currentCategory }: any) => {

    const { value, toggle } = useDropDown();

    return (
    <button className="min-w-max appearance-none bg-transparent flex-1 font-semibold inline-flex lg:w-32 pl-3 pr-3 py-2 justify-between text-left text-sm w-full" onClick={toggle}>  {currentCategory ? currentCategory.toUpperCase() : 'Categories'}
        <svg className='transform -rotate-90' width="22"
            height="22" viewBox="0 0 22 22">
            <g fill="none" fillRule="evenodd">
                <path stroke="#000" strokeOpacity=".012" strokeWidth=".5" d="M21 1v20.16H.84V1z">
                </path>
                <path fill="#222"
                    d="M13.854 7.224l-3.847 3.856 3.847 3.856-1.184 1.184-5.04-5.04 5.04-5.04z"></path>
            </g>
        </svg>

    </button>)
}

const List = (props: any) => {
    const { open } = useDropDown();

    return open ? (
        <>
            <div className="min-w-max absolute bg-gray-100 mt-2 w-full rounded-xl z-50 overflow-auto max-h-28" style={{ top: "2.4em" }}>
                {/* <ul className="drop-down-list"> */}
                    {props.children}
                {/* </ul> */}
            </div>
        </>
    ) : null;
}

const ListItems = ({ children, currentCategory, value, link }: any) => {
    const { setValue } = useDropDown();

    const handleMouseClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setValue(value);
        window.location.href = `/?category=${link}`;
    };

    return (
        <>
            {/* <li className={`list-items max-h-28 block text-left px-3 text-sm leading-7 hover:bg-blue-500 focus:text-white hover:text-white focus:bg-blue-500 focus:text-white hover:text-white" ${currentCategory === children ? "bg-blue-500 text-white": ""}`}> */}
                <a className={`list-items max-h-28 block text-left px-3 text-sm leading-7 hover:bg-blue-500 focus:text-white hover:text-white focus:bg-blue-500 focus:text-white hover:text-white" ${currentCategory === children ? "bg-blue-500 text-white": ""}`} href={`?category=${link}`} onClick={handleMouseClick}>
                    {children.toUpperCase()}
                </a>

            {/* </li> */}
        </>
    )
}


DropDown.Container = Container;
DropDown.List = List;
DropDown.ListItems = ListItems;
