import { FC, ReactNode } from 'react';
import { Button, Modal as ModalAnt } from 'antd';

interface ModalProps {
    title: string
    open: boolean
    submitButton: string
    close: () => void
    submit: () => void
    children: ReactNode
}


const Modal: FC<ModalProps> = ({ title, open, submitButton, close, submit, children }) => {
  const modalStyles = {
    footer: {
      display: 'flex',
      justifyContent: 'center',
      margin: 0
    }
  };

  return (
    <>
      <ModalAnt
        className='fontSize-[24px] font-semibold '
        title={<h1 className='text-[24px] mb-12'>{title}</h1>}
        open={open}
        onOk={submit}
        onCancel={close}
        styles={modalStyles}
        footer={<Button onClick={submit} type='primary' className='bg-[#1a8ae5] w-[173px] h-[40px]'>{submitButton}</Button>}
      >
        {children}
      </ModalAnt>
    </>
  );
};

export default Modal;