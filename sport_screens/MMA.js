import { View, Text, ScrollView, Image, Pressable, Dimensions } from 'react-native';
import React from 'react';
import { CheckBadgeIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

var { width, height } = Dimensions.get('window');

export default function MMA({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-900">
            <View>
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 mt-5"}>
                    <Pressable onPress={() => navigation.goBack()} style={{ color: "#eab308" }} className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </Pressable></SafeAreaView>
                <View>
                    <Image
                        source={{ uri: "https://diazcombatsports.com/wp-content/uploads/2020/05/MMA-STANCE-best.jpg" }}
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
                <Text className="text-white text-center text-5xl font-bold tracking-wider">MIXED MARTIAL ARTS (MMA)</Text>
                <Text className="text-neutral-400 mx-4 tracking-wide text-base">Mixed Martial Arts (MMA) is a full-contact combat sport that allows a wide variety of fighting techniques and skills, from a mixture of martial arts traditions and disciplines, to be used in competitions. MMA promotes the idea of combining the most effective techniques from various martial arts to create a well-rounded fighter.
                    {"\n\n"}
                    MMA matches can take place in a ring or a fenced enclosure, and fighters compete against each other with the goal of winning by knockout, submission, or judges' decision. MMA has gained popularity worldwide and has become one of the most watched combat sports.
                    {"\n\n"}
                </Text>
                <Text className="text-white text-2xl font-bold tracking-wider px-4">RULES</Text>
                <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Fouls:</Text>
                    
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Certain techniques and actions are considered fouls in MMA, including eye gouging, biting, groin strikes, headbutting, and striking the spine or back of the head.{"\n"}
                    - Fighters are also prohibited from grabbing opponents' clothing or gloves, as well as from holding the fence or ropes for an unfair advantage.{"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Weight Classes:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - MMA competitions are typically divided into weight classes to ensure fair matchups based on fighters' size and weight.{"\n"}
                    - Common weight classes include Flyweight, Bantamweight, Featherweight, Lightweight, Welterweight, Middleweight, Light Heavyweight, and Heavyweight.{"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Rounds:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - MMA matches are divided into rounds, usually lasting five minutes each, with a one-minute rest period between rounds.{"\n"}
                    - Championship fights or main events may consist of five rounds instead of three.{"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Judging:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - If a fight goes the distance without a knockout or submission, judges score the bout based on criteria such as effective striking, grappling, aggression, and octagon control.{"\n"}
                    - The fighter with the higher score according to the judges' decision wins the match.{"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Victory:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Fighters can win an MMA match by knockout (rendering the opponent unconscious), submission (forcing the opponent to tap out), or judges' decision (scoring more points).{"\n"}
                    - Matches can also end in a draw or no contest under certain circumstances.
                </Text>
            </View>
        </ScrollView>
    );
}
