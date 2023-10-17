'use client'

import { ListContext } from "@/contexts/ListContext";
import { useContext } from "react";
import { CiCircleRemove, CiEdit } from "react-icons/ci";

export const ListItems = () => {
    const listCtx = useContext(ListContext);

    const handleRemoveButton = (id: number) => {
        listCtx?.removeList(id);
    };

    const handleEditButton = (id: number) => {
        listCtx?.editList(id);
    };

    const handleToggle = (id: number) => {
        listCtx?.toggleList(id);
    };

    return (
        
                <div className="mt-20">
                    <ul className=" max-w-4xl mx-auto">
                        {listCtx?.list.map(item => (
                            <li
                                className=" bg-teal-100 p-2  border border-teal-200 mb-5 dark:bg-violet-300 dark:border-violet-500 flex justify-between transition-all rounded-md"
                                key={item.id}>
                                <div className={`font-medium text-lg text-gray-600 flex items-center 
                            ${item.done ? ' line-through' : 'no-underline'}
                        `}>
                                    <input className=" mr-2 w-6 h-6" onChange={() => handleToggle(item.id)} type="checkbox" checked={item.done} />
                                    {item.text}</div>
                                <div className="flex items-center">
                                    <button onClick={() => handleRemoveButton(item.id)} className=" bg-red-500 rounded-full text-white text-xl hover:opacity-80 mr-2 "><CiCircleRemove /></button>
                                    <button onClick={() => handleEditButton(item.id)} className="text-xl hover:opacity-80 bg-yellow-600 text-white rounded-full "><CiEdit /></button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            
    )
};