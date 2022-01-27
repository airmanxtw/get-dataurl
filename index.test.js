const getDataUrl = require("./index.js");

test('go test', done => {
    // callback = (data) => {
    //     //expect(data).toEqule("data:text/plain;base64,dGVzdCB0ZXh0");
    //     console.log('start...');
    //     expect(data).toBe(1);
    //     done();
    // }

   

    var oMyBlob = new Blob(["test text"], { type: 'text/plain' });
    var file = new File(["test text"], "abc.txt",{ type: 'text/plain' });    

    getDataUrl(file, callback);
});