
function _getContent(_name) {
    return `
module.exports = {
    "get": {
        "500": "We have done somthing wrong, we are looking into it."
    },
    "post": {
        "500": "We have done somthing wrong, we are looking into it."
    },
    "put": {
        "404": "Document not found",
        "500": "We have done somthing wrong, we are looking into it."
    },
    "delete": {
        "404": "Document not found",
        "500": "We have done somthing wrong, we are looking into it."
    },
    "error": {
        "401": "You are not authorised to access the information.",
        "404": "It seems that you looking for something at the wrong place.",
        "500": "We have done somthing wrong, we are looking into it."
    }
};
`;
}


module.exports.getContent = _getContent;