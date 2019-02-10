var noiseWindow

startNoise = () => {
  noiseWindow = window.open('https://www.google.com/search?btnI&q=')
  change_noise = () => {
    let noun1 = nouns[Math.floor(Math.random() * nouns.length)]
    let noun2 = nouns[Math.floor(Math.random() * nouns.length)]
    let noun3 = nouns[Math.floor(Math.random() * nouns.length)]
    let url = "https://www.google.com/search?btnI&q=" + noun1 + " " + noun2 + " " + noun3 + " "
    noiseWindow.location.href = url
    setTimeout(() => {
      change_noise()
    }, Math.floor(Math.random() * 30000));
  }
  change_noise()
}

stopNoise = () => {
  noise_win.close()
}

document.getElementById('start').addEventListener("click", startNoise)
document.getElementById('stop').addEventListener("click", stopNoise)

