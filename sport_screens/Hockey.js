import { View, Text, ScrollView, Image, Pressable, Dimensions } from 'react-native';
import React from 'react';
import { CheckBadgeIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

var { width, height } = Dimensions.get('window');

export default function Hockey({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-900">
            <View>
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 mt-5"}>
                    <Pressable onPress={() => navigation.goBack()} style={{ color: "#eab308" }} className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </Pressable></SafeAreaView>
                <View>
                    <Image
                        source={{ uri: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg_2x/f_auto/primary/b2unl1gppjiic0fld0em" }}
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
                <Text className="text-white text-center text-5xl font-bold tracking-wider">HOCKEY</Text>
                <Text className="text-neutral-400 mx-4 tracking-wide text-base">Hockey is a fast-paced team sport played on a field or on ice, in which players use sticks to hit a small, hard ball or a puck into the opponent's goal. It is played in various forms, including field hockey and ice hockey, each with its own set of rules and regulations.
                    {"\n\n"}
                    Hockey is known for its physicality, skill, and strategic gameplay, making it popular among players and spectators worldwide.
                    {"\n\n"}
                </Text>
                <Text className="text-white text-2xl font-bold tracking-wider px-4">RULES</Text>
                <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Objective:</Text>
                    
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    Score goals by hitting the ball or puck into the opponent's goal while preventing them from doing the same.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Players:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Two teams with a specified number of players on the field or ice at a time, typically six players in ice hockey and eleven players in field hockey.{"\n"}
                    - Players may be substituted during stoppages in play, typically without limit.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Gameplay:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - The game begins with a face-off or a pushback to start play.{"\n"}
                    - Players use sticks to control and pass the ball or puck, with the objective of advancing it toward the opponent's goal.{"\n"}
                    - Goals are scored when the ball or puck crosses the goal line and enters the goal cage or net.{"\n"}
                    - Players must adhere to rules regarding offside, icing (in ice hockey), and other infractions to maintain fair play.{"\n"}
                    - The game is played in periods or halves of specified duration, with breaks in between for rest and strategy planning.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Equipment:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Players wear protective gear, including helmets, pads, and gloves, to minimize the risk of injury.{"\n"}
                    - Sticks used in hockey are designed for specific purposes, with field hockey sticks featuring a flat end and ice hockey sticks having a blade for puck control.{"\n"}
                    - Goalkeepers wear additional protective equipment and use larger sticks to defend the goal.
                </Text>
            </View>
        </ScrollView>
    );
}
