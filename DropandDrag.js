var upload = document.querySelector('#mypicture')
var preview = document.querySelector('.preview')

upload.addEventListener('change', function(e){
    var file = upload.files[0]
    if (!file) return
    if (!file.name.endsWith('.jpg') ) {
        console.log('Chi nhan file jpg')
        return
    }
    if (file.size / (1024*1024) > 5) { 
        console.log('Chi nhan < 5MB')
        return 
    }

    var fileReader = new FileReader(file)
    var img = document.createElement('img')

    fileReader.readAsDataURL(file)
    img.src = URL.createObjectURL(upload.files[0])
    fileReader.onloadend = function(e) {
        console.log('load ok', e.target.result)
        img.src = e.target.result
    }
    preview.append(img)
})