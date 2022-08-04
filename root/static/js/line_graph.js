function draw_graph() {
    fetch('/api/draw_graph?' + new URLSearchParams({
            d: get_ls_data()
        }))
        .then(function (response) {
            return response.json()

        }).then(function (darg) {
            if (darg[0] == true) {
                var plot = document.createElement("img");
                plot.alt = plot;
                plot.src = `data:image/png;base64, ${darg[1]}`
                document.getElementById("line_graph_image").innerHTML = "";
                document.getElementById("line_graph_image").appendChild(plot);
            } else {
                alert("error", darg[1]);
            }
        });
}

document.addEventListener("DOMContentLoaded", (e) => {
    draw_graph();
})