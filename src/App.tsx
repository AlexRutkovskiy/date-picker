import {useCallback, useState} from 'react';
import { DatePicker } from './DatePicker'

function App() {
  
  const [date, setDate] = useState<Date>(()=> new Date());
  const handleChangeDatePicker = useCallback((data: Date) => setDate(date), [date]);

  return <DatePicker date={date} onChange={handleChangeDatePicker} />;
}

export default App;
