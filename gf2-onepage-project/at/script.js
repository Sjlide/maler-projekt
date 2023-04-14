if (document.getElementById("slider--text")) {
    let slides = [
        "<h2>My awesome title here<small>This is a slide</small></h2>",
        "<h2>Another awesome title here<small>This is another slide</small></h2>",
        "<h2>Yet another awesome title<small>This is yet another slide</small></h2>"
    ];

    let i = 0;

    const slider = () => {
        document.getElementById("slider--text").innerHTML = slides[i];
        document.getElementById("slider--text").classList.add('fade-in');

        (i < slides.length - 1) ? i++ : i = 0;
    };

    slider(); // Start slider immediately
    setInterval(slider, 4000); // Slide every 4 seconds
}