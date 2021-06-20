import Intl from 'intl';

const numberFormat = (value: number) => {
  return Intl.NumberFormat('pt-BR', {
    maximumSignificantDigits: 3,
  }).format(value);
};

export default numberFormat;
