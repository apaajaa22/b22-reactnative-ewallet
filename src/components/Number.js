import React from 'react';
import {Text} from 'react-native';
import NumberFormat from 'react-number-format';

const Number = ({number, type, style, operator}) => {
  if (type === 'decimal') {
    return (
      <NumberFormat
        value={number}
        renderText={value => <Text style={style}>{value}</Text>}
        decimalSeparator=","
        displayType="text"
        // decimalScale={1}
        fixedDecimalScale
        thousandSeparator="."
      />
    );
  }
  return (
    <NumberFormat
      value={number}
      thousandSeparator="."
      renderText={value => (
        <Text style={style}>
          {operator} {value}
        </Text>
      )}
      decimalSeparator=","
      displayType="text"
      prefix="Rp "
    />
  );
};

export default Number;
