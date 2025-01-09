export const formatFileSize = (size: number) => {
    if (size === 0) return '0 B';

    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(size) / Math.log(1024));

    const fileSize = (size / 1024 ** i).toFixed(1);

    return `${fileSize}${sizes[i]}`;
};

export const getCurrentTime = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = now.getFullYear();
    
    return `${day}/${month}/${year}`;
};


