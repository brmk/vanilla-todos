export const r = (tag, props, ...children) => {
  if (typeof tag === "function") return tag(props);

  const element = document.createElement(tag);

  if (typeof props === "object") {
    setAttributes(element, props);
  }

  appendChildren(children, element);
  function appendChildren(children, parent) {
    children.forEach(childNode => {
      if (Array.isArray(childNode)) appendChildren(childNode, parent);
      else element.append(childNode);
    });
  }

  return element;
};

/*
  @param descriptor.tag {string} 
  @param descriptor.attributes {object}
  @param descriptor.textContent {string}
  @param descriptor.children {array}
  @param descriptor.eventListeners {object}
  @param descriptor.eventListeners.[$] {function}, $ - name of the event to listen to

  @returns Node
*/
export const getRenderableComponent = descriptor => {
  const { tag, attributes, textContent, children, eventListeners } = descriptor;

  const element = document.createElement(tag);
  if (typeof attributes === "object") {
    setAttributes(element, attributes);
  }

  if (typeof eventListeners === "object") {
    setEventListeners(element, eventListeners);
  }

  if (typeof textContent === "string") {
    element.textContent = textContent;
  } else if (Array.isArray(children)) {
    children.forEach(childDescriptor => {
      const childNode = getRenderableComponent(childDescriptor);
      element.append(childNode);
    });
  }

  return element;
};

export function setAttributes(el, attrs) {
  for (let key in attrs) {
    if (/^on.*$/.test(key)) {
      el.addEventListener(key.substring(2).toLowerCase(), attrs[key]);
    } else {
      el.setAttribute(key, attrs[key]);
    }
  }
}

export function setEventListeners(el, listeners) {
  for (let eventName in listeners) {
    el.addEventListener(eventName, listeners[eventName]);
  }
}

export function render(container, renderer) {
  container.innerHTML = "";
  console.log(renderer);
  container.append(renderer);
}
