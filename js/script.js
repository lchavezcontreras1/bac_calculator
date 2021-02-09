$(document).ready(
    function () {
        $("button").click(calculateBac);
    });

function calculateBac(e) {
    e.preventDefault();
    let totalBeer = parseFloat($("input#beer").val()) * 0.54;
    let totalWine = parseFloat($("input#wine").val()) * 0.6;
    let totalShots = parseFloat($("input#shots").val()) * 0.6;
    $("p#totalbeer").text(`${totalBeer.toFixed(0)} ounces of alcohol.`);
    $("p#totalwine").text(`${totalWine.toFixed(0)} ounces of alcohol.`);
    $("p#totalshots").text(`${totalShots.toFixed(0)} ounces of alcohol.`);
    let totalAlcohol = totalBeer + totalWine + totalShots;
    let hours = parseFloat($("input#hours").val()) * 0.015;
    let weight = parseFloat($("input#weight").val());
    let bac = ((totalAlcohol * 7.5) / weight) - hours;
    $("p#totalbac").text(`Your Blood Alcohol Content(BAC) is ${bac.toFixed(3)}.`);

}