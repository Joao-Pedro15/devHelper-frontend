import {
  createContext,
  useState,
  useEffect,
  ReactElement,
  Dispatch,
  SetStateAction,
  FC,
} from "react";

interface ContextType {
  currentBimester: number;
  setCurrentBimester: Dispatch<SetStateAction<number>>;
}

interface IProviderBimester {
  children: ReactElement;
}

export const AuthContext = createContext<ContextType | any>(null);

export const AuthProvider: FC<IProviderBimester> = ({
  children,
}: IProviderBimester) => {
  const [userLogged, setUserLogged] = useState(null);

  useEffect(() => {
    const storage = localStorage.getItem('_user')    
    if(storage &&  !userLogged) {
      console.log(JSON.parse(storage), 'olha tem ');
      
      setUserLogged(JSON.parse(storage))
    }
  }, [])

  return (
    <AuthContext.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
