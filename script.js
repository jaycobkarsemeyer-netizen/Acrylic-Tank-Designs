const svg = document.getElementById("canvas");

function addRectangle() {

    const width =
        Number(document.getElementById("rectWidth").value);

    const height =
        Number(document.getElementById("rectHeight").value);

    const radius =
        Number(document.getElementById("rectRadius").value);

    const rect =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "rect"
        );

    rect.setAttribute("x", 100);
    rect.setAttribute("y", 100);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);

    rect.setAttribute("rx", radius);
    rect.setAttribute("ry", radius);

    rect.setAttribute("fill", "none");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("stroke-width", "2");

    svg.appendChild(rect);
}

function addCircle() {

    const diameter =
        Number(document.getElementById("circleDiameter").value);

    const circle =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
        );

    circle.setAttribute("cx", 400);
    circle.setAttribute("cy", 250);
    circle.setAttribute("r", diameter / 2);

    circle.setAttribute("fill", "none");
    circle.setAttribute("stroke", "blue");
    circle.setAttribute("stroke-width", "2");

    svg.appendChild(circle);
}
