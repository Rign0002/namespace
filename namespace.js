var RIGN0002 = {
    init: function () {
        let newDiv = document.createElement("div");
        newDiv.className = "box";
        newDiv.textContent = "RIGN0002";
        let boxes = document.getElementById("boxes");
        boxes.appendChild(newDiv);
        
        newDiv.addEventListener("click", function () {
            newDiv.style.borderColor = "#7aff51";
            newDiv.style.backgroundColor = "#a87323";
            newDiv.style.color = "white";
        });

        newDiv.addEventListener("mouseover", function () {

            newDiv.classList.toggle("highlight");

        });

        newDiv.addEventListener("mouseout", function () {

            newDiv.classList.toggle("highlight");
            newDiv.removeAttribute('style');
        });

    }
};
