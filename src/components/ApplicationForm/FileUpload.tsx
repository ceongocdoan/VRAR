import React, { useState } from 'react';

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      setSelectedFile(files[0]);
      onFileSelect(files[0]); // Cập nhật file cho component cha
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    onFileSelect(null); // Xóa file trong component cha
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragOver(false);
    const files = event.dataTransfer.files;
    if (files && files[0]) {
      setSelectedFile(files[0]);
      onFileSelect(files[0]); // Cập nhật file cho component cha
    }
  };

  return (
    <label
      htmlFor="file-upload"
      className={`flex flex-col justify-center p-9 mt-6 w-full bg-white border border-gray-500 border-dashed rounded-[36px] max-md:px-5 max-md:max-w-full cursor-pointer ${isDragOver ? 'bg-gray-100' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {selectedFile ? (
        <div className="text-center">
          <p className="text-lg font-semibold text-slate-700">File đã chọn:</p>
          <p className="text-gray-500 mt-2">{selectedFile.name}</p>
          <button
            type="button"
            onClick={removeFile}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
          >
            Loại bỏ
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex gap-2.5 items-center self-center p-2 w-12 h-12 bg-gray-500 rounded-2xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/03432392ab03f32f1873196e226069e29330257a58ca349cf08cf77e37843c5b?placeholderIfAbsent=true&apiKey=7ca6603eb45445888c22e9631ef00b6e"
              alt=""
              className="object-contain self-stretch my-auto w-8 aspect-square"
            />
          </div>
          <div className="flex flex-col items-center w-full text-lg leading-7 text-center mt-3 max-md:max-w-full">
            <p className="font-semibold text-slate-700 max-md:max-w-full">
              Nhấn để tải tệp lên (tối đa 3MB)
            </p>
            <p className="text-gray-500 max-md:max-w-full">
              hoặc kéo và thả tệp vào ô này
            </p>
          </div>
        </div>
      )}

      <input
        id="file-upload"
        type="file"
        className="hidden"
        accept=".pdf, .png, .jpg"
        onChange={handleFileChange}
      />

      {!selectedFile && (
        <div className="flex gap-1.5 justify-center items-center mt-8 w-full max-md:max-w-full">
          <span className="self-stretch my-auto text-sm leading-5 text-slate-600">
            Định dạng tệp:
          </span>
          <div className="flex gap-1 items-center self-stretch my-auto text-lg leading-7 text-gray-500 whitespace-nowrap">
            <span className="gap-2.5 self-stretch px-2 py-1 my-auto bg-sky-100 rounded-xl">
              .pdf
            </span>
            <span className="gap-2.5 self-stretch px-2 py-1 my-auto bg-sky-100 rounded-xl">
              .png
            </span>
            <span className="gap-2.5 self-stretch px-2 py-1 my-auto bg-sky-100 rounded-xl">
              .jpg
            </span>
          </div>
        </div>
      )}
    </label>
  );
};

export default FileUpload;
