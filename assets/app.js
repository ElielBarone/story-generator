
function onGenerate(blob){        
    var date = new Date();    
    window.saveAs(blob, 'story' + date.getMinutes() + "-" + date.getSeconds() +'.png');      
}


function generateBanner(){    
    setTimeout(donwloadBanner, 500);    
}


function donwloadBanner(){
    var node = document.getElementById('story');

    domtoimage.toBlob(node)
        .then(onGenerate)
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
}


function previewImage(event) {
    var output = document.getElementById('picture-preview');
    output.src = URL.createObjectURL(event.target.files[0]);
    
}