function render() {
    // const el=document.createElement(reactElement.type)
    // el.innerText=reactElement.children
    // el.setAttribute('href',reactElement.props.href)
    // el.setAttribute('target',reactElement.props.target)

    // mainContainer.appendChild(el)
    // console.log('React element rendered')
 
    const el=document.createElement(reactElement.type)
    el.innerText=reactElement.children
    for(const prop in reactElement.props){
        el.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(el)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Google <>',
}
const mainContainer = document.querySelector('#root')

render(reactElement, mainContainer)