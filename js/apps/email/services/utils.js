export function getRandomID() {
    let letters = '1234567890QWERTYUIOPLKJHGFDSAZXCVBNMpoiiytreqwasdfghjklmnbvcxxssersgyushquiz';
    let id = '';
    for (let i = 0; i < 10; i++) {
        let ind = Math.floor(Math.random() * letters.length)
        id += letters[ind];
    }
    return id;
}