import React from 'react';
import ToastProvider from '../components/ToastProvider';

const withToast = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
  return (props: P) => (
    <ToastProvider>
      <WrappedComponent {...props} />
    </ToastProvider>
  );
};

export default withToast; 