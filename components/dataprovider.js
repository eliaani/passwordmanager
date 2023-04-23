import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const passwords = localStorage.getItem("passwords");
        if (passwords) {
            setData(JSON.parse(passwords))
        }
    }, [])

    useEffect(() => {
        console.log(JSON.stringify(data))
        localStorage.setItem("passwords", JSON.stringify(data))

    }, [data])

    return <DataContext.Provider value={{ data, setData }}>
        {children}
    </DataContext.Provider>
}