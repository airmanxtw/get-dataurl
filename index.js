const getDataUrl = (file, callback) => {
    const reader = new FileReader();
    // reader.addEventListener(
    //     "load", () => {
    //         callback(reader.result);
    //     },
    //     false
    // );
    reader.onload = () => {
        callback(reader.result);
    };
    reader.readAsDataURL(file);
};
module.exports = getDataUrl;