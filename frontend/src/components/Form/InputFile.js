import React, { useState, useEffect, useRef, useCallback } from 'react';

import { useField } from '@unform/core';

import { MdInsertPhoto} from 'react-icons/md'

export default function InputFile({ name, ...rest }) {
  const inputFileRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback(e => {
    const file = e.target.files[0];

    if (!file) {
      setPreview(null);
      return;
    }

    const previewURL = URL.createObjectURL(file);

    setPreview(previewURL);
  }, []);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputFileRef.current,
      path: 'files[0]',
      clearValue(ref) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_, value) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {preview ? (
        <img src={preview} alt="Preview" width="150" />
      ) : (
        <>
          <MdInsertPhoto size={40} color="#ddd" />
          <strong>Adicionar foto</strong>
        </>
      )}
      <input
        type="file"
        ref={inputFileRef}
        onChange={handlePreview}
        {...rest}
      />
    </>
  );
}
