import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { router } from "expo-router";

export default function SignInScreen() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const API =
    process.env.EXPO_PUBLIC_BACKEND_URL || "http://localhost:5000";

  const handleChange = (field: string, value: string) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (!userData.email || !userData.password) {
      setErrorMessage("All fields are required");
      return;
    }

    if (!validateEmail(userData.email)) {
      setErrorMessage("Enter valid email");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const result = await res.json();

      if (result.success) {
        setSuccessMessage("Login successful 🎉 Redirecting...");

        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        setErrorMessage(result.message || "Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center bg-gray-100 px-6">
      <Text className="text-3xl font-bold text-center mb-8 text-gray-800">
        Welcome Back 👋
      </Text>

      {errorMessage ? (
        <Text className="text-red-500 text-center mb-2">
          {errorMessage}
        </Text>
      ) : null}

      {successMessage ? (
        <Text className="text-green-600 text-center mb-2">
          {successMessage}
        </Text>
      ) : null}

      <TextInput
        placeholder="Email"
        value={userData.email}
        onChangeText={(text) => handleChange("email", text)}
        keyboardType="email-address"
        autoCapitalize="none"
        className="bg-white border border-gray-300 rounded-lg px-4 py-3 mb-4"
      />

      <TextInput
        placeholder="Password"
        value={userData.password}
        onChangeText={(text) => handleChange("password", text)}
        secureTextEntry
        className="bg-white border border-gray-300 rounded-lg px-4 py-3 mb-6"
      />

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-blue-600 rounded-lg py-3 flex items-center justify-center"
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-center font-semibold">
            Sign In
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/sign-up")}
        className="mt-4"
      >
        <Text className="text-blue-600 text-center">
          Create an account
        </Text>
      </TouchableOpacity>
    </View>
  );
}