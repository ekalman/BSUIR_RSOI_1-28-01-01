let description;
let country;
let blinkFunc;
let errMsg;


$(document).ready(function() {
    countryButtonClick();
    getMoreInfo();
    errMsg = $("#errMsg");
});

$(document)
    .on("ajaxStart", () => {
        run_waitMe();
    })
    .on("ajaxSend", () => {
        console.log("ajaxSend");
    })
    .on("ajaxSuccess", () => {
        if(blinkFunc) {
            clearInterval(blinkFunc);
            errMsg.text("");
        }
    })
    .on("ajaxError", (err) => {
        $("#errMsg").text("Error while AJAX request");
        blinkFunc = setInterval(function(){
            $("#errMsg").fadeOut(function () {
                $(this).fadeIn();
            });
        }, 100)
    })
    .on("ajaxComplete", () => {
        setTimeout(() => {
            loader.hide();
        }, 300)
    })

function countryButtonClick() {
    $(`[value=usa]`).click(() => {
        country = "usa";
        getTextInfo();
    });

    $("[value=uk]").click(() => {
        country = "uk";
        getTextInfo();
    });

    $("[value=rus]").click(() => {
        country = "rus";
        getTextInfo();
    });

    $("[value=bel]").click(() => {
        country = "bel";
        getTextInfo();
    });
}

function getMoreInfo() {
    $("[value=loadMore]").click(() => {
        $('#forJSON').show();
        $("#forJSON").empty();
        $.getJSON(`./data/${country}.json`, (res) => {
            $.each(res, (key, val) => {
                $("#forJSON").append($('<li />', {
                    text: `${key}: ${val}`
                }));
            });
        });
        getHtml();
    });
}

function getTextInfo() {
    $.get(`./data/${country}.txt`).done(data => {
        description = data;
        setReqInfo(data);
    });
    $('#forJSON').hide();
    $('#content').hide();
}

function setReqInfo(data) {
    $("#par").text(data);
}

function getHtml() {
    $('#content').show();
    $("#content").load(`./html/${country}.html`);
}

function run_waitMe(){
    $('#container').waitMe({
    effect: 'bounce',
    text: 'Loading...',
    bg: 'rgba(255,255,255,0.7)',
    color: '#000',
    waitTime: 500,
    })
}
