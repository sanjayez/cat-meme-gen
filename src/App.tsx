import { useState } from 'react';
import Header from './components/Header';
import TabPanel from './components/TabPanel';
import InputForm from './components/InputForm';
import TabContent from './components/TabContent';
import HowToSection from './components/HowToSection';

function App() {
  const [activeTab, setActiveTab] = useState('Image');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted:', inputValue);
    // Optionally, reset the input afterward
    setInputValue('');
  };

  return (
    <div className="min-h-screen bg-violet-500 px-4">
      <Header title="Cat meme-gen" />
      <main className="p-4 max-w-4xl mx-auto">
        <TabPanel activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabContent activeTab={activeTab} />
        <InputForm 
          inputValue={inputValue} 
          onInputChange={handleInputChange} 
          onSubmit={handleSubmit}
        />
        <HowToSection />
      </main>
    </div>
  );
}

export default App;
