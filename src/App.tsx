import { useState } from 'react';
import Header from './components/Header';
import TabPanel from './components/TabPanel';
import InputForm from './components/InputForm';
import TabContent from './components/TabContent';
import HowToSection from './components/HowToSection';
import { useToast } from './components/ToastProvider';
import { validateInput } from './common/helpers';

function App() {
  const [activeTab, setActiveTab] = useState('Image');
  const [inputValue, setInputValue] = useState('');
  const { addToast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = validateInput(inputValue);
    if (error) {
      addToast(error, 'failed', 2000);
      return;
    }

    setInputValue('');
    addToast('Meme generated successfully', 'success', 2000);

  };

  return (
    <div className="min-h-screen bg-violet-400 px-4">
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
