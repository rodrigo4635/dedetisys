const crypto = require("crypto");
const expressJwt = require("express-jwt");
const { TOKEN_SECRET } = require("./env");

exports.authMiddleware = expressJwt({ secret: TOKEN_SECRET, algorithms: ["HS256"] });

exports.encryptSHA256 = function(input) {
    if (typeof input != 'undefined') {
        return crypto.createHash("sha256").update(input).digest("hex");
    } else {
        return false;
    }
};
