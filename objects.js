var playlist = {artist: "song"}


function updatePlaylist(playlist,targetObject, updatesObject) {
  return playlist.assign({}, targetObject, updatesObject)
}
