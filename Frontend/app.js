const API_URL_CATEGORIES = 'http://localhost:3001/v1/api'
const HTMLCategories = document.querySelector('#categorias')
const HTMLProducts = document.querySelector('#products')

document.addEventListener('DOMContentLoaded', () => {
    fetch(`${API_URL_CATEGORIES}/categories`)
        .then((response) => response.json())
        .then((categories) => {
            if (categories?.status === 'error') {
                errorMensaje(products?.message)
                return
            }
            armarCategorias(categories)
        })

    fetch(`${API_URL_CATEGORIES}/products`)
        .then((response) => response.json())
        .then((products) => {
            if (products?.status === 'error') {
                errorMensaje(products?.message)
                return
            }
            armarProductos(products)
        })
})

const buscarPorNombre = () => {
    const valorBuscado = document.getElementById('buscador').value
    if (valorBuscado === '') {
        errorMensaje('No puedes hacer una busqueda con el campo vacio')
        return
    }
    fetch(`${API_URL_CATEGORIES}/products/byName?product=${valorBuscado}`)
        .then((response) => response.json())
        .then((products) => {
            if (products?.status === 'error') {
                errorMensaje(products?.message)
                return
            }
            desSelectCategory()
            document.getElementById('title').innerText = `Resultados de la busqueda: ${valorBuscado}`
            armarProductos(products)
        })
}

const filtrarPorCategoria = (id, name) => {
    fetch(`${API_URL_CATEGORIES}/products/${id}`)
        .then((response) => response.json())
        .then((products) => {
            if (products?.status === 'error') {
                errorMensaje(products?.message)
                return
            }
            desSelectCategory()
            document.getElementById(`category${id}`).classList.add('active')
            document.getElementById('title').innerText = `Productos de la categoria ${name}`
            armarProductos(products)
        })
}

const desSelectCategory = () => {
    const elems = document.querySelectorAll('.active')
    ;[].forEach.call(elems, function (el) {
        el.classList.remove('active')
    })
}

const armarCategorias = (categories) => {
    const liCategories = categories.reduce(
        (acc, category) =>
            (acc = acc.concat(
                `<li class='list-group-item list-group-item-action' onclick='filtrarPorCategoria(${
                    category.id
                }, "${category.name.toString()}")' id='category${category.id}'>${category.name}</li>`
            )),
        ''
    )
    HTMLCategories.innerHTML = `<ul class='list-group'>${liCategories}</ul>`
}

const armarProductos = (products) => {
    const cardProduct = products.reduce(
        (acc, product) =>
            (acc = acc.concat(`
        <div class="col">
            <div class="card h-100">
                <img src="${product.url_image}" class="card-img-top" alt="${product.name}" />
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </p>
                </div>
            </div>
        </div>
        `)),
        ''
    )
    HTMLProducts.innerHTML = `${cardProduct}`
}

const errorMensaje = (mensaje) => {
    Swal.fire({
        title: 'Error!',
        text: mensaje,
        icon: 'error',
        confirmButtonText: 'Cerrar'
    })
}
