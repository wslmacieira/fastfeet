import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import AsyncSelect from 'react-select/async';

export default function AsyncSelectInput({ name, cacheOptions, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, registerField, defaultValue, } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'select.state.value',
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.select.state.value) {
            return [];
          }
          return ref.select.state.value.map(option => option.value);
        } else {
          if (!ref.select.state.value) {
            return '';
          }
          return ref.select.state.value.value;
        }
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <AsyncSelect
      cacheOptions={cacheOptions}
      defaultValue={defaultValue}
      ref={selectRef}
      {...rest}
    />
  );
}
