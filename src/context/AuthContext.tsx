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
  const [userLogged, setUserLogged] = useState<any | null>(null);


  useEffect(() => {
    const validateToken = async () => {
      const storage = JSON.stringify(localStorage.getItem('token'))
      
      if(storage) {        
        setUserLogged(storage)
        // const { data } = await API.get('/users/allUsers', { headers: { authorization: `Bearer ${storage}` } })
        // console.log('olhao data');
        
        // console.log(data, 'olha o data');
        
        // if(data) setUserLogged(data)
      }
    }
    validateToken()
    console.log(userLogged, 'olha o que ta logado');
  }, [])

  return (
    <AuthContext.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
