import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
//import { styles } from '../theme';


export default function MovieScreen() {
    const { params: item } = useRoute();
    useEffect(() => {

    }, [item])

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className="flex-1 bg-neutral-900"
        >
            <View className="w-full">
                <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 ">
                    <TouchableOpacity className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="orange" />
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </ScrollView>
    )
}