import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'

import fetchApi from '../../utils/fetch'
import TodaysImage from '../../components/TodaysImage'
import { PostImage } from '../../types'
import { format, sub } from 'date-fns'
import LastFiveDaysImages from '../../components/LastFiveDaysImages'

const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({})
  const [lastfiveImages, setLastfiveImages] = useState<PostImage[]>([])

  useEffect(() => {
    const getData = async () => {
      try {
        const todaysImage = await fetchApi()
        setTodaysImage(todaysImage)
      } catch (error) {
        console.error(error)
        setTodaysImage({})
      }
    }

    const loadLAs5DaysImages = async () => {
      try {
        const date = new Date()
        const todaysDate = format(date, 'yyyy-MM-dd')
        const ondeDayAgo = format(sub(date, { days: 1 }), 'yyyy-MM-dd')
        const fiveDaysAgo = format(sub(ondeDayAgo, { days: 5 }), 'yyyy-MM-dd')

        const lastFiveDaysImagesResponse = await fetchApi(
          `&start_date=${fiveDaysAgo}&end_date=${ondeDayAgo}`
        )
        setLastfiveImages(lastFiveDaysImagesResponse)
      } catch (error) {
        console.error(error)
      }
    }

    getData().catch(null)
    loadLAs5DaysImages().catch(null)
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImages={lastfiveImages} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(7,26,93,255)',
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 10,
  },
})
