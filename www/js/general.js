function capturePhoto(){
    navigator.camera.getPicture(photoSuccess, photoError);
}

function photoSuccess(data){
    document.getElementById('cameraPic').src = data;
}

function photoError(data){
    alert('Error capturing photo .. :(');
}