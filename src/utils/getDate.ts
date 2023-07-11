export const getDate = (date:string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('pt-br', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}