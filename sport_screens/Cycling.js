import { View, Text, ScrollView, Image, Pressable, Dimensions } from 'react-native';
import React from 'react';
import { CheckBadgeIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

var { width, height } = Dimensions.get('window');

export default function Cycling({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-900">
            <View>
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 mt-5"}>
                    <Pressable onPress={() => navigation.goBack()} style={{ color: "#eab308" }} className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </Pressable></SafeAreaView>
                <View>
                    <Image
                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5YB4KJwVTfuDDarVL-gOfTJh9zGkR8EWAA&usqp=CAU" }}
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
                <Text className="text-white text-center text-5xl font-bold tracking-wider">CYCLING</Text>
                <Text className="text-neutral-400 mx-4 tracking-wide text-base">Cycling, also known as bicycling, is a popular recreational activity, sport, and mode of transportation involving the use of bicycles. It encompasses various disciplines, including road cycling, mountain biking, and BMX.
                    {"\n\n"}
                    Cycling promotes physical fitness, environmental sustainability, and enjoyment of the outdoors. It is practiced by millions of people worldwide for leisure, exercise, and competitive pursuits.
                    {"\n\n"}
                </Text>
                <Text className="text-white text-2xl font-bold tracking-wider px-4">RULES</Text>
                <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Safety:</Text>
                    
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Always wear a properly fitted helmet to protect against head injuries.{"\n"}
                    - Obey traffic laws and signals, including stopping at red lights and yielding to pedestrians.{"\n"}
                    - Use hand signals to indicate turns and stops to communicate with other road users.{"\n"}
                    - Stay visible by wearing bright clothing and using lights, especially when riding at night.{"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Equipment:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Ensure your bicycle is in good working condition, with properly inflated tires, functioning brakes, and adjusted gears.{"\n"}
                    - Use appropriate gear for the type of cycling you're doing, such as road bikes for paved surfaces and mountain bikes for off-road trails.{"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Riding Etiquette:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Ride predictably and defensively, anticipating potential hazards and reacting accordingly.{"\n"}
                    - Respect the right of way of other cyclists, pedestrians, and vehicles.{"\n"}
                    - Ride single file when cycling in groups, especially on narrow roads or paths.{"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Road Cycling:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Stay to the right side of the road, following the direction of traffic flow.{"\n"}
                    - Use bike lanes where available and appropriate.{"\n"}
                    - Be mindful of opening car doors, parked vehicles, and other obstacles along the road.{"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Mountain Biking:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Stay on designated trails and avoid riding on closed or protected areas.{"\n"}
                    - Yield to uphill riders and hikers, and announce your presence when passing.{"\n"}
                    - Use caution on technical terrain, and dismount if necessary to navigate difficult sections.{"\n"}</Text>
                    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Maintenance:</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
                    - Regularly inspect and maintain your bicycle to ensure safety and performance.{"\n"}
                    - Clean and lubricate moving parts, check tire pressure, and tighten loose bolts and screws.{"\n"}
                    - Address any mechanical issues promptly to prevent accidents and injuries.
                </Text>
            </View>
        </ScrollView>
    );
}
