import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import Button from './button';

interface ConfirmationModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  title: string;
  description: ReactNode;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  title,
  description,
  onConfirm,
}) => {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={() => setIsModalOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Title as="h3" className="text-xl font-bold text-white">
              {title}
            </Dialog.Title>
          </div>
          <div className="overflow-y-auto">
            <div className="flex justify-center p-4 min-h-full text-center">
              <Dialog.Description className="text-sm text-left align-middle">
                {description}
              </Dialog.Description>
            </div>
            <div className="flex justify-end p-4 pt-2">
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={onConfirm}>
                Continue
              </Button>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ConfirmationModal;
