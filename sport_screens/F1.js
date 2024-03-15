import { View, Text, ScrollView, Image, Pressable, Dimensions } from 'react-native';
import React from 'react';
import { CheckBadgeIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

var { width, height } = Dimensions.get('window');

export default function F1Motorsports({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-900">
            <View>
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 mt-5"}>
                    <Pressable onPress={() => navigation.goBack()} style={{ color: "#eab308" }} className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </Pressable></SafeAreaView>
                <View>
                    <Image
                        source={{ uri: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202303/1422823415_0-sixteen_nine.jpg?size=948:533" }}
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
                <Text className="text-white text-center text-5xl font-bold tracking-wider">FORMULA 1 MOTORSPORTS</Text>
                <Text className="text-neutral-400 mx-4 tracking-wide text-base">Formula 1 (F1) is the pinnacle of motorsport, featuring the fastest cars and the most skilled drivers in the world. F1 races are held on circuits around the globe, attracting millions of fans and showcasing cutting-edge automotive technology and engineering.
                    {"\n\n"}
                    F1 cars are purpose-built for speed and agility, featuring advanced aerodynamics, hybrid power units, and state-of-the-art materials. The sport is known for its thrilling races, intense rivalries, and glamorous events.
                    {"\n\n"}
                </Text>
                <Text className="text-white text-2xl font-bold tracking-wider px-4">RULES</Text>
                <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Racing Format:</Text>
                    
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - F1 races consist of a series of Grand Prix events held throughout the season at different circuits worldwide.{"\n"}
                    - Each Grand Prix features multiple practice sessions, qualifying sessions, and the main race.{"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Qualifying:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Qualifying sessions determine the starting grid for the race, with drivers competing to set the fastest lap times.{"\n"}
                    - The fastest driver earns pole position and starts the race from the front of the grid.{"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Race:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - F1 races are typically run over a certain number of laps, with the distance determined by the specific circuit.{"\n"}
                    - Races feature mandatory pit stops for tire changes and adjustments, adding strategy to the competition.{"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Points System:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Drivers earn points based on their finishing positions in each race, with higher points awarded for top placements.{"\n"}
                    - The driver with the most points at the end of the season is crowned the World Champion.{"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Regulations:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - F1 regulations govern various aspects of the sport, including car design, engine specifications, and race procedures.{"\n"}
                    - Regulations aim to ensure fairness, safety, and competitiveness among teams and drivers.{"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Penalties:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Drivers can receive penalties for rule violations or unsportsmanlike conduct, including time penalties, grid penalties, or disqualifications.{"\n"}
                    - Penalties are enforced by race stewards and can impact a driver's race result and championship standings.
                </Text>
            </View>
        </ScrollView>
    );
}
