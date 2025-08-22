"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

type NavCtx = {
  navigate: (url: string) => void;
  loading: boolean;
  setLoading: (val: boolean) => void; // 👈 expose kar diya for custom page loaders
};

const NavigationContext = createContext<NavCtx>({
  navigate: () => {},
  loading: false,
  setLoading: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

export default function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const navigate = (url: string) => {
    setLoading(true);
    router.push(url);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <NavigationContext.Provider value={{ navigate, loading, setLoading }}>
      {children}
    </NavigationContext.Provider>
  );
}
