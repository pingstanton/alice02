function randomize(place) {
    switch(place) {
        case "chap7_2":
            var selections = [
                "I see what I eat' is the same thing as 'I eat what I see",
                "I like what I get' is the same thing as 'I get what I like",
                "I am what I eat' is the same thing as 'I eat what I am",
                "I know what I feel' is the same thing as 'I feel what I know",
                "I hate what I do' is the same thing as 'I do what I hate",
                "I give what I take' is the same thing as 'I take what I give"
            ]
            var sel0 = selections[Math.floor(Math.random() * selections.length)];
            var sel1 = selections[Math.floor(Math.random() * selections.length)];
            $("#random-0").text(sel0);
            $("#random-1").text(sel1);
            break;
        case "chap7_5a":
            var selections = [
                "\"Erm, They both begin with an 'R' sound?\"",
                "\"They both have quills?\"",
                "\"Because it can produce a few notes, though they are very flat; and it is nevar put with the wrong end in front!\"",
                "\"They both grow 'pinions?\"",
                "\"Mr. Poe wrote on both of them?\""
            ];
            var sel0 = selections[Math.floor(Math.random() * selections.length)];
            $("#random-0").text(sel0);
            break;
        case "chap7_7b":
            var selection_0 = ["gnat", "rat", "cat", "brat"];
            var selection_1 = ["why you're flat", "where you spat", "where's your hat", "when you'd chat", "what went splat"];
            var selection_2 = ["we cry", "you sigh", "you're nigh", "is pie", "you lie"];
            var selection_3 = ["left to die", "my oh my", "sweet as pie", "what a guy", "worth a try", "you and I"];
            var sel0 = selection_0[Math.floor(Math.random() * selection_0.length)];
            var sel1 = selection_1[Math.floor(Math.random() * selection_1.length)];
            var sel2 = selection_2[Math.floor(Math.random() * selection_2.length)];
            var sel3 = selection_3[Math.floor(Math.random() * selection_3.length)];
            $("#random-0").text(sel0);
            $("#random-1").text(sel1);
            $("#random-2").text(sel2);
            $("#random-3").text(sel3);
            break;
        
    }
}

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
        var choiceList = data.mainText[place].choices || null;
        $("#Chapter").text(data.mainText[place].chapter)
        $("#MainText").html(data.mainText[place].text);
        choiceList ? choices(data.mainText[place].choices) : $("#Choices").empty();
        if (data.mainText[place].randomize) randomize(place);
    })
};
