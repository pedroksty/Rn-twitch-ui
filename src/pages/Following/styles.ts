import { Platform } from 'react-native'
import styled from 'styled-components/native'
import Contants from 'expo-constants'

import colors from '../../styles/colors'

const statusBarHeight = Platform.OS === 'android'
  ? Contants.statusBarHeight : 0

export const Wrapper = styled.SafeAreaView`
  background: ${colors.primary};
  flex: 1;
  padding-top: ${statusBarHeight + 'px'};

 
`

export const Container = styled.View`
  padding-left: 14px;
`
export const Main = styled.View`

`
