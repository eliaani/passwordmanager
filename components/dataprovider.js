import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem("passwords").then((passwords) => { if (passwords) { setData(JSON.parse(passwords)) } });
    }, [])

    useEffect(() => {
        AsyncStorage.setItem("passwords", JSON.stringify(data))

    }, [data])

    return <DataContext.Provider value={{ data, setData }}>
        {children}
    </DataContext.Provider>
}