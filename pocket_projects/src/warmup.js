
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const p = document.createElement("p");
    p.innerHTML = string;

    if (htmlElement.children.length !== 0) {
        Array.from(htmlElement.children).forEach(child => htmlElement.removeChild(child));
    }
    
    htmlElement.appendChild(p);
};

htmlGenerator('Party Time.', partyHeader);