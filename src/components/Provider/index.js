import { createContext, useContext, useState } from "react";


export const TableContext = createContext()
export const ToggleContext = createContext()
export const ContentContext = createContext()
export const ShowContext = createContext()

export const useTable = () => {
    return useContext(TableContext)
}

export const useTableToggle = () => {
    return useContext(ToggleContext)
}

export const useContent = () => {
    return useContext(ContentContext)
}

export const useTableShow = () => {
    return useContext(ShowContext)
}

export const Provider = ({ children }) => {
    const [table, setTable] = useState(false)
    const [content, setContent] = useState(false)
    const toggle = () => setTable((prev) => !prev)
    const show = () => setContent(true)

    return (
        <TableContext.Provider value={table}>
            <ToggleContext.Provider value={toggle}>
                <ContentContext.Provider value={content}>
                    <ShowContext.Provider value={show}>
                        {children}
                    </ShowContext.Provider>
                </ContentContext.Provider>
            </ToggleContext.Provider>
        </TableContext.Provider>
    )
}
