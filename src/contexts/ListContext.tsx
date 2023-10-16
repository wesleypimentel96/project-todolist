'use client'

import { Items } from "@/types/Items";
import { ReactNode, createContext, useState, useEffect } from "react";

const STORAGE_KEY_LIST = 'listContextKey';

export type ListContextType = {
    list: Items[];
    addList: (text: string) => void;
    removeList: (id: number) => void;
    editList: (id: number) => void;
    toggleList: (id: number) => void;
}

export const ListContext = createContext<ListContextType | null>(null)

export const ListContextProvider = ({ children }: { children: ReactNode }) => {
    const [list, setList] = useState<Items[]>(
        JSON.parse(localStorage?.getItem(STORAGE_KEY_LIST) || '[]')
    );

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY_LIST, JSON.stringify(list))
    }, [list])

    const addList = (text: string) => {
        setList([...list, {
            id: list.length, text, done: false
        }])
    };

    const removeList = (id: number) => {
        setList(list.filter(item => {
            return item.id !== id
        }))
    }

    const editList = (id: number) => {
        const newItem = list.find(item => item.id === id);
        if (!newItem) return false

        const newText = window.prompt('Altere sua tarefa', newItem.text)
        if (!newText || newText.trim() === '') return false;

        setList(list.filter(item => {
            if (item.id === id) {
                item.text = newText
            }
            return item;
        }))
    }

    const toggleList = (id: number) => {
        const newList = [...list];

        for (let i in newList) {
            if (id === parseInt(i)) {
                newList[i].done = !newList[i].done
            }
            setList(newList);
        }
    };

    return (
        <ListContext.Provider value={{ list, addList, removeList, editList, toggleList }}>
            {children}
        </ListContext.Provider>
    )
};