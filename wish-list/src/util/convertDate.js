export const toIso = date =>{
    let t = new Date();
    if (date !== undefined) {
      t = new Date(date);
    }

    let iso = t.toLocaleString();
    
    return iso.slice(0, 16);

}