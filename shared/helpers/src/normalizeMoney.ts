import Intl from 'intl'
import 'intl/locale-data/jsonp/pt'

const normalizeMoney = (data: number) => {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(data)
}

export default normalizeMoney
