import { Header } from "./components/Header";
import { Todolist } from "./components/Todolist";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react/cjs/react.development";

const App = () => {

  const [items, setItem] = useState([])

  const [formData, setFormData] = useState({
    id: uuidv4(),
    value: '',
    isCompleted: false,
    date: new Date().toLocaleTimeString(),
    src: ''
  })

  const handleFormData = event => {
    const field = event.target.getAttribute('name')
    const newFormData = { ...formData };
    newFormData[field] = event.target.value
    setFormData(newFormData)
  }

  console.log(formData)

  const handleItem = (event) => {
    event.preventDefault()
    setItem([...items, formData])
  }

  return (
    <div className="container bg-secondary  border-2 rounded border-dark">
      <Header items={items} formData={formData} handleFormData={handleFormData} handleItem={handleItem} />
      <Todolist items={items} />
    </div>
  );
}


export default App;
