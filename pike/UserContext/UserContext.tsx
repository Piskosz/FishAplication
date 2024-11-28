import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import axios from 'axios';

// Typy danych kontekstu
interface UserContextType {
  user: any;  // Możesz dokładnie określić typ obiektu użytkownika
  token: string | null;
  setToken: (token: string | null) => void;
  login: (userData: any) => void;
  logout: () => void;
}

// Tworzymy kontekst
const UserContext = createContext<UserContextType | undefined>(undefined);

// Hook do pobierania danych użytkownika
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// Provider, który udostępnia dane o użytkowniku i tokenie
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null); // Stan przechowujący dane użytkownika
  const [token, setToken] = useState<string | null>(null); // Stan przechowujący token
  const [loading, setLoading] = useState<boolean>(true);  // Stan do monitorowania ładowania danych

  // Funkcja do wczytania danych użytkownika z API
  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        try {
          const response = await axios.get('http://localhost:8080/Rejestracja', {
            headers: {
              'Authorization': `Bearer ${token}`, // Token jest wymagany
            },
          });

          if (response.status === 200) {
            setUser(response.data); // Ustaw dane użytkownika po otrzymaniu odpowiedzi
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        } finally {
          setLoading(false);  // Zakończ ładowanie
        }
      } else {
        setLoading(false);  // Jeśli token nie jest dostępny, zakończ ładowanie
      }
    };

    fetchUserData(); // Wywołanie funkcji do pobrania danych użytkownika
  }, [token]);  // Efekt uruchamia się, gdy zmienia się token

  // Logowanie użytkownika
  const login = (userData: any) => {
    setUser(userData);
    // Możesz także przechować dane użytkownika w lokalnej pamięci (np. AsyncStorage)
  };

  // Wylogowanie użytkownika
  const logout = () => {
    setUser(null);
    setToken(null);
    // Możesz wyczyścić dane o użytkowniku i tokenie z pamięci lokalnej
  };

  // Sprawdzamy, czy dane użytkownika są w trakcie ładowania
  if (loading) {
    return <div>Loading...</div>; // Możesz zwrócić loader lub inną stronę, gdy dane są ładowane
  }

  return (
    <UserContext.Provider value={{ user, token, setToken, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
