function choices(choices) {
    var line = "";
    var index = 0;
    var routes = [];
    choices.forEach(choice => {
        line += `<button id="choice${index}"">${choice.text}</button>`
        routes.push(choice.route)
        index++;
    });

    $("#Choices").html(line);
    routes.forEach((route, index) => {
        $(`#choice${index}`).click(() => {
            window.scrollTo(0, 0);
            updateChapter(route);
        });
    })
}

export function updateChapter(place) {
    $.getJSON("./chapters.json", (data) => {
        var choiceList = data.seven.mainText[place].choices || null;
        $("#MainText").html(data.seven.mainText[place].text);
        choiceList ? choices(data.seven.mainText[place].choices) : $("#Choices").empty();
    })
};
