

import { Redirect, Slot } from "expo-router";

export default function RootLayout() {
  return (
        <AuthGate />
    
  );
}

function AuthGate() {

  return <Redirect href="/sign-in" />;
}
