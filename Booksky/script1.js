var overlay=document.getElementById("popoverlay");
var pop=document.getElementById("one");
function icon()
{
    overlay.style.display= "block";
    pop.style.display = "block";
}

function cancel() {
            overlay.style.display = "none";
            pop.style.display = "none";
        }

        function add() {
            var bn = document.getElementById("bookName").value.trim();
            var bA = document.getElementById("bookAuthor").value.trim();
            var bD = document.getElementById("bookDesc").value.trim();

            if (bn === "" || bA === "" || bD === "") {
                alert("Please fill out all fields.");
                return;
            }

            var div = document.createElement("div");
            div.setAttribute("class", "container");
            div.innerHTML = `<h2>${bn}</h2>
                <h5>${bA}</h5>
                <p>${bD}</p>
                <button onclick="del(event)">Delete</button>`;

            document.getElementsByClassName("addbook")[0].appendChild(div);

            // Clear input fields and hide popup
            document.getElementById("bookName").value = "";
            document.getElementById("bookAuthor").value = "";
            document.getElementById("bookDesc").value = "";
            overlay.style.display = "none";
            pop.style.display = "none";
        }
        function del(event) {
            event.target.parentElement.remove();
        }