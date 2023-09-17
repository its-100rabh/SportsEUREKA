import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

const CategoriesScreen = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCategories, setFilteredCategories] = useState([]);

    const categories = [
        { name: 'Volleyball', color: '#f8864a', backgroundColor: '#fdd6c5', icon: 'volleyball-ball' },
        { name: 'Basketball', color: '#f84145', backgroundColor: '#fdc2c4', icon: 'basketball-ball' },
        { name: 'Football', color: '#c59207', backgroundColor: '#fcedc4', icon: 'football-ball' },
        { name: 'Cricket', color: '#5d27a1', backgroundColor: '#cbb9e1', icon: 'sports-cricket' },
        { name: 'Bowling', color: '#91be6d', backgroundColor: '#dcead1', icon: 'bowling-ball' },
        { name: 'Cycling', color: '#2858a2', backgroundColor: '#b8c8e1', icon: 'bicycle' },
        { name: 'MMA', color: '#277da0', backgroundColor: '#b9d5e0', icon: 'user-ninja' },
        { name: 'Tennis', color: '#2db9b2', backgroundColor: '#bdeeeb', icon: 'table-tennis' },
        { name: 'Baseball', color: '#43aa8c', backgroundColor: '#c2e3da', icon: 'baseball-ball' },
        { name: 'F1 Motorsports', color: '#f8864a', backgroundColor: "#fdd6c5", icon: 'racing-helmet' },
        { name: 'Swimming', color: '#2858a2', backgroundColor: '#b9c9e0', icon: 'swimmer' },
        { name: 'Hockey', color: '#864eca', backgroundColor: '#cbb9e1', icon: 'sports-hockey' },
    ];

    useEffect(() => {
        // Filter categories based on search query
        const filtered = categories.filter((category) =>
            category.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCategories(filtered);
    }, [searchQuery]);

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

    const renderCategory = (category, index) => (
        <TouchableOpacity
            key={index}
            style={{
                width: 150,
                height: 150,
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: category.backgroundColor,
                borderRadius: 10,
            }}
        >
            {category.icon === 'volleyball-ball' && <FontAwesome5 name={category.icon} size={35} color={category.color} />}
            {category.icon === 'basketball-ball' && <FontAwesome5 name={category.icon} size={35} color={category.color} />}
            {category.icon === 'football-ball' && <FontAwesome5 name={category.icon} size={35} color={category.color} onPress={() => navigation.navigate('Football')} />}
            {category.icon === 'sports-cricket' && <MaterialIcons name={category.icon} size={35} color={category.color} />}
            {category.icon === 'bowling-ball' && <FontAwesome5 name={category.icon} size={35} color={category.color} />}
            {category.icon === 'bicycle' && <FontAwesome5 name={category.icon} size={35} color={category.color} />}
            {category.icon === 'user-ninja' && <FontAwesome5 name={category.icon} size={35} color={category.color} />}
            {category.icon === 'table-tennis' && <FontAwesome5 name={category.icon} size={35} color={category.color} />}
            {category.icon === 'baseball-ball' && <FontAwesome5 name={category.icon} size={35} color={category.color} />}
            {category.icon === 'racing-helmet' && <MaterialCommunityIcons name={category.icon} size={35} color={category.color} />}
            {category.icon === 'swimmer' && <FontAwesome5 name={category.icon} size={35} color={category.color} />}
            {category.icon === 'sports-hockey' && <MaterialIcons name={category.icon} size={35} color={category.color} />}
            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 20, color: category.color }}>
                {category.name}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 20 }}>

            <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 25, }}>
                    <FontAwesome5 name="canadian-maple-leaf" size={30} color="#0c59ea" />
                    <FontAwesome5 name="bars" size={24} color="#32363b" />
                </View>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(300)}>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: '#32363b', alignSelf: 'center', marginTop: 10 }}>Discover the categories</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 12, marginVertical: 20, padding: 10, backgroundColor: '#f5f6fa', borderRadius: 10 }}>
                    <FontAwesome5 name="search" size={20} color="#d2d5da" />
                    <TextInput placeholder='Search for a category' placeholderTextColor={'#d2d5da'} style={{ fontFamily: 'Poppins-Medium', marginLeft: 10, flex: 1 }} onChangeText={(text) => setSearchQuery(text)} />
                </View>

            </Animated.View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {filteredCategories.map((category, index) => renderCategory(category, index))}
                </View>
            </ScrollView>
        </View>
    );
};

export { CategoriesScreen };
