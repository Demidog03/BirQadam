import { FC, ReactNode } from 'react';
import { Modal as ModalAnt } from 'antd';
import styled from 'styled-components';

const ModalStyle = styled(ModalAnt)`
  font-size: 24px;
  font-weight: 600;
  & .ant-modal-content {
    
  }
  & h1 {
    font-size: 24px;
    margin-bottom: 38px;
  }
  & .ant-modal-footer {
    display: flex;
    justify-content: center;
    & button {
      width: 173px;
      height: 40px;
    }
  }
`

interface ModalProps {
    title: string
    open: boolean
    close: () => void
    children: ReactNode
}


const Modal: FC<ModalProps> = ({ title, open, close, children }) => {
  return (
    <>
      <ModalStyle
        title={<h1>{title}</h1>}
        open={open}
        onCancel={close}
        footer={null}
      >
        {children}
      </ModalStyle>
    </>
  );
};

export default Modal;