const fetchAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice")
  const formattedResponse = await response.json()
  return formattedResponse.slip
}

const fillTile = ({id, advice}) => {
  const tileContent = document.getElementById("tile")

  const header = document.createElement("h1")
  header.textContent = `"${advice}"`
  header.classList.add("advice-text")
  header.setAttribute("id", "advice-text")
  tileContent.prepend(header)
 
  const paragraph = document.createElement("p")
  paragraph.textContent = `ADVICE #${id}`
  paragraph.classList.add("tile-index")
  paragraph.setAttribute("id", "tile-index")
  tileContent.prepend(paragraph)
}

const removeOldAdvice = () => {
  const paragraph = document.getElementById("tile-index")
  const header = document.getElementById("advice-text")
  paragraph.remove()
  header.remove()
}

const fetchAndFill = async () => {
  fetchAdvice()
    .then(adviceObject => fillTile(adviceObject))
  }

const refetchAdvice = async () => {
  fetchAndFill()
  removeOldAdvice()
}

const button = document.getElementById("button")
button.addEventListener("click", refetchAdvice)

fetchAndFill()
