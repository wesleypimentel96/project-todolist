import { ThemeContext } from '@/contexts/ThemeContext';
import { useContext } from 'react';
import { CiDark } from 'react-icons/ci'

export const Header = () => {
    const themeCtx = useContext(ThemeContext);

    const handleThemeButton = () => {
        themeCtx?.setTheme(themeCtx.theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <header className=' flex justify-between py-5 items-center'>
            <h1 className=' font-semibold text-2xl'>Lista de Tarefas</h1>

            <button onClick={handleThemeButton} className=' rounded-full bg-slate-900 p-1
            dark:bg-white dark:text-slate-900'>
                <CiDark className={` cursor-pointer text-white text-3xl dark:text-slate-900`} />
            </button>


        </header>
    )
};