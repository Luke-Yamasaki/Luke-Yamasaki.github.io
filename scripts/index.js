const animation = bodymovin.loadAnimation({
    container: document.getElementById("anim"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "data.json"
})
