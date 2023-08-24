import { ReactNode, createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type AppContextProviderProps = {
  children: ReactNode;
};

type AppContext = {
  modalIsOpen: boolean;
  handleModal: () => void;
  status: User;
  changeStatus: () => void;
};

type User = {
  authorized: boolean;
};

const AppContext = createContext({} as AppContext);

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [status, setStatus] = useLocalStorage<User>("user", {
    authorized: false,
  });

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const changeStatus = () => {
    setStatus({ authorized: !status.authorized });
  };

  return (
    <AppContext.Provider
      value={{ modalIsOpen, handleModal, changeStatus, status }}
    >
      {children}
    </AppContext.Provider>
  );
}
