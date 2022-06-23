const replaces = {
  'Biscuits': /cookies/gi,
  'Biscuit': /cookie/gi
}

let replaceCookies = () => {
  for (const replacesKey in replaces) {
    replaceInText(document.body, replaces[replacesKey], replacesKey)
  }
}

function replaceInText(element, pattern, replacement) {
  for (let node of element.childNodes) {
    switch (node.nodeType) {
      case Node.ELEMENT_NODE:
        replaceInText(node, pattern, replacement);
        break;
      case Node.TEXT_NODE:
        node.textContent = node.textContent.replace(pattern, replacement);
        break;
      case Node.DOCUMENT_NODE:
        replaceInText(node, pattern, replacement);
    }
  }
}

document.addEventListener('DOMContentLoaded', replaceCookies, false);
