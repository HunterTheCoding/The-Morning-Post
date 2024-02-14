import { toast, ToastOptions } from 'react-hot-toast';

export const successToast = (message: string) => {
  const toastOptions: ToastOptions = {
    style: {
      backgroundColor: '#32313f',
      color: '#d4d1db',
      padding: '0.75rem',
    },
  };
  toast.success(message, toastOptions);
};

export const errorToast = (message: string) => {
  const toastOptions: ToastOptions = {
    style: {
      backgroundColor: '#32313f',
      color: '#d4d1db',
      padding: '0.75rem',
    },
  };
  toast.error(message, toastOptions);
};
