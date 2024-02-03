import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
//import { styles } from '../theme';

export default function MovieScreen() {
  const { params: item } = useRoute()
  useEffect(() => {}, [item])
  /*
  fix your on shit
  install expo-router to access this hook
  const navigation = useNavigation()
  */

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        className='flex h-screen'
      >
        <View className='w-full h-full'>
          <View className='z-20 w-full flex-row justify-between items-center px-4 '>
            <TouchableOpacity
              className='rounded-xl p-1'
              onPress={() => {
                /*
                uncomment this after installing expo-router
                navigation.goBack()
                */
              }}
            >
              <ChevronLeftIcon size='28' strokeWidth={2.5} color='orange' />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
