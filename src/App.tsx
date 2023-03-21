import {useCallback, useState} from 'react';
import { DatePicker } from './DatePicker'

function App() {
  
  const [date, setDate] = useState<Date>(()=> new Date());
  const handleChangeDatePicker = useCallback((data: Date) => setDate(date), []);
  const description = 'Enter format date: y-m-d'

  return <DatePicker onChange={handleChangeDatePicker} value={date} description={description} />;
}

export default App;
