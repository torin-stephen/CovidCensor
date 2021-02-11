replaceText(document.body)


function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText)
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/covid/gi)) {
      element.parentElement.style.color = 'black'
      element.parentElement.style.backgroundColor = 'black'
      
    }
    element.textContent = element.textContent.replace(/covid/gi,
        '▇▇▇')
  }
}