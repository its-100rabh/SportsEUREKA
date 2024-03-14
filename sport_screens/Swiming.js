import { View, Text, ScrollView, Image, Pressable, Dimensions } from 'react-native';
import React from 'react';
import { CheckBadgeIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

var { width, height } = Dimensions.get('window');

export default function Swimming({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-900">
            <View>
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 mt-5"}>
                    <Pressable onPress={() => navigation.goBack()} style={{ color: "#eab308" }} className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </Pressable></SafeAreaView>
                <View>
                    <Image
                        source={{ uri: "https://cdn.britannica.com/83/126383-050-38B8BE25/Michael-Phelps-American-Milorad-Cavic-final-Serbia-2008.jpg" }}
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
                <Text className="text-white text-center text-5xl font-bold tracking-wider">SWIMMING</Text>
                <Text className="text-neutral-400 mx-4 tracking-wide text-base">Swimming is a water-based sport that involves moving through water using one's limbs. It is practiced as a recreational activity, as well as a competitive sport in various formats, including freestyle, breaststroke, backstroke, and butterfly stroke.
                    {"\n\n"}
                    Swimming is not only an excellent form of exercise but also a valuable life skill. It promotes cardiovascular health, muscular strength, and endurance.
                    {"\n\n"}
                </Text>
                <Text className="text-white text-2xl font-bold tracking-wider px-4">RULES</Text>
                <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Strokes:</Text>
                    
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Freestyle: Swimmers use a flutter kick and alternating arm strokes. It is the fastest stroke and often used in long-distance events.{"\n"}
                    - Breaststroke: Swimmers use a frog-like kick and simultaneous arm movements.{"\n"}
                    - Backstroke: Swimmers lie on their backs and use an alternating flutter kick and arm strokes.{"\n"}
                    - Butterfly: Swimmers use a dolphin kick and simultaneous arm strokes, both moving together over the water.{"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Turns:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Swimmers must execute proper turns at the end of each lap to maintain speed and efficiency.{"\n"}
                    - Turns vary depending on the stroke and distance, but they typically involve touching the wall with one or both hands, executing a flip or rotation, and pushing off the wall with momentum.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Starts:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Races begin with swimmers diving off the starting blocks or from a standing or crouching position, depending on the event.{"\n"}
                    - Swimmers must adhere to starting commands and maintain proper technique to avoid disqualification.
                    {"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Turns:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Swimmers must remain in their assigned lanes and refrain from impeding other swimmers.{"\n"}
                    - Infractions such as false starts, improper strokes, or interference may result in penalties or disqualification.{"\n"}
                    - Races are timed using electronic systems to determine the winner based on finishing time.
                </Text>
            </View>
        </ScrollView>
    );
}
