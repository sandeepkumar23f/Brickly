import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log("Sign up:", email, password);
    router.replace("/");
  };

  return (
    <View className="flex-1 justify-center bg-gray-100 px-6">
      <Text className="text-3xl font-bold text-center mb-8 text-gray-800">
        Create Account ✨
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="bg-white border border-gray-300 rounded-lg px-4 py-3 mb-4"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="bg-white border border-gray-300 rounded-lg px-4 py-3 mb-6"
      />

      <TouchableOpacity
        onPress={handleSignUp}
        className="bg-green-600 rounded-lg py-3"
      >
        <Text className="text-white text-center font-semibold">Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/sign-in")}
        className="mt-4"
      >
        <Text className="text-green-600 text-center">Already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
}
