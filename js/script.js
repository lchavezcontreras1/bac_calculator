$(document).ready(
    function () {
        $("button").click(calculateBac);
    }
)
let beer = parseFloat($("input#beer").val());
let totalBeer = beer * 0.54;
$("p#beerounces").text(`${totalBeer} ounces of alcohol.`);
let wine = parseFloat($("input#wine").val());
let totalWine = wine * 0.6;
$("p#wineounces").text(`${totalWine} ounces of alcohol.`);
let shots = parseFloat($("input#shots").val());
let totalShots = shots * 0.6;
$("p#shotsounces").text(`${totalShots} ounces of alcohol.`);
let weight = parseFloat($("input#weight").val());
let hours = parseFloat($("input#hours").val());
function calculateBac() {
    let bac = ((totalBeer+totalWine+totalShots)*7.5)/ weight;
    let totalBac = bac - (0.015 * hours);
    return(totalBac.toFixed(3));
}
$("p#totalbac").text(`Your Blood Alcohol Content (BAC) is ${calculateBac}%`);