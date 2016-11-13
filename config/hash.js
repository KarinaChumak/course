const crypto = require('crypto');

const serverSalt = "45%sAlT_";

exports.sha512= function (password){
    const hash = crypto.createHmac('sha512', serverSalt);
    hash.update(password);
    const value = hash.digest('hex');
    return {
        salt: serverSalt,
        passwordHash: value
    };
};