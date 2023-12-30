/*
automate save as or export with sequential file names
https://community.adobe.com/t5/photoshop/automate-save-as-or-export-with-sequential-file-names/td-p/9003836

2020 - Original script modified to remove the original filename from the sequential output file
https://forums.adobe.com/message/4453915#4453915

2023 - script modified by Sumit Mangela to suit the current project
*/

#target photoshop

main();

function main() {
    if (!documents.length) return;
    try {
        var savePath = activeDocument.path;
    } catch (e) {
        alert("You must save this document first!");
    }
    var fileList = savePath.getFiles("*.jpg").sort().reverse();
    var Suffix = 0;
    if (fileList.length) {
        Suffix = Number(fileList[0].name.replace(/\.[^\.]+$/, '').match(/\d+$/));
    }
    Suffix = zeroPad(Suffix + 1, 4);
    var saveFile = File(savePath + "/" + Suffix + ".jpg");
    SaveJPEG(saveFile, 4); // JPEG compression level
}

function SaveJPEG(saveFile, jpegQuality) {
    jpgSaveOptions = new JPEGSaveOptions();
    jpgSaveOptions.embedColorProfile = true;
    jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
    jpgSaveOptions.matte = MatteType.NONE;
    jpgSaveOptions.quality = jpegQuality;
    activeDocument.saveAs(saveFile, jpgSaveOptions, true, Extension.LOWERCASE);
}

function zeroPad(n, s) {
    n = n.toString();
    while (n.length < s) n = '0' + n;
    return n;
}