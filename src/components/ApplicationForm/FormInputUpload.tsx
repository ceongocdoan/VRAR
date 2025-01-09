import React, { useRef, useState, useEffect } from "react";
import Button from "../UI/UI/Buttons";

import AlertIcon from "../../assets/icons/alert-circle.svg";
import FileUploadIcon from "../../assets/icons/upload-file.svg";
import RemoveFileIcon from "../../assets/icons/x-close.svg";
import UploadCloudIcon from '../../assets/icons/upload-cloud-02.svg';
import CheckIcon from '../../assets/icons/check.svg';

import { uploadFile } from "../../library/file";
import { formatFileSize, getCurrentTime } from "../../library/format";

interface FormInputUploadProps {
  onUploaded: (fileUrl: string) => void;
}

const FormInputUpload: React.FC<FormInputUploadProps> = ({ onUploaded }) => {
  const [uploadStatus, setUploadStatus] = useState<boolean | null>(null);
  const [pendingUpload, setPendingUpload] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Thêm biến lỗi
  const inputFileRef = useRef<HTMLDivElement>(null);
  var uploadInterval: NodeJS.Timeout | null = null;

  const allowedFileTypes = ["image/png", "application/pdf", "image/jpeg"];

  const handleDragOver = () => {
    if (inputFileRef.current) {
      inputFileRef.current.setAttribute("aria-pressed", "true");
    }
  };

  const handleDragLeave = () => {
    if (inputFileRef.current) {
      inputFileRef.current.setAttribute("aria-pressed", "false");
    }
  };

  const validateFileType = (file: File) => {
    return allowedFileTypes.includes(file.type);
  };

  const handleChangeInput = (event: React.ChangeEvent) => {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      const selectedFile = input.files[0];
      if (validateFileType(selectedFile)) {
        setFile(selectedFile);
        setErrorMessage(null);
      } else {
        setErrorMessage("Chỉ được phép tải lên tệp định dạng .png, .pdf, .jpeg");
      }
    }
  };

  const handleDropFile = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleDragLeave();
    if (event.dataTransfer.files) {
      const droppedFile = event.dataTransfer.files[0];
      if (validateFileType(droppedFile)) {
        setFile(droppedFile);
        setErrorMessage(null);
      } else {
        setErrorMessage("Chỉ được phép tải lên tệp định dạng .png, .pdf, .jpeg");
      }
    }
  };

  // Upload function
  const handleUploadFile = async () => {
    setPendingUpload(true);
    setUploadStatus(null);
    setUploadProgress(0);

    // Upload progress
    let progress = 0;
    uploadInterval = setInterval(() => {
      setUploadProgress(progress);
      if (progress >= 98) {
        clearInterval(uploadInterval!)
      }
      progress += 1
    }, 50);

    if (file) {
      try {
        const uploadFileUrl = await uploadFile(file);
        if (uploadFileUrl) {
          onUploaded(uploadFileUrl); // handle after uploaded
          setUploadStatus(true);
          clearInterval(uploadInterval!)
          setUploadProgress(100);
        } else {
          handleCancelUpload();
          setUploadStatus(false);
        }
      } catch (error) {
        handleCancelUpload();
        setUploadStatus(false);
      }
    }
  };

  // Cancel upload file
  const handleCancelUpload = () => {
    setUploadStatus(null);
    setPendingUpload(false);
    setUploadProgress(0);
    setFile(null);
    onUploaded('');
  };

  useEffect(() => {
    if (file) handleUploadFile();
  }, [file])

  return (
    <div className="flex flex-col gap-2">
      <div
        className="relative group rounded-[36px] hover:shadow-xl bg-white transition-shadow"
        aria-pressed={false}
        data-upload-status={uploadStatus}
        onDragEnter={handleDragOver}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDropFile}
        ref={inputFileRef}
      >
        {/* Drop zone */}
        {!pendingUpload && (
          <div className="absolute flex justify-center items-center size-full inset-0 flex-col gap-4 opacity-0 group-aria-pressed:opacity-100 bg-[#3644F5] rounded-[36px]">
            <div className="size-12 p-2 rounded-2xl text-[#3644F5] bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
              >
                <path
                  d="M11.168 21.3333L16.5013 16M16.5013 16L21.8346 21.3333M16.5013 16V28M27.168 22.3238C28.7966 20.9787 29.8346 18.9439 29.8346 16.6667C29.8346 12.6166 26.5514 9.33333 22.5013 9.33333C22.21 9.33333 21.9374 9.18133 21.7895 8.93032C20.0507 5.97978 16.8405 4 13.168 4C7.64512 4 3.16797 8.47715 3.16797 14C3.16797 16.7548 4.2819 19.2494 6.0839 21.058"
                  stroke="currentColor"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-3xl leading-[126.667%] font-bold text-white">
              Thả tệp vào đây!
            </p>
          </div>
        )}
        {/* Input file */}
        {!pendingUpload && (
          <input
            type="file"
            className="absolute inset-0 size-full opacity-0 cursor-pointer"
            onChange={handleChangeInput}
          />
        )}
        {/* Default display */}
        <div className="flex flex-col justify-center items-center gap-4 p-12 size-full rounded-[36px] outline-1 outline-offset-[-2px] outline-dashed outline-[#667085] group-hover:outline-[#3644F5] group-hover:outline-2 group-data-[upload-status=false]:outline-[#F04438] group-data-[upload-status=true]:outline-[#4460FF] group-data-[upload-status=true]:bg-[#ECF3FF]">
          <div className="size-12 p-2 rounded-2xl text-white bg-[#667085] group-data-[upload-status=true]:bg-[#17B26A]">
            <img src={UploadCloudIcon} alt="" className="group-data-[upload-status=true]:hidden" />
            <img src={CheckIcon} alt="" className="hidden group-data-[upload-status=true]:block" />
          </div>
          {!pendingUpload && (
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="text-3xl leading-[126.667%] font-bold text-[#344054] text-center">
                <p className="max-md:hidden">Kéo thả hồ sơ vào đây!</p>
                <p className="md:hidden">Hồ sơ của bạn</p>
              </div>
              <div className="text-[#475467] text-center">
                <p>Định dạng tệp .pdf, .png, .jpg</p>
                <p>Kích thước tệp tối đa 3MB.</p>
              </div>
              <Button variant="tertiary" defaltIcon={false}>
                <div className="my-auto px-4 group-data-[upload-status=false]:hidden">
                  Tải tệp lên
                </div>
                <div className="my-auto px-4 hidden group-data-[upload-status=false]:block">
                  Tải lại
                </div>
              </Button>
            </div>
          )}
          {pendingUpload && (
            <div className="flex flex-col gap-4 w-full">
              <p className="text-3xl leading-[126.667%] font-bold text-[#344054] text-center group-data-[upload-status=true]:hidden">
                Tệp đang tải lên...
              </p>
              <p className="hidden text-3xl leading-[126.667%] font-bold text-[#344054] text-center group-data-[upload-status=true]:block">
                Tải tệp lên thành công!
              </p>
              <div className="flex flex-col gap-4 p-4 rounded-3xl shadow-lg bg-white border border-transparent group-data-[upload-status=true]:border-[#17B26A]">
                <div className="flex justify-between">
                  <div className="flex gap-2 max-w-[calc(100%-24px)]">
                    <img src={FileUploadIcon} alt="" />
                    <div className="flex flex-col gap-1 truncate">
                      <p className="text-[#344054] truncate">
                        {file?.name}
                      </p>
                      <p className="flex gap-8 text-[#667085]">
                        <span>{file?.size && formatFileSize(file?.size)}</span>
                        <span>{getCurrentTime()}</span>
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="shrink-0"
                    onClick={handleCancelUpload}
                  >
                    <img src={RemoveFileIcon} alt="" />
                  </button>
                </div>
                <div className="h-2 py-0.5 relative group-data-[upload-status=true]:hidden">
                  <div className="w-full h-1 bg-[#D0D5DD] rounded-sm" />
                  <div
                    className="absolute top-0.5 h-1 bg-[#3644F5] rounded-sm transition-all duration-500 border border-transparent"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {uploadStatus === false && (
        <div className="flex gap-2 p-2 rounded-[36px] border border-[#F04438] bg-[#FEE4E2]">
          <img src={AlertIcon} alt="" />
          Lỗi tải lên tệp
        </div>
      )}
      {errorMessage && (
        <div className="flex gap-2 p-2 rounded-[36px] border border-[#F04438] bg-[#FEE4E2]">
          <img src={AlertIcon} alt="" />
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default FormInputUpload;
