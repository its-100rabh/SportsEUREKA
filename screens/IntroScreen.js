import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { LinearGradient } from "expo-linear-gradient";

var { width, height } = Dimensions.get("window");

const IntroScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#ffffff"}}>
        <LinearGradient colors={["#efffff", "#f6ffff"]} style={{ flex: 1 }}>
      <View
        style={{ marginTop: (height * 0.09), paddingBottom: 80 }}
        className="space-y-3"
      >
        {/* {title} */}
        <Text className="text-black text-center text-2xl font-bold tracking-wider">
          Welcome to SportsEUREKA
        </Text>
        <Text className="text-neutral-700 mx-4 tracking-wide text-base">
          Hello and welcome to SportsEUREKA, your ultimate guide to exploring
          the world of sports! Whether you're a seasoned athlete or just
          starting your journey, this app is designed to introduce you to the
          basics of various sports, helping you discover new passions and hone
          your skills.
          {"\n\n"}
        </Text>
        <Text className="text-black text-2xl font-bold tracking-wider px-4">
          Why SportsEUREKA?
        </Text>
        <Text className="text-neutral-800 mx-4 font-bold tracking-wide text-base">
          SportsEUREKA is more than just an app—it's your gateway to a world of
          knowledge and excitement. Here's what you can expect:
        </Text>

        {/* <Text className="text-neutral-800 mx-4 tracking-wide text-base">
          Score goals by getting the ball into the opposing team's net. The team
          with the most goals at the end of the match wins.
          {"\n"}
        </Text> */}
        <Text className="text-neutral-800 mx-4 font-bold tracking-wide text-base">
          • Learn the Fundamentals:
        </Text>
        <Text className="text-neutral-700 mx-4 tracking-wide text-base">
          From basketball to soccer, we've got you covered! Explore each sport's
          basic rules, equipment, and terminology, empowering you to understand
          and appreciate the game.
          {"\n"}
        </Text>
        <Text className="text-neutral-800 mx-4 font-bold tracking-wide text-base">
          • Discover Your Interests:
        </Text>
        <Text className="text-neutral-700 mx-4 tracking-wide text-base">
          Not sure which sport suits you best? Our comprehensive guides provide
          insights into different sports, helping you find the perfect match
          based on your interests, abilities, and goals.
          {"\n"}
        </Text>
        <Text className="text-neutral-800 mx-4 font-bold tracking-wide text-base">
          • Interactive Learning:
        </Text>
        <Text className="text-neutral-700 mx-4 tracking-wide text-base">
          Dive into interactive quizzes, videos, and tutorials that make
          learning fun and engaging. Test your knowledge, improve your skills,
          and become a sports expert in no time!
          {"\n"}
        </Text>
        <Text className="text-neutral-800 mx-4 font-bold tracking-wide text-base">
          • Stay Updated:
        </Text>
        <Text className="text-neutral-700 mx-4 tracking-wide text-base">
          Keep up with the latest news, events, and trends in the world of
          sports. Whether it's a major tournament or a local competition, we'll
          keep you informed and inspired.
          {"\n"}
        </Text>

        <Text className="text-neutral-700 mx-4 tracking-wide text-base">
          Ready to embark on your sports education journey? Let's dive in! Tap
          the "Get Started" button below to begin exploring the fascinating
          world of sports with SportsEUREKA.
          {"\n"}
          {"\n"}
        </Text>
        <Pressable
          style={{
            backgroundColor: "#fdd6c5",
            width: "70%",
            height: "4%",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("Home")}
        >
          {/* <FontAwesome5 name="volleyball-ball" size={30} color="#f8864a" /> */}
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 22,
              color: "#f8864a",
              padding: "auto",
            }}
          >
            Get Started
          </Text>
        </Pressable>
      </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({});
