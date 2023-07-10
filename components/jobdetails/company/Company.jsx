import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import {icons} from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ({companyLogo, jobTitle, companyName,Location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo)
            ? companyLogo
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSocMBPud4UF8V3S9iV0ys7ZBM8KXO2VpMXUyT4&s=0'
          }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
          <Text style={styles.companyName}>{companyName}/</Text>
          <View style={styles.locationBox}>
            <Image
              source={icons.location}
              resizeMode='contain'
              style={styles.locationImage}
            />
            <Text>{Location}</Text>
          </View>
      </View>
    </View>
  )
}

export default Company