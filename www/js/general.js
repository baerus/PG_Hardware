function capturePhoto(){
    navigator.camera.getPicture(photoSuccess, photoError, { quality: 50, destinationType: Camera.DestinationType.FILE_URI});
}

function photoSuccess(data){
    alert(data);
    document.getElementById('cameraPic').src = data;
}

function photoError(data){
    alert('Error capturing photo .. :(');
    alert(data);
}