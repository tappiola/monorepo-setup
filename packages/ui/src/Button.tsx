import {type MouseEventHandler} from "react";

export const Button = ({children, onClick}: {children: React.ReactNode, onClick: MouseEventHandler}) => (
    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onClick}>
        {children}
    </button>
)
