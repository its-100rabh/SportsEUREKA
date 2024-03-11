import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import React from "react";
import {
  CheckBadgeIcon,
  ChevronLeftIcon,
} from "react-native-heroicons/outline";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

var { width, height } = Dimensions.get("window");

export default function Baseball({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <View>
        <SafeAreaView
          className={
            "absolute z-20 w-full flex-row justify-between items-center px-4 mt-5"
          }
        >
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ color: "#eab308" }}
            className="rounded-xl p-1"
          >
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </Pressable>
        </SafeAreaView>
        <View>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Marcus_Thames_Tigers_2007.jpg/800px-Marcus_Thames_Tigers_2007.jpg",
            }}
            style={{ width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      </View>
      <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
        {/* {title} */}
        <Text className="text-white text-center text-5xl font-bold tracking-wider">
          BASEBALL
        </Text>
        <Text className="text-neutral-400 mx-4 tracking-wide text-base">
          Baseball is a bat-and-ball game played between two teams of nine
          players each. The goal is to score runs by hitting a thrown ball with
          a bat and touching four bases arranged in a square or diamond shape.
          {"\n\n"}
          Baseball is widely popular in North America, Japan, and some parts of
          Central and South America. It is often referred to as America's
          pastime due to its historical significance in the United States.
          {"\n\n"}
        </Text>
        <Text className="text-white text-2xl font-bold tracking-wider px-4">
          RULES
        </Text>
        <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">
          • Objective:
        </Text>

        <Text className="text-neutral-400 mx-4 tracking-wide text-base">
          Score runs by hitting the ball and successfully completing a circuit
          around four bases to reach home plate.
          {"\n"}
        </Text>
        <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">
          • Teams and Players:
        </Text>
        <Text className="text-neutral-400 mx-4 tracking-wide text-base">
          - Two teams with nine players each: pitcher, catcher, four infielders,
          and three outfielders.{"\n"}- Substitutions are allowed throughout the
          game.
          {"\n"}
        </Text>
        <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">
          • Gameplay:
        </Text>
        <Text className="text-neutral-400 mx-4 tracking-wide text-base">
          - The game is played in innings, with each team taking turns batting
          and fielding.{"\n"}- The team batting tries to hit the ball and score
          runs, while the fielding team tries to get the batters out and prevent
          runs from scoring.{"\n"}- Runs are scored by hitting the ball and
          successfully completing a circuit around the bases.{"\n"}- The pitcher
          throws the ball towards the batter from the pitcher's mound.{"\n"}-
          The batter attempts to hit the ball and then runs counterclockwise
          around the bases.{"\n"}- The fielding team tries to get the batter out
          by catching the ball, tagging bases, or tagging the batter-runner.
          {"\n"}- The team that scores the most runs at the end of nine innings
          wins.{"\n"}- If the game is tied after nine innings, extra innings are
          played until a winner is determined.
          {"\n"}
        </Text>
        <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">
          • Scoring:
        </Text>
        <Text className="text-neutral-400 mx-4 tracking-wide text-base">
          - Runs are scored when a player successfully reaches home plate after
          touching all four bases.{"\n"}- A home run is scored when a batter
          hits the ball out of the playing field, allowing them to circle all
          the bases and score a run.{"\n"}- Other players on base at the time
          also score if a home run is hit.{"\n"}- Runs are also scored by
          runners advancing around the bases on hits, walks, or errors.
          {"\n"}
        </Text>
        <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">
          • Outs:
        </Text>
        <Text className="text-neutral-400 mx-4 tracking-wide text-base">
          - Outs are recorded when the batting team fails to successfully
          advance a runner around the bases or when the fielding team
          successfully gets a batter out.{"\n"}- Three outs complete a
          half-inning, and teams switch between batting and fielding.
          {"\n"}
        </Text>
        <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">
          • Pitching and Batting:
        </Text>
        <Text className="text-neutral-400 mx-4 tracking-wide text-base">
          - The pitcher throws the ball towards the batter from the pitcher's
          mound.{"\n"}- The batter attempts to hit the ball with a bat and reach
          base safely.{"\n"}- Strikes, balls, and fouls are called based on the
          pitcher's delivery and the batter's actions.{"\n"}- A strikeout occurs
          when the batter accumulates three strikes, resulting in an out.
          {"\n"}
        </Text>
        <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">
          • Fielding:
        </Text>
        <Text className="text-neutral-400 mx-4 tracking-wide text-base">
          - The fielding team attempts to get the batter out and prevent runners
          from advancing around the bases.{"\n"}- Fielders can catch the ball,
          tag bases, or tag runners to record outs.{"\n"}- Fielders must work
          together to anticipate plays and make defensive stops.
        </Text>
      </View>
    </ScrollView>
  );
}
