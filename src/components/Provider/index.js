import { createContext, useContext, useState } from "react";


export const TableContext = createContext()
export const ToggleContext = createContext()

export const useTable = () => {
    return useContext(TableContext)
}

export const useTableToggle = () => {
    return useContext(ToggleContext)
}

export const Provider = ({ children }) => {
    const [table, setTable] = useState(false)
    const toggle = () => setTable((prev) => !prev)

    return (
        <TableContext.Provider value={table}>
            <ToggleContext.Provider value={toggle}>
                {children}
            </ToggleContext.Provider>
        </TableContext.Provider>
    )
}
