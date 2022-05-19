import React, { useEffect, useState } from "react";
import { AuthProvider } from "./src/contexts/AuthContext.jsx";
import RootNavigator from "./src/navigation/RootNavigator.jsx";
import { Provider as PaperProvider } from "react-native-paper";
import Splash from "./src/screens/Splash.jsx";

const App = () => {
  const [exibeSplash, setExibeSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setExibeSplash(false);
    }, 1500);
  }, []);

  return (
    <>
      <AuthProvider>
        <PaperProvider>
          {exibeSplash ? <Splash /> : <RootNavigator />}
        </PaperProvider>
      </AuthProvider>
    </>
  );
};

export default App;
