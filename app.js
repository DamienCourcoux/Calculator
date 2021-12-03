let brain = [];

document.body.addEventListener("change", (event) => {
    const target = event.target.id;
    const body = document.body;

    switch (target) {
        case "option1":
            console.log("theme one activate");
            body.setAttribute("data-theme", "theme one");
            break;
        case "option2":
            console.log("theme two activate");
            body.setAttribute("data-theme", "theme two");
            break;
        case "option3":
            console.log("theme three activate");
            body.setAttribute("data-theme", "theme three");
            break;
        case "optionNoel":
            console.log("theme noel activate");
            body.setAttribute("data-theme", "theme noel");
            break;
    }
});

const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const id = event.target.id;
        const value = document.querySelector(`#${id}`).textContent;
        const resultNumber = document.querySelector(".result_number");

        switch (id) {
            case "btn-0":
            case "btn-1":
            case "btn-2":
            case "btn-3":
            case "btn-4":
            case "btn-5":
            case "btn-6":
            case "btn-7":
            case "btn-8":
            case "btn-9":
            case "btn-plus":
            case "btn-less":
            case "btn-multiply":
            case "btn-divide":
            case "btn-dot":
                if (brain[0] === "0") {
                    brain.pop();
                    brain.push(value);
                } else if (id === "btn-multiply") {
                    brain.push("*");
                } else {
                    brain.push(value);
                }
                break;
            case "btn-del":
            case "btn-reset":
                brain = ["0"];
                if (brain = ["0"]) {
                    resultNumber.style.fontSize = "2rem"
                }
                break;
            case "btn-equal":
                const join = brain.join("");
                const result = eval(join).toString();
                brain = [result];
                resultNumber.textContent = result;
                break;

            default:
                break;
        }

        const join = brain.join("");
        resultNumber.textContent = join;
        if (resultNumber.textContent.length > 10) {
            resultNumber.style.fontSize = "1rem";
        }
        if (resultNumber.textContent.length > 20) {
            resultNumber.style.fontSize = ".7rem"
        }
    });
});