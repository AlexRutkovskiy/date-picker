import {useCallback, useState} from 'react';
import { DatePicker } from './DatePicker'

function App() {
  const [date, setDate] = useState<Date>(new Date());
  const handleChangeDatePicker = useCallback((newData: Date) => setDate(newData), [])

  return <DatePicker date={date} onChange={handleChangeDatePicker} />;
}

export default App;
