import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { CheckBadgeIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

var { width, height } = Dimensions.get('window');

export default function Football({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-900">
            <View>
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 mt-5"}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ color: "#eab308" }} className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </TouchableOpacity></SafeAreaView>
                <View>
                    <Image
                        source={{ uri: "https://thephysiocompany.co.uk/wp-content/uploads/football.jpg" }}
                        style={{ width, height: height * 0.55 }}
                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                        style={{ width, height: height * 0.40 }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className='absolute bottom-0'
                    />
                </View></View>
            <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
                {/* {title} */}
                <Text className="text-white text-center text-5xl font-bold tracking-wider">FOOTBALL</Text>
                <Text className="text-neutral-400 mx-4 tracking-wide text-base">Football, also known as soccer in some parts of the world, is one of the most popular and widely played sports globally. It is a team sport that involves two teams of eleven players each, with the objective of scoring goals by getting a round ball into the opposing team's net.
                    {"\n\n"}
                    Football has numerous international tournaments, with the FIFA World Cup being the most prestigious. Other major tournaments include the UEFA European Championship (Euro), Copa America, and the Africa Cup of Nations (AFCON). Clubs also compete in prestigious competitions such as the UEFA Champions League.
                    {"\n\n"}
                </Text>
                <Text className="text-white text-2xl font-bold tracking-wider px-4">RULES</Text>
                <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Objective:</Text>
                    
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    Score goals by getting the ball into the opposing team's net. The team with the most goals at the end of the match wins.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Teams and Players:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Two teams with eleven players each (including a goalkeeper) on the field at a time.{"\n"}
                    - Substitutions are allowed, typically with a limit per team.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Gameplay:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Played in two halves, usually 45 minutes each, with a halftime break.{"\n"}
                    - The game begins with a kickoff from the center circle.{"\n"}
                    - The ball is moved primarily by dribbling, passing, or shooting.{"\n"}
                    - Players cannot use their hands or arms to handle the ball (except the goalkeeper within the penalty area).{"\n"}
                    - Players can use their feet, head, chest, or any part of their body except the hands and arms.{"\n"}
                    - Offside rule: A player is in an offside position if they are nearer to the opponent's goal line than both the ball and the second-to-last defender when the ball is played to them. Being in an offside position is not an offense, but becoming actively involved in play from an offside position is penalized.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Fouls and Free Kicks:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Fouls include actions such as tripping, pushing, and handball.{"\n"}
                    - A direct free kick is awarded for serious fouls, and the opposing team can score directly from it.{"\n"}
                    - An indirect free kick is awarded for less serious fouls, and a goal can only be scored if the ball touches another player before entering the net.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Penalty Kicks:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - A penalty kick is awarded when a foul occurs inside the penalty area.{"\n"}
                    - It's a one-on-one situation between the kicker and the goalkeeper from the penalty spot, 12 yards from the goal.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Throw-Ins, Corner Kicks, and Goal Kicks:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Throw-ins are awarded when the ball goes out of play over the touchline.{"\n"}
                    - Corner kicks are awarded when the ball goes out of play over the goal line, last touched by the defending team.{"\n"}
                    - Goal kicks are awarded when the ball goes out of play over the goal line, last touched by the attacking team.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Cards and Disciplinary Actions:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Yellow card: A warning for a serious foul or unsporting behavior. Two yellow cards result in a red card.{"\n"}
                    - Red card: Ejection from the game for a serious foul or severe misconduct. The team plays with one player less for the remainder of the game.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Officiating:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - A referee enforces the rules and makes decisions during the game.{"\n"}
                    - Assistant referees (linesmen) assist in making offside calls and other decisions.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Ties and Extra Time:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - In some competitions, tied matches are decided by extra time and, if needed, a penalty shootout.
                </Text>
            </View>
        </ScrollView>
    );
}
