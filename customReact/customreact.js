
function customRender(reactElements,container){
    // const domElement = document.createElement(reactElements.type)
    // domElement.innerHTML = reactElements.Children
    // domElement.setAttribute('href',reactElements.props.href)
    // domElement.setAttribute('target',reactElements.props.target)

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElements.type)
    domElement.innerHTML = reactElements.Children
    for (const prop in reactElements.props) {
      if(prop === 'Children') continue
      domElement.setAttribute(prop, reactElements.props[prop])
    }
    container.appendChild(domElement)

}

const reactElements = {
    type: 'a',
    props:{
        href: "https://google.com",
        target : "_blank",
    },
    Children: "click me to visit google"
}

const mainContainer =document.querySelector('#root')

customRender(reactElements,mainContainer)