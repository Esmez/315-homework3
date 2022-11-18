function initListeners() {
    $(".bars").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });

    $(".links a").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").removeClass("active");
    });

    $(".button").click(function(e) {
        let btnID = e.currentTarget.id;
        console.log("clicked " + btnID);
        alert("clicked " + btnID );
    });
}

function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "")
    //console.log(hashTag + "" + pageID);

    if(pageID != ""){
        $.get(`pages/${pageID}/${pageID}.html`,function(data){
            console.log("data " + data);
            $("#app").html(data);
            initListeners();
        });
    }else {
        $.get(`pages/home/home.html`, function(data){
            console.log("data " + data);
            $("#app").html(data);
        });
    }

}

function initURLListeners() {
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

$(document).ready(function () {
    initListeners();
    initURLListeners();
});