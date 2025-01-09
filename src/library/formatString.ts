export const formatDate = (date: string, format: 'dd.mm' | 'yyyy' | 'dd.mm.yyyy' = 'dd.mm.yyyy') => {
    const dateParts = date.split('T')[0].split('-');
    if (format === 'dd.mm') {
        return `${dateParts[2]}.${dateParts[1]}`;
    } else if (format === 'yyyy') {
        return dateParts[0];
    }
    return `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;
}

export const addDomainUrl = (path: string) => {
    return `${process.env.GATSBY_API_URL}${path}`
}