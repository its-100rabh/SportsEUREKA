import { View, Text, ScrollView, Image, Pressable, Dimensions } from 'react-native';
import React from 'react';
import { CheckBadgeIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

var { width, height } = Dimensions.get('window');

export default function Volleyball({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-900">
            <View>
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 mt-5"}>
                    <Pressable onPress={() => navigation.goBack()} style={{ color: "#eab308" }} className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </Pressable></SafeAreaView>
                <View>
                    <Image
                        source={{ uri: "https://d2779tscntxxsw.cloudfront.net/587545ab5a65e.jpeg?width=1200&quality=80" }}
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
                <Text className="text-white text-center text-5xl font-bold tracking-wider">VOLLEYBALL</Text>
                <Text className="text-neutral-400 mx-4 tracking-wide text-base">Volleyball is a team sport played by two teams on a rectangular court divided by a net. The objective is to send the ball over the net and ground it on the opponent's court while preventing the same effort by the opposing team.
                    {"\n\n"}
                    Volleyball is popular worldwide and is played both indoors and outdoors. It is known for its fast-paced action and emphasis on teamwork and strategy.
                    {"\n\n"}
                </Text>
                <Text className="text-white text-2xl font-bold tracking-wider px-4">RULES</Text>
                <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Objective:</Text>
                    
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    Ground the ball on the opponent's court while preventing them from doing the same.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Teams and Players:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Two teams with six players each on the court.{"\n"}
                    - Each team is allowed a certain number of substitutions throughout the game.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Gameplay:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - The game starts with a serve from one team to the other.{"\n"}
                    - Players must pass the ball over the net using a combination of no more than three contacts with the ball to return it to the opponent's court.{"\n"}
                    - Points are scored when the ball lands on the opponent's court, either due to a successful attack or an error by the opposing team.{"\n"}
                    - The rally continues until the ball hits the ground, goes out of bounds, or a fault is committed by one of the teams.{"\n"}
                    - The first team to reach a certain number of points (usually 25) with a two-point advantage wins the set.{"\n"}
                    - Matches are typically played as the best of five sets.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Serving:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - The serve is initiated by tossing the ball into the air and hitting it with the hand or arm over the net to the opponent's court.{"\n"}
                    - Players must serve from behind the back boundary line, also known as the end line.{"\n"}
                    - The server must rotate to serve in subsequent points, moving clockwise after winning a point.{"\n"}
                    - If the serving team wins a rally, the same player serves again.{"\n"}
                    - If the serving team loses a rally, the serve passes to the opposing team.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Blocking:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Blocking is a defensive technique used to deflect or intercept the ball coming from the opponent's attack.{"\n"}
                    - Players can jump and reach above the net to block the ball.{"\n"}
                    - Blocks can be performed solo or as a combination block with multiple players.{"\n"}
                    - A successful block can result in a point for the blocking team or a continuation of the rally.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Digging:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Digging is a defensive technique used to receive or defend against an opponent's attack.{"\n"}
                    - Players attempt to pass the ball to their teammates to set up an attack or return the ball over the net.{"\n"}
                    - Digging requires quick reflexes and precise ball control to keep the ball in play.
                </Text>
            </View>
        </ScrollView>
    );
}
