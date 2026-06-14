import { Redirect } from "expo-router";
import "../global.css"
export default function Index() {
  const isSignedIn = false;

  if (!isSignedIn) return <Redirect href="/sign-in" />;
  return <Redirect href="/home" />;
}
