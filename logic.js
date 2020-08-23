localContainer = document.getElementById('localVideoTileViewContainer');

if (localContainer) {
    localContainer.remove();
}

remoteVideosContainer = document.getElementById('filmstripRemoteVideosContainer');
if (remoteVideosContainer) {
    remoteVideosContainer.style.display = 'flex';
    remoteVideosContainer.style.flexDirection = 'column';
}
