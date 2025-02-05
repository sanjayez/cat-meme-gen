import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Toast {
  id: number;
  message: string;
  duration?: number;
  type?: 'success' | 'failed';
}

interface ToastContextType {
  addToast: (message: string, type?: 'success' | 'failed', duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

interface ToastProviderProps {
  children: ReactNode;
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (
    message: string,
    type: 'success' | 'failed' = 'failed',
    duration: number = 3000
  ) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, duration, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {/* Toast container with highest z-index */}
      <div className="fixed top-4 left-0 right-0 flex flex-col items-center space-y-2 z-[9999] pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`${
              toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } text-white px-4 py-2 rounded shadow-lg`}
          >
            {toast.message}
          </div>
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;