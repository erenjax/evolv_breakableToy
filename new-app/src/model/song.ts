
export type Song = "Duck" | "Tron"

// export const togglePlaying = (activeSong: Song, setActiveSong: React.Dispatch<React.SetStateAction<Song>>) => {
//   if (!activeSong.playing) {
//     console.log("play")
//     activeSong.song.play()
//     setActiveSong(previous => ({...previous, playing: true}))
//   } else {
//     console.log("pause")
//     activeSong.song.pause()
//     setActiveSong(previous => ({...previous, playing: false}))
//   }
// }
//
// export const toggleSong = (activeSong: Song, setActiveSong: React.Dispatch<React.SetStateAction<Song>>, song1: Song, song2: Song) => {
//   console.log({activeSong})
//   console.log({song1}, {song2})
//   activeSong.song.pause()
//   setActiveSong(previous => ({...previous, playing: false}))
//   if (activeSong.kind === song1.kind) {
//     setActiveSong(song2)
//     console.log("change to song2")
//   } else {
//     setActiveSong(song1)
//     console.log("change to song1")
//   }
//   console.log({activeSong})
// }
//
//
