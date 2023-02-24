//아이템6
//1
let num = 10;

//2
function add(a: number, b: number) {
  return a + b;
}

//3
function logMessage(message: string | null) {
  if (message) {
    message;
  }
}

//4
const foo = {
  x: [1, 2, 3],
  bar: {
    name: 'Fred',
  },
};

//5
function restOfPath(path: string) {
  return path.split('/').slice(1).join('/');
}

//6
function getElement(elOrId: string | HTMLElement | null): HTMLElement {
  if (typeof elOrId === 'object') {
    return elOrId;
  } else if (elOrId === null) {
    return document.body;
  } else {
    const el = document.getElementById(elOrId);
    return el;
  }
}

//7
const res = fetch('http://example.com');
