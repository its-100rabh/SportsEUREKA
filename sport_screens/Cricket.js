import { View, Text, ScrollView, Image, Pressable, Dimensions } from 'react-native';
import React from 'react';
import { CheckBadgeIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

var { width, height } = Dimensions.get('window');

export default function Cricket({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-900">
            <View>
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 mt-5"}>
                    <Pressable onPress={() => navigation.goBack()} style={{ color: "#eab308" }} className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </Pressable></SafeAreaView>
                <View>
                    <Image
                        source={{ uri: "https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?cs=srgb&dl=pexels-patrick-case-3628912.jpg&fm=jpg" }}
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
                <Text className="text-white text-center text-5xl font-bold tracking-wider">Cricket</Text>
<Text className="text-neutral-400 mx-4 tracking-wide text-base">
Cricket is a bat-and-ball game played between two teams, each consisting of eleven players. The game is played on a circular field with a rectangular 22-yard-long pitch in the center.
    {"\n\n"}
    <Text className="text-white text-2xl font-bold tracking-wider px-4">RULES {"\n\n"}</Text>
    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Objective:{"\n"}</Text>
    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
        - Score more runs than the opposing team. A run is scored by hitting the ball and running between the wickets.
        {"\n\n"}
    </Text>
    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Teams and Players:{"\n"}</Text>
    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
    - Two teams with eleven players each, including batsmen, bowlers, and fielders.
        {"\n"}
        - The team that wins the coin toss chooses to bat or bowl.
        {"\n"}
        - Substitutions are not allowed during an inning.
        {"\n\n"}
    </Text>
    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Innings:{"\n"}</Text>
    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
    - A cricket match consists of two innings per team.
        {"\n"}
        - In limited-overs formats, each team is restricted to a set number of overs per inning.
        {"\n\n"}
    </Text>
    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Gameplay:{"\n"}</Text>
    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
    - The batting team tries to score runs by hitting the ball and running between the wickets.
        {"\n"}
        - The bowling team tries to dismiss batsmen and limit the runs scored.
        {"\n"}
        - The game includes various forms such as Test matches, One Day Internationals (ODIs), and Twenty20 (T20) matches.
        {"\n\n"}
    </Text>
    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Scoring:{"\n"}</Text>
    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
    - Runs are scored by hitting the ball and completing runs between the wickets.
        {"\n"}
        - Boundaries, such as fours and sixes, result in additional runs.
        {"\n"}
        - Extras include byes, leg byes, wides, and no-balls.
        {"\n\n"}
    </Text>
    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Wickets and Dismissals:{"\n"}</Text>
    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
    - Batsmen are dismissed by getting bowled, caught, leg before wicket (LBW), run out, or stumped.
        {"\n"}
        - Bowlers aim to get batsmen out, and fielders support by catching or stopping the ball.
        {"\n\n"}
    </Text>
    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Umpires and Decision Review System (DRS):{"\n"}</Text>
    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
    - Umpires officiate the match, making decisions on the field.
        {"\n"}
        - DRS allows teams to challenge on-field decisions through video reviews.
        {"\n\n"}
    </Text>
    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Ties and Super Overs:{"\n"}</Text>
    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
    - In limited-overs formats, tied matches may be decided by a Super Over.
        {"\n\n"}
    </Text>
    <Text className="text-neutral-200 mx-4 font-bold tracking-wide text-base">• Fair Play:{"\n"}</Text>
    <Text className="text-neutral-400 mx-4 tracking-wide text-base">
    - Cricket emphasizes fair play, sportsmanship, and respect between players.
        {"\n\n"}
    </Text>
</Text> 
            </View>
        </ScrollView>
    );
}
