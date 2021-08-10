export const sepeteEkle = book => {
    return { type:'SEPETE_EKLE', payload: book }
}
export const sepetteEksilt = book => {
    return { type:'SEPETTE_EKSİLT', payload: book }
}
export const sepettenCıkar = book => {
    return { type:'SEPETTEN_CIKAR', payload: book }
}