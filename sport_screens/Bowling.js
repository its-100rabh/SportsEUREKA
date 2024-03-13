import { View, Text, ScrollView, Image, Pressable, Dimensions } from 'react-native';
import React from 'react';
import { CheckBadgeIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

var { width, height } = Dimensions.get('window');

export default function Bowling({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-900">
            <View>
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 mt-5"}>
                    <Pressable onPress={() => navigation.goBack()} style={{ color: "#eab308" }} className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </Pressable></SafeAreaView>
                <View>
                    <Image
                        source={{ uri: "https://desmetmirror.com/wp-content/uploads/2020/11/justinkennedybowling.jpg" }}
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
                <Text className="text-white text-center text-5xl font-bold tracking-wider">BOWLING</Text>
                <Text className="text-neutral-400 mx-4 tracking-wide text-base">Bowling is a sport or leisure activity in which a player rolls or throws a bowling ball toward pins or another target. The objective is to knock down as many pins as possible with the fewest rolls.
                    {"\n\n"}
                    Bowling is played in various forms, including ten-pin bowling, which is the most common, as well as nine-pin bowling, candlepin bowling, and others. It is popular for both casual recreation and competitive play.
                    {"\n\n"}
                </Text>
                <Text className="text-white text-2xl font-bold tracking-wider px-4">RULES</Text>
                <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Objective:</Text>
                    
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    Knock down as many pins as possible with the fewest rolls of the ball.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Scoring:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Players receive one point for each pin knocked down.{"\n"}
                    - In traditional ten-pin bowling, players have ten frames to knock down as many pins as possible.{"\n"}
                    - Each frame consists of up to two rolls of the ball, except for the tenth frame, which allows up to three rolls if the player scores a spare or strike.{"\n"}
                    - Strikes (knocking down all ten pins with the first roll) and spares (knocking down all ten pins with both rolls of a frame) receive bonus points.{"\n"}
                    - A strike earns ten points plus the total of the next two rolls.{"\n"}
                    - A spare earns ten points plus the total of the next roll.{"\n"}
                    - If a player knocks down all ten pins in the tenth frame, they receive bonus rolls to complete the frame and potentially earn additional points.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Setup:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - The bowling lane is a narrow, smooth surface with a length of about 60 feet (18 meters).{"\n"}
                    - At the end of the lane are ten pins arranged in a triangular formation.{"\n"}
                    - Players stand at the foul line and roll the ball toward the pins, aiming to knock down as many as possible.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Technique:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Players typically use a bowling ball weighing between 6 and 16 pounds (2.7 to 7.3 kg).{"\n"}
                    - The ball is rolled or thrown with a swinging motion of the arm, aiming to release it with proper timing and accuracy.{"\n"}
                    - Spin and hook techniques are commonly used to control the path of the ball and increase the likelihood of knocking down pins.
                </Text>
            </View>
        </ScrollView>
    );
}
