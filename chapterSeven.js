import { updateChapter } from "./helpers.js";

export function runChapters(place = "begin") {
    $("#Footer").html("<a href='index.html'>&laquo; Return to Start</a>");
    updateChapter(place);
};



