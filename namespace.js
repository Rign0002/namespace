document.addEventListener("DOMContentLoaded", init);

var RIGN0002 = {
    init: function () {
        var newDiv = document.createElement("div");
        newDiv.className = "box";
        newDiv.textContent = "RIGN0002";
        var boxes = document.getElementById("boxes");
        boxes.appendChild(newDiv);
        
        newDiv.addEventListener("click", function () {
            newDiv.style.borderColor = "darkblue";
            newDiv.style.backgroundColor = "aqua";
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
