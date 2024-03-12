import { View, Text, ScrollView, Image, Pressable, Dimensions } from 'react-native';
import React from 'react';
import { CheckBadgeIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

var { width, height } = Dimensions.get('window');

export default function Tennis({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-900">
            <View>
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 mt-5"}>
                    <Pressable onPress={() => navigation.goBack()} style={{ color: "#eab308" }} className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </Pressable></SafeAreaView>
                <View>
                    <Image
                        source={{ uri: "https://cdn.pixabay.com/photo/2016/03/27/17/47/tennis-1284524_960_720.jpg" }}
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
                <Text className="text-white text-center text-5xl font-bold tracking-wider">TENNIS</Text>
                <Text className="text-neutral-400 mx-4 tracking-wide text-base">Tennis is a racket sport played individually against a single opponent (singles) or between two teams of two players each (doubles). The game involves hitting a ball over a net and into the opponent's court using a tennis racket.
                    {"\n\n"}
                    Tennis is one of the most popular sports globally, with millions of players and fans worldwide. It is known for its competitive nature and strategic gameplay.
                    {"\n\n"}
                </Text>
                <Text className="text-white text-2xl font-bold tracking-wider px-4">RULES</Text>
                <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Objective:</Text>
                    
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    Score points by hitting the ball over the net and into the opponent's court in such a way that they are unable to return it.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Scoring:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Points are awarded in increments of 15 (15, 30, 40) with the first player to reach at least 40 points and have a two-point lead winning the game.{"\n"}
                    - If both players reach 40 points, it is called "deuce." The player who scores the next point after deuce gains advantage. If they win the next point, they win the game; if they lose, it returns to deuce.{"\n"}
                    - A set is won by the first player to win at least six games with a two-game lead. If the set is tied at 6-6, a tiebreaker is played to determine the winner of the set.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Serve:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - The game starts with a player serving from behind the baseline on one side of the court to the diagonally opposite service box on the opponent's court.{"\n"}
                    - The server gets two attempts to serve the ball into the service box. If they fail both times, it results in a double fault, and the opponent gains a point.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Return:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - After the serve, the opponent must return the ball by hitting it over the net and into the opponent's court.{"\n"}
                    - If the return lands outside the court boundaries or fails to clear the net, it results in a point for the serving player.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Rally:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - A rally occurs when both players hit the ball back and forth over the net, continuing until one player fails to return the ball or hits it out of bounds.{"\n"}
                    - Players use various techniques, including groundstrokes (forehand and backhand), volleys, and overhead smashes, to control the ball and win points.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Court and Lines:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - The tennis court is divided into two equal halves by a net.{"\n"}
                    - The court is further divided into service boxes, baselines, and sidelines, each with specific boundary lines.{"\n"}
                    - Players must ensure that their shots land within the court boundaries to remain in play.
                </Text>
            </View>
        </ScrollView>
    );
}
