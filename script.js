<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API en GitHub</title>
</head>
<body>
    <h1>Datos de la API JSONPlaceholder</h1>
    <button id="fetchData">Obtener Datos</button>
    <div id="dataContainer"></div>

    <script>
        const fetchDataButton = document.getElementById("fetchData");
        const dataContainer = document.getElementById("dataContainer");

        fetchDataButton.addEventListener("click", () => {
            fetch("https://jsonplaceholder.typicode.com/posts/1")
                .then(response => response.json())
                .then(data => {
                    // Mostrar los datos en la consola
                    console.log(data);

                    // Mostrar los datos en la página HTML
                    dataContainer.innerHTML = `
                        <h2>Usuario: ${data.userId}</h2>
                        <h3>Título: ${data.title}</h3>
                        <p>Cuerpo: ${data.body}</p>
                    `;
                })
                .catch(error => {
                    console.error("Error al obtener datos:", error);
                });
        });
    </script>
</body>
</html>
