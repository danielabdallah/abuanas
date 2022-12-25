const n = [[7740,7766], [7800,7899],[7900,7939],[9300,9349],[9400,9478],[9480,9499],[9510,9539],[9570,9579],[9654,9659],[9749,9749],[9760,9769],[9479,9479],[9500,9509],[9540,9563],[9565,9569],[9580,9653],[9660,9748],[9750,9759],[9770,9799],[9900,9999]];

const w = [[7940,7999],[8350,8354],[8380,8387],[8300,8322],[8388,9299],[9850,9859],[9870,9879],[9350,9399],[9800,9849],[9860,9869],[9880,9899],[8323,8349],[8355,8379]];

const zo = [[8070,8099],[8050,8054],[8161,8198],[7440,7449],[7460,7469],[7600,7739],[7767,7799],[7940,7958],[8000,8049],[8055,8069],[8100,8159]];

noord = {...n};
west = {...w};
zuidoost = {...zo};

const form = document.querySelector("#searchForm");
form.addEventListener('submit', submitFunction);
const revealer = document.querySelector("#revealer");
let resultDirection = document.createElement("h2");
let phoneNumber = document.createElement("a");



// let x = parseInt(prompt("Code?"));

function submitFunction(e) {
    e.preventDefault();
    const x = form.elements.postcode.value;
    let c = true;
    let infiniteLoop = 0;

    while(c === true){



        for (const i in noord) {
            if (x >= noord[i][0] && x <= noord[i][1]) {
                resultDirection.textContent = 'Noord';
                phoneNumber.setAttribute("href","tel:0620898732");
                phoneNumber.textContent = '0620898732';
                revealer.textContent = '';
                revealer.appendChild(resultDirection);
                revealer.appendChild(phoneNumber);
                revealer.setAttribute("class","mt-3");
                c = false;
                break;
            }
        }

        infiniteLoop = infiniteLoop + 1;

        for (const i in west) {
            if (x >= west[i][0] && x <= west[i][1]) {
                resultDirection.textContent = 'West';
                phoneNumber.setAttribute("href","tel:0613631865");
                phoneNumber.textContent = '0613631865';
                revealer.textContent = '';
                revealer.appendChild(resultDirection);
                revealer.appendChild(phoneNumber);
                revealer.setAttribute("class","mt-3");
                c = false;
                break;
            }
        }

        infiniteLoop = infiniteLoop + 1;

        for (const i in zuidoost) {
            if (x >= zuidoost[i][0] && x <= zuidoost[i][1]) {
                resultDirection.textContent = 'Zuid-Oost';
                phoneNumber.setAttribute("href","tel:0610875953");
                phoneNumber.textContent = '0610875953';
                revealer.textContent = '';
                revealer.appendChild(resultDirection);
                revealer.appendChild(phoneNumber);
                revealer.setAttribute("class","mt-3");
                c = false;
                break;
            }
        }

        infiniteLoop = infiniteLoop + 1;

        if (infiniteLoop > 3){
            resultDirection.textContent = 'Not found.';
            revealer.textContent = '';
            revealer.appendChild(resultDirection);
            c = false;
        }

    }
}