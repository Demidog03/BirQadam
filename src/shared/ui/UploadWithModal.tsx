import { FC, useEffect, useState } from 'react';
import { GetProp, message, Modal, Upload, UploadFile, UploadProps } from 'antd';
import { BiPlus } from 'react-icons/bi';
import { useUpdateEffect } from 'usehooks-ts';

interface UploadWithModalProps {
  maxCount?: number
  allowedFileTypes?: string[]
  handleUploadFinished: (file: UploadFile[]) => void
}
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const UploadWithModal: FC<UploadWithModalProps> = ({ maxCount = 5, allowedFileTypes = [], handleUploadFinished }) => {
  const [previewTitle, setPreviewTitle] = useState<string>('')
  const [previewOpen, setPreviewOpen] = useState<boolean>(false)
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([])
  
  useEffect(() => {
    return () => {
      setFileList([])
    }
  }, [])

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <BiPlus />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => { resolve(reader.result as string); };
      // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
      reader.onerror = (error) => { reject(error); };
    });

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url?.substring(file.url.lastIndexOf('/') + 1) || '');
  };

  const handleUpload: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  }

  const handleCancel = () => { setPreviewOpen(false); };

  const beforeUpload = (file: UploadFile) => {
    for (const allowedFileType of allowedFileTypes) {
      const isAllowed = file.type === allowedFileType;
      if (!isAllowed) {
        void message.error(`Разрешены только следующие типы файлов: "${allowedFileTypes.join(', ')}"`);
      }
      return isAllowed || Upload.LIST_IGNORE;
    }
    return true;
  }
  
  useEffect(() => {
    let isFilesUploadFinished: boolean = true
    if(fileList.length < 1) {
      isFilesUploadFinished = false
    }
    else {
      for (const file of fileList) {
        if (file.status !== 'done') {
          isFilesUploadFinished = false
          break
        }
      }
    }
    if(isFilesUploadFinished) {
      handleUploadFinished(fileList)
    }
  }, [fileList, handleUploadFinished])

  return (
    <>
      <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-circle"
        onPreview={handlePreview}
        onChange={handleUpload}
        maxCount={maxCount}
        beforeUpload={beforeUpload}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default UploadWithModal;