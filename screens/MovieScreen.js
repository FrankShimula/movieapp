import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { styles } from '../theme';

//var { width, height } = Dimensions.get('window');
//const ios = Platform.OS === 'ios';
//const topMargint = ios ? '' : 'mt-3';


export default function MovieScreen() {
  const { params: item } = useRoute();
  useEffect(() => {

  }, [item])

  return (
    <View>
      <Text>safafhoafaof</Text>
    </View> >
    {/*<ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <View className="w-full">

        <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 ">
          <TouchableOpacity style={styles.background} className="rounded-xl p-1">
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
  </ScrollView>*/}
  )
}