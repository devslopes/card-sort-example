const $sortButton = document.querySelector("#sort-alphabetically-button")

$sortButton.addEventListener("click", () => {
  const $cards = document.querySelectorAll(".card")
  const cards = [...$cards]

  cards.sort((cardA, cardB) => {
    const textA = cardA.querySelector("h1").innerText
    const textB = cardB.querySelector("h1").innerText
    // const textA = cardA.innerText;
    // const textB = cardB.innerText;
    if(textA > textB){
      return 1
    }
    if(textA < textB){
      return -1
    }
    return 0
  })

  const $cardContainer =  document.querySelector("#card-container")
  $cardContainer.innerHTML = ""
 
  cards.forEach(card => {
    $cardContainer.append(card)
  })



})