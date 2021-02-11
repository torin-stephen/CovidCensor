replaceText(document.body)


function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText)
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/coronavirus | covid/gi)) {
      element.parentElement.style.color = 'black'
      element.parentElement.style.backgroundColor = 'black'
      
    }
    element.textContent = element.textContent.replace(/coronavirus | covid/gi,
        '▇▇▇')
  }
}