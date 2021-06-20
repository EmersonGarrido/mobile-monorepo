import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@unform/core';
import { StyleSheet } from 'react-native';
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select';

import * as S from './styles';

interface ItemsSelect {
  label?: string;
  value?: string;
  id?: number;
}

interface SelectProps extends PickerSelectProps {
  name: string;
  label: string;
  id: number;
  items: ItemsSelect[];
  selectedValue: any;
}

const Select: React.FC<SelectProps> = ({ name, label, items, ...rest }) => {
  const selectRef = useRef<any>(null);
  const { registerField, defaultValue, fieldName, error } = useField(name);

  const [selectedValue, setSelectedValue] = useState<ItemsSelect[]>();

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'props.selectedValue',
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <S.Label>{label}</S.Label>}
      <S.Container>
        <RNPickerSelect
          ref={selectRef}
          placeholder={{
            label: 'Escolha uma opção...',
            value: null,
            color: '#1976D2',
          }}
          items={items}
          style={{
            ...pickerSelectStyles,
            placeholder: {
              paddingHorizontal: 20,
            },
          }}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          useNativeAndroidPickerStyle={false}
          {...rest}
        />
      </S.Container>
    </>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingHorizontal: 20,
    height: '100%',
  },
  inputAndroid: {
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 20,
    height: '100%',
  },
});

export default Select;
