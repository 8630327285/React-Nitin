function customRender(reactElement, container) {
  /*// Create the DOM element based on the type
  const domElement = document.createElement(reactElement.type);

  // Set the text content (not innerHTML for safety)
  domElement.textContent = reactElement.children;

  // Set attributes if they exist
  if (reactElement.props) {
    if (reactElement.props.href) {
      domElement.setAttribute('href', reactElement.props.href);
    }
    if (reactElement.props.target) {
      domElement.setAttribute('target', reactElement.props.target);
    }
  }

  // Append the created DOM element to the container
  container.appendChild(domElement);
    */
  const domElement = document.createElement(reactElement.type);

  // Set the text content (not innerHTML for safety)
  domElement.textContent = reactElement.children;

  // Loop through props and set attributes
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // Append the created DOM element to the container
  container.appendChild(domElement);
}

// React-like element structure
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click me to visit Google',
};

// DOM container
const mainContainer = document.querySelector('#root');

// Call the custom render function
customRender(reactElement, mainContainer);
