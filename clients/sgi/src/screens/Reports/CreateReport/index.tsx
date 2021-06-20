import * as React from 'react'
import { ContainerPage, LogoHeader, Button } from '@shared/components'
import { StyleSheet, Dimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'

import BaseInfoCar from './BaseInfoCar'
import Internal from './Internal'
import SecurityItens from './SecurityItens'
import CheckItens from './CheckItens'
import Painting from './Painting'
import Glasses from './Glasses'
import HangTags from './HangTags'
import Chassi from './Chassi'
import EngineNumbering from './EngineNumbering'
import Structure from './Structure'
import Presentation from './Presentation'

import * as S from './styles'

const BaseInfoCarRoute = () => <BaseInfoCar />
const InternalRoute = () => <Internal />
const SecurityItensRoute = () => <SecurityItens />
const CheckItensRoute = () => <CheckItens />
const PaintingRoute = () => <Painting />
const GlassesRoute = () => <Glasses />
const HangTagsRoute = () => <HangTags />
const ChassiRoute = () => <Chassi />
const EngineNumberingRoute = () => <EngineNumbering />
const StructureRoute = () => <Structure />
const PresentationRoute = () => <Presentation />

const initialLayout = {
  width: Dimensions.get('window').width,
  background: '#003f82'
}

export default function CreateReport () {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'BaseInfoCar', title: 'Informações' },
    { key: 'internal', title: 'Interno' },
    { key: 'security', title: 'Itens de Segurança' },
    { key: 'checkitens', title: 'Itens de Verificação' },
    { key: 'paiting', title: 'Pintura' },
    { key: 'glasses', title: 'Analise de Vidros' },
    { key: 'hangtags', title: 'Etiquetas' },
    { key: 'chassi', title: 'Chassi' },
    { key: 'enginenumbering', title: 'Num. do Motor' },
    { key: 'structure', title: 'Estrut. do Veiculo' },
    { key: 'presentation', title: 'Orig. Estrutura' }
  ])

  const renderScene = SceneMap({
    BaseInfoCar: BaseInfoCarRoute,
    internal: InternalRoute,
    security: SecurityItensRoute,
    checkitens: CheckItensRoute,
    paiting: PaintingRoute,
    glasses: GlassesRoute,
    hangtags: HangTagsRoute,
    chassi: ChassiRoute,
    enginenumbering: EngineNumberingRoute,
    structure: StructureRoute,
    presentation: PresentationRoute
  })

  return (
    <ContainerPage>
      <LogoHeader />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#003f82' }}
            tabStyle={{
              backgroundColor: 'white',
              width: 160,
              borderRightColor: '#E0E0E0',
              borderLeftColor: '#E0E0E0',
              borderTopColor: 'white',
              borderBottomColor: 'white',
              borderWidth: 1
            }}
            labelStyle={{
              color: '#003f82',
              fontSize: 13,
              textTransform: 'capitalize'
            }}
            scrollEnabled={true}
          />
        )}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        lazy={true}
        lazyPreloadDistance={50}
      />
      <S.Container>
        <Button onPress={() => setIndex(index + 1)}>Proximo</Button>
      </S.Container>
    </ContainerPage>
  )
}
