import {useCallback, useState} from 'react';
import { DatePicker } from './DatePicker'

function App() {
  
  const [date, setDate] = useState<Date>(new Date());
  const handleChangeDatePicker =(data: Date) => {
    console.log(data);
    setDate(data)
  };

  return <DatePicker date={date} onChange={handleChangeDatePicker} />;
}

export default App;
