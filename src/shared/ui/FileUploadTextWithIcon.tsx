import React, { forwardRef, HTMLAttributes, ChangeEvent, useRef, ReactNode } from 'react';

interface FileUploadTextWithIconProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  titleClassName?: string;
  icon?: ReactNode;
  iconClassName?: string;
  onClick?: () => void;
  onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
}

const FileUploadTextWithIcon = forwardRef<HTMLDivElement, FileUploadTextWithIconProps>(
  ({ className, title, titleClassName, icon, iconClassName, onClick, onDrop, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      console.log('Выбранный файл:', file);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      console.log('Перетащенный файл:', file);
    };

    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.click();
      }
    };

    return (
      <div
        ref={ref}
        className={`inline-flex items-center justify-between w-auto ${className}`}
        onClick={onClick || handleClick}
        onDrop={onDrop || handleDrop}
        onDragOver={(e) => { e.preventDefault(); }}
        {...props}
      >
        <div className="flex items-center">
          {icon && (
            <div className="flex items-center justify-center w-8 h-8">
              <div className={`text-[#5D7285] ${iconClassName}`}>
                {icon}
              </div>
            </div>
          )}
          <span className={`text-[#4F7596] font-public-sans font-normal text-base leading-6 underline ${titleClassName}`}>
            {title}
          </span>
        </div>
        <input
          type="file"
          ref={inputRef}
          className="hidden"
          onChange={handleInputChange}
        />
      </div>
    );
  }
);

FileUploadTextWithIcon.displayName = 'FileUploadTextWithIcon';

export default FileUploadTextWithIcon;
