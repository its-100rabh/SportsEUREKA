import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MMAClub() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isJoined, setIsJoined] = useState(false);

  const handleJoinClub = () => {
    if (name && email) {
      setIsJoined(true);
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      {isJoined ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            You have joined the MMA Club, {name}!
          </Text>
        </View>
      ) : (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16, textAlign: "center" }}>
            Join the MMA Club
          </Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 16, padding: 8 }}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 16, padding: 8 }}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Pressable
            onPress={handleJoinClub}
            style={{ backgroundColor: "#007BFF", padding: 16, borderRadius: 8 }}
          >
            <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>
              Join
            </Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}
