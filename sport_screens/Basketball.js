import { View, Text, ScrollView, Image, Pressable, Dimensions } from 'react-native';
import React from 'react';
import { CheckBadgeIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

var { width, height } = Dimensions.get('window');

export default function Basketball({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-900">
            <View>
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 mt-5"}>
                    <Pressable onPress={() => navigation.goBack()} style={{ color: "#eab308" }} className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </Pressable></SafeAreaView>
                <View>
                    <Image
                        source={{ uri: "https://athleteschoicemassage.ca/wp-content/uploads/2023/02/opdqgxw7i40.jpg" }}
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
                <Text className="text-white text-center text-5xl font-bold tracking-wider">Basketball</Text>
<Text className="text-neutral-400 mx-4 tracking-wide text-base">
    Basketball is a fast-paced team sport played between two teams of five players each. The objective is to score points by shooting the ball through the opposing team's basket.
    {"\n\n"}
    <Text className="text-white text-2xl font-bold tracking-wider px-4">RULES {"\n\n"}</Text>
    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Teams and Players:{"\n"}</Text>
    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
        - Two teams with five players each on the court at a time.
        {"\n"}
        - Substitutions are allowed during stoppages in play.
        {"\n\n"}
    </Text>
    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Scoring:{"\n"}</Text>
    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
        - Points are scored by shooting the ball through the opponent's basket.
        {"\n"}
        - A field goal from outside the three-point line is worth three points, inside the three-point line is worth two points, and free throws are worth one point each.
        {"\n\n"}
    </Text>
    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Gameplay:{"\n"}</Text>
    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
        - The game is played in four quarters, each lasting 12 minutes (NBA rules).
        {"\n"}
        - The team with the most points at the end of the game wins.
        {"\n"}
        - The game starts with a jump ball at center court.
        {"\n"}
        - Players move the ball by dribbling, passing, and shooting.
        {"\n"}
        - Players cannot run holding the ball (traveling) or double-dribble.
        {"\n\n"}
    </Text>
    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Fouls and Free Throws:{"\n"}</Text>
    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
        - Fouls include actions like pushing, holding, or illegal physical contact.
        {"\n"}
        - Teams enter the bonus on the fourth team foul in a quarter, leading to free throws.
        {"\n"}
        - A player fouled in the act of shooting is awarded free throws.
        {"\n"}
        - Technical fouls can also result in free throws.
        {"\n\n"}
    </Text>
    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Violations and Turnovers:{"\n"}</Text>
    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
        - Violations include traveling, double-dribble, and shot clock violations.
        {"\n"}
        - Turnovers occur when a team loses possession of the ball to the opposing team.
        {"\n\n"}
    </Text>
    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Overtime:{"\n"}</Text>
    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
        - If the score is tied at the end of regulation, overtime periods are played.
        {"\n"}
        - The first team to score more points in an overtime period wins.
        {"\n\n"}
    </Text>
    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Officiating:{"\n"}</Text>
    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
        - A referee enforces the rules and makes decisions during the game.
        {"\n"}
        - Officials also include umpires and a scorer's table.
        {"\n\n"}
    </Text>
</Text> 
            </View>
        </ScrollView>
    );
}
