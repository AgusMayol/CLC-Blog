let secciones = [{ id: "nuevosproductos", url: "novedades" }, { id: "detallestecnicos", url: "detalles_tecnicos" }, { id: "catalogos", url: "" }, { id: "sobrenosotros", url: "aboutus" }]

// Obteniendo el perfil referenciado en la URL

let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
let html = null;
let css = '';
let propiosCSS = "<style> h1,h2 {  font-family: 'Inter', sans-serif !important; font-weight: bold; font-size: 40px;    } </style>"

let contenedor_iframe = document.getElementById("contenedor-iframe")

function cargarContenido() {

    // // Estableciendo valores
    if (id !== null) {
        for (let i = 0; i < secciones.length; i++) {
            let objeto = secciones[i];
            if (objeto.id == id) {

                fetch(`https://raw.githubusercontent.com/clcautomation/documents/main/sections/${objeto.url}.html`)
                    .then(response => response.text())
                    .then(data => {
                        const parser = new DOMParser();
                        const htmlDoc = parser.parseFromString(data, 'text/html');
                        html = htmlDoc.body.innerHTML;

                        // obtener los estilos CSS del head
                        const styleTags = htmlDoc.head.getElementsByTagName('style');
                        for (let i = 0; i < styleTags.length; i++) {
                            const styleTag = styleTags[i];
                            css += "<style>" + styleTag.textContent + "</style>" + propiosCSS;
                        }

                        contenedor_iframe.innerHTML = css + html
                    })
                    .catch(error => console.error(error));

                break;
            }
        }

    } else {
        let objeto = secciones[0];

        fetch(`https://raw.githubusercontent.com/clcautomation/documents/main/sections/${objeto.url}.html`)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const htmlDoc = parser.parseFromString(data, 'text/html');
                html = htmlDoc.body.innerHTML;

                // obtener los estilos CSS del head
                const styleTags = htmlDoc.head.getElementsByTagName('style');
                for (let i = 0; i < styleTags.length; i++) {
                    const styleTag = styleTags[i];
                    css += "<style>" + styleTag.textContent + "</style>";
                }

                contenedor_iframe.innerHTML = css + html
            })
            .catch(error => console.error(error));
    }


}