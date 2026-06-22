const svg = document.getElementById("canvas");

function addRectangle() {
    const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );

    rect.setAttribute("x", 100);
    rect.setAttribute("y", 100);
    rect.setAttribute("width", 200);
    rect.setAttribute("height", 100);
    rect.setAttribute("fill", "none");
    rect.setAttribute("stroke", "black");

    svg.appendChild(rect);
}

function addCircle() {
    const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
    );

    circle.setAttribute("cx", 300);
    circle.setAttribute("cy", 300);
    circle.setAttribute("r", 50);
    circle.setAttribute("fill", "none");
    circle.setAttribute("stroke", "blue");

    svg.appendChild(circle);
}
