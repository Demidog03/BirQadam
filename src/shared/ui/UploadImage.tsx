import { Flex, Image, Input, message } from 'antd';
import { ChangeEvent, FC, ReactNode } from 'react'
import { convertFileToBase64, isFileTypeSupported } from '../lib/utils';
import styled from 'styled-components';
import { COLORS } from '../lib/constants';

const FlexStyle = styled(Flex)`
  width: 100%;
  @media(max-width: 545px) {
    flex-direction: column;
  }
`
const LabelStyle = styled('label')`
  max-height: 24px;
  font-size: 14px;
  margin-left: 4px; 
  color: ${COLORS.PRIMARY[5]};
  cursor: pointer;
  display: flex;
  align-items: center;
`

const SpanStyle = styled('span')`
  white-space: nowrap;
  border-bottom: 2px solid ${COLORS.PRIMARY[5]};
  @media(max-width: 510px) {
    font-size: 12px;
  }
`

interface UploudProps {
  label: string
  image: string
  setImage: (image: string) => void
  leftContent?: ReactNode
}

const UploadImage: FC<UploudProps> = ({ label, image, setImage, leftContent }) => {
  const getImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      void message.error('Выберите файл для загрузки.');
      return;
    }

    if (!isFileTypeSupported(file.type, ['image/png', 'image/jpeg', 'image/gif'])) {
      void message.error('Только следующие форматы поддерживаются: PNG, JPEG, GIF');
      return;
    }

    convertFileToBase64(file, (result => {
      if ('error' in result) {
        void message.error(result.error);
      }
      else {
        setImage(result.image);
      }
    }))
  }
  return (
    <FlexStyle justify='space-between'>
      <LabelStyle htmlFor="teamLogo">
        <Flex align='center' style={{ width: '21px', height: '24px', marginRight: '4px' }}>{leftContent}</Flex>
        <SpanStyle>{label}</SpanStyle>
      </LabelStyle>
      <Input
        style={{ width: 0, visibility: 'hidden', padding: 0 }}
        id='teamLogo'
        type='file'
        onChange={getImage}
        accept=".png,.jpg,.jpeg,.gif"
      />
      <Image src={image} width={168} style={{ borderRadius: '10px' }} />
    </FlexStyle>
  );
};

export default UploadImage;