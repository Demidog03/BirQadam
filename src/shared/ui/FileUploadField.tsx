import React, { forwardRef, HTMLAttributes, ChangeEvent, useRef, ReactNode } from 'react';

interface FileUploadFieldProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  onClick?: () => void;
  onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
  inputClassName?: string;
  iconClassName?: string;
}

const FileUploadField = forwardRef<HTMLDivElement, FileUploadFieldProps>(
  ({ className, icon, onClick, onDrop, inputClassName, iconClassName, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (event: Event) => {
      const fileInputEvent = event as unknown as ChangeEvent<HTMLInputElement>;
      const file = fileInputEvent.target.files?.[0];
      console.log('Выбранный файл:', file);
      return;
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
        className={`inline-flex items-center justify-center w-28 h-28 rounded-xl border border-solid border-[#D1DBE8] ${className}`}
        onClick={onClick || handleClick}
        onDrop={onDrop || handleDrop}
        onDragOver={(e) => { e.preventDefault(); }}
        {...props}
      >
        <input
          type="file"
          ref={inputRef}
          className={`hidden ${inputClassName}`}
          onChange={handleInputChange as unknown as (event: ChangeEvent<HTMLInputElement>) => void}
        />
        {icon && React.cloneElement(icon as React.ReactElement, { className: `text-[#5D7285] w-14 h-14 ${iconClassName}` })}
      </div>
    );
  }
);

FileUploadField.displayName = 'FileUploadField';

export default FileUploadField;
