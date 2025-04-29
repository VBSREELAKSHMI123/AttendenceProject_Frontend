import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import dayjs, { Dayjs } from 'dayjs';


import { DateValidationError, PickerChangeHandlerContext } from '@mui/x-date-pickers';

type DateType = {
    label: string,
    value: string,
    name: string,
    type: string,
    onChange?: (value: Dayjs | null) => void,
    placeholder?: string
    
}

export const BasicDatePicker: React.FC<DateType> = ({label, value, name, onChange, type, placeholder}:DateType) =>{
  const handleChange = (newValue: string | number | dayjs.Dayjs | Date | null | undefined) => {
    const formattedDate = dayjs(newValue);
    onChange(formattedDate);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
<DatePicker
        label={label}
        value={value ? dayjs(value) : null}
        onChange={handleChange}
      />
    </LocalizationProvider>
  );
}




