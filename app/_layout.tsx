import { ClerkProvider } from "@clerk/expo";
import { useAuth } from "@clerk/expo";

import { Redirect, Slot } from "expo-router";

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey="YOUR_CLERK_PUBLISHABLE_KEY">
      <AuthGate />
    </ClerkProvider>
  );
}

function AuthGate() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/sign-in" />;
  return <Slot />;
}
