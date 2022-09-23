export function imageSave(imgBase64, filename) {
    const link = document.createElement('a');
    const blob = base64ToBlob(imgBase64)
    const event = document.createEvent("HTMLEvents")
    event.initEvent("click", true, true)
    link.download = filename
    link.href = URL.createObjectURL(blob)
    link.click()
}

function base64ToBlob(code) {
    const parts = code.split(";base64,");
    const contentType = parts[0].split(':')[1]
    const raw = window.atob(parts[1])
    const rawLength = raw.length
    const uint8Array = new Uint8Array(rawLength)
    for (let i = 0 ; i < rawLength; i++) {
        uint8Array[i] = raw.charCodeAt(i)
    }
    return new Blob([uint8Array], {type: contentType})
}