import { catNames, furColors } from "../data/constants";

export function getColoredCat(cats, colors){
    let catsCount = cats.length;
    let colorsCount = colors.length;
    let coloredCats = [];

    if (catsCount !== colorsCount){
        return "Arrays have to have same length.";
    }

    for(let index = 0; index < catsCount; index++){
        coloredCats= `${cats[index]} have ${colors[index]} fur.`;

    }

    for (var i = coloredCats.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = coloredCats[i];
        coloredCats[i] = coloredCats[j];
        coloredCats[j] = temp;
    }
    return coloredCats;
}