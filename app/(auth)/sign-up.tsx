import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SignUp() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      className="bg-red-600"
    >
      <View className="flex-1 justify-center px-6 py-12">
        <Image 
          source={require("../../assets/images/splash-icon.png")}
          className="w-32 h-16 mb-8"
          resizeMode="contain"
        />
        
        <Text className="text-xl font-bold text-white mb-6">
          Find your dream home today.
        </Text>

        {/* First Name */}
        <TextInput
          className="border border-gray-300 rounded-xl px-4 py-3 mb-4 bg-white"
          placeholder="First Name"
          placeholderTextColor="#9CA3AF"
        />

        {/* Last Name */}
        <TextInput
          className="border border-gray-300 rounded-xl px-4 py-3 mb-4 bg-white"
          placeholder="Last Name"
          placeholderTextColor="#9CA3AF"
        />

        {/* Email */}
        <TextInput
          className="border border-gray-300 rounded-xl px-4 py-3 mb-4 bg-white"
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#9CA3AF"
        />

        {/* Password */}
        <TextInput
          className="border border-gray-300 rounded-xl px-4 py-3 mb-6 bg-white"
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#9CA3AF"
        />

        {/* Sign Up Button */}
        <TouchableOpacity className="bg-white rounded-xl py-3">
          <Text className="text-center text-red-600 font-bold">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
