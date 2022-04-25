import { createContext, useContext, useState, useEffect } from "react";
import { getContactCards } from "@/lib/apiFunctions";
const AppContext = createContext();

export function AppWrapper({ children }) {
  const [data, setData] = useState({});
  async function getContact() {
    const contactList = await getContactCards();
    let officesList = [];
    contactList.map((item) => {
      officesList.push({
        id: +item.id,
        address: `${item.name} ${item.address}`,
      });
    });
    setData(officesList);
  }

  useEffect(() => {
    getContact();
  }, []);
  return (
    <AppContext.Provider
      value={{
        officesList: data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
