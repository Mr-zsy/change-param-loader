
exports.__esModule = true;
module.exports = function(source) {
    var path =  this.resourcePath.slice(this.resourcePath.indexOf('src')+3);
    var resultSource = source.replace(/@FILE_PATH@/g, path);
    this.callback(null, resultSource);
}