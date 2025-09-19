let amigos = [];

function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let amigoNombre = amigoInput.value.trim();
    let listaAmigos = document.getElementById('listaAmigos');

    if (amigoNombre === '') {
        alert('Por favor, ingresa un nombre para añadir a un amigo.');
        return;
    }
    
    if (amigos.includes(amigoNombre)) {
        alert('Este nombre ya ha sido agregado.');
        return;
    }

    amigos.push(amigoNombre);

    let li = document.createElement('li');
    li.textContent = amigoNombre;
    listaAmigos.appendChild(li);

    amigoInput.value = '';
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (amigos.length < 2) {
        alert('Necesitas al menos dos amigos para realizar el sorteo.');
        return;
    }

    let sorteados = [...amigos];
    sorteados.sort(() => Math.random() - 0.5);
        do {
        sorteados.sort(() => Math.random() - 0.5);
    } while (sorteados.some((amigo, index) => amigo === amigos[index]));

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        let amigoOriginal = amigos[i];
        let amigoSorteado = sorteados[(i + 1) % sorteados.length];

        li.textContent = `${amigoOriginal} -> ${amigoSorteado}`;
        resultado.appendChild(li);
    }
}

function nuevoSorteo() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';
}