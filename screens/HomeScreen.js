import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');
    const [fontsLoaded, error] = useFonts({
        'Poppins-Black': require('../assets/fonts/Poppins/Poppins-Black.ttf'),
        'Poppins-BlackItalic': require('../assets/fonts/Poppins/Poppins-BlackItalic.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
        'Poppins-BoldItalic': require('../assets/fonts/Poppins/Poppins-BoldItalic.ttf'),
        'Poppins-ExtraBold': require('../assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
        'Poppins-ExtraBoldItalic': require('../assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf'),
        'Poppins-ExtraLight': require('../assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
        'Poppins-ExtraLightItalic': require('../assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf'),
        'Poppins-Italic': require('../assets/fonts/Poppins/Poppins-Italic.ttf'),
        'Poppins-Light': require('../assets/fonts/Poppins/Poppins-Light.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
        'Poppins-MediumItalic': require('../assets/fonts/Poppins/Poppins-MediumItalic.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
        'Poppins-SemiBoldItalic': require('../assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf'),
        'Poppins-Thin': require('../assets/fonts/Poppins/Poppins-Thin.ttf'),
        'Poppins-ThinItalic': require('../assets/fonts/Poppins/Poppins-ThinItalic.ttf'),

    })
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 20 }}>

            <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 25, }}>
                    {/* <FontAwesome5 name="canadian-maple-leaf" size={30} color="#0c59ea" /> */}
                    <Entypo name="sports-club" size={30} color="#0c59ea" />
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 30, color: '#32363b' }}>SportEUREKA</Text>
                    <FontAwesome5 name="bars" size={24} color="#32363b" />
                </View>
                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 22, color: '#32363b', alignSelf: 'center', marginTop: 1 }}>Where Sports Meet Smarts!</Text>
            </Animated.View>




            <Animated.View entering={FadeInDown.delay(600).duration(300)}>

                <View style={{ paddingVertical: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#32363b' }}>Popular</Text>
                    <TouchableOpacity>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#f9844b' }}>View all</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0 }}>
                    <View style={{ width: 315, height: 220, backgroundColor: '#135def', borderRadius: 10, padding: 20 }}>
                        <FontAwesome5 name="user-ninja" size={150} color="#104ec9" style={{ position: 'absolute', right: 20, top: 30 }} />
                        <View style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#296ff0', borderRadius: 10, alignSelf: 'flex-start' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13, color: '#FFF' }}>HYBRID</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 20, color: '#FFF', marginTop: 10 }}>{`MMA\nFIGHT CLUB`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 15, color: '#FFF', marginTop: 10 }}>{`The MMA Club opens its\ndoors to you!!`}</Text>
                        <TouchableOpacity style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#FFF', borderRadius: 10, alignSelf: 'flex-start', marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#135def' }}>Discover the club</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: 315, height: 220, backgroundColor: '#f94045', borderRadius: 10, padding: 20, marginLeft: 20 }}>
                        {/* <FontAwesome5 name="user-ninja" size={150} color="#104ec9" style={{ position: 'absolute', right: 20, top: 30 }} /> */}
                        <MaterialCommunityIcons name="racing-helmet" size={150} style={{ position: 'absolute', left: 170, top: 40 }} color="#bf170b" />
                        <View style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#bf170b', borderRadius: 10, alignSelf: 'flex-start' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13, color: '#FFF' }}>MOTORSPORTS</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 20, color: '#FFF', marginTop: 10 }}>{`F1 \nRACING CLUB`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 15, color: '#FFF', marginTop: 10 }}>{`The F1 Racing Club opens\nits doors to you!!`}</Text>
                        <TouchableOpacity style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#FFF', borderRadius: 10, alignSelf: 'flex-start', marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#bf170b' }}>Discover the club</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animated.View>





            <Animated.View entering={FadeInDown.delay(900).duration(300)}>

                <View style={{ paddingVertical: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#32363b' }}>Categories</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Sports')}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#f9844b' }}>View all</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0 }}>

                    <TouchableOpacity style={{ backgroundColor: '#fdd6c5', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome5 name="volleyball-ball" size={30} color="#f8864a" />
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#f8864a', marginTop: 10 }}>{`Volleyball`}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: '#fdc2c4', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                        <FontAwesome5 name="basketball-ball" size={30} color="#f84145" />
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#f84145', marginTop: 10 }}>{`Basketball`}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: '#c2e3da', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                        <FontAwesome5 name="baseball-ball" size={30} color="#43aa8c" />
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#43aa8c', marginTop: 10 }}>{`Baseball`}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: '#b9c9e0', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                        <FontAwesome5 name="football-ball" size={30} color="#2858a2" />
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#2858a2', marginTop: 10 }}>{`Football`}</Text>
                    </TouchableOpacity>

                </ScrollView>
            </Animated.View>




            <Animated.View entering={FadeInDown.delay(1200).duration(300)}>

                <View style={{ paddingVertical: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#32363b' }}>New Clubs</Text>
                    <TouchableOpacity>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#f9844b' }}>View all</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0 }}>

                    <TouchableOpacity style={{ backgroundColor: '#cbb9e1', width: 165, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>

                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: '#b9d5e0', width: 165, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                    </TouchableOpacity>

                </ScrollView>
            </Animated.View>

        </View>
    );
}

export { HomeScreen };