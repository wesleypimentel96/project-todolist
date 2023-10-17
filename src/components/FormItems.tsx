'use client'

import { ListContext } from '@/contexts/ListContext';
import { FormEvent, useContext, useState } from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';

export const FormItems = () => {

    const [inputItems, setInputItems] = useState('');
    const listCtx = useContext(ListContext);

    const handleAddButton = (e: FormEvent) => {
        e.preventDefault();
        if (inputItems.trim()) {
            listCtx?.addList(inputItems)
            setInputItems('');
        }
    };

    return (
        <section className="mt-20">
            <div className="flex justify-center max-w-xl mx-auto">
                <form className=" bg-teal-600 dark:bg-violet-700 py-6 px-8 rounded-md flex items-center w-full">
                    <input
                        type="text"
                        placeholder="Digite sua tarefa"
                        className=" p-3 rounded-l-md outline-none dark:text-slate-900 w-full"
                        value={inputItems}
                        onChange={(e) => setInputItems(e.target.value)}
                    />
                    <button
                        onClick={handleAddButton}
                        className=" bg-white p-4 rounded-r-md"><MdOutlineAddCircleOutline className={` bg-green-600 rounded-full text-white hover:opacity-80`} /></button>
                </form>
            </div>
        </section>
    )
};