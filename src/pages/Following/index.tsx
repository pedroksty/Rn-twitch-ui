import React, { useMemo } from 'react'
import { FlatList, View } from 'react-native'

import Header from '../../components/Header'
import Heading from '../../components/Heading'
import Title from '../../components/Title'

import { Container, Wrapper, Main } from './styles'

interface Item {
  key: string
  render: () => JSX.Element
  isTitle?: boolean
}

const Following: React.FC = () => {
  const { data, indices } = useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading >Following</Heading>
      },

      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Followed Categories</Title>,
        isTitle: true
      },
      { key: 'c1', render: () => <View /> },
      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,

        isTitle: true
      },
      { key: 'c2', render: () => <View /> },
      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue Watching</Title>,

        isTitle: true
      },
      { key: 'c3', render: () => <View /> },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offline Channels</Title>,
        isTitle: true
      },
      { key: 'c4', render: () => <View /> }
    ]

    const indices: number[] = []

    items.forEach((item, index) => item.isTitle && indices.push(index))

    return {
      data: items,
      indices
    }
  }, [])

  return (
    <Wrapper>

      <Container>
        <Header />
        <Main >
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indices}
            onRefresh={() => {}}
            refreshing={false}

          />
        </Main>
      </Container>

    </Wrapper>
  )
}

export default Following
