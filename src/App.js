
import { useState } from 'react';
import Dropdown from './components/Dropdown';

function App() {
  const [selected, setSelected] = useState('')
  return (
    <div>
      <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
