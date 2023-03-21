import { useCallback, useMemo, useState } from 'react';
import { Field, FieldType } from './types';

const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const useFields = (fieldsConfig: Field[]) => {
  const [data, setData] = useState<Record<string, string>>(() =>
    fieldsConfig.reduce((acc: Record<string, string>, field) => {
      if (field.defaultValue) {
        acc[field.id] = field.defaultValue;
      }

      return acc;
    }, {})
  );

  const isInvalid = useMemo(() => {
    return fieldsConfig.some(field =>
      (field.required && !data[field.id])
      || (field.type === FieldType.Email && data[field.id] && !data[field.id].toLowerCase().match(emailRegexp))
    );
  }, [data, fieldsConfig]);

  const handleChange = useCallback((value: string, id: string) => {
    setData((prevData) => ({ ...prevData, [id]: value }));
  }, []);

  return [data, isInvalid, handleChange] as const;
}