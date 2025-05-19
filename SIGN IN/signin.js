const usuarios = [
    {
        nombre: 'Maria',
        apellido: 'Gonzalez',
        email: 'maria@gmail.com',
        password: '1234'
    },
    {
        nombre: 'Carlos',
        apellido: 'Perez',
        email: 'carlos@gmail.com',
        password: 'abcd'
    },
    {
        nombre: 'Ana',
        apellido: 'Lopez',
        email: 'ana@gmail.com',
        password: 'abc123'
    }
];

let usuarioLogueado = null;

// --- SIGN IN ---
const formSignin = document.querySelector('.signin-form');
if (formSignin) {
    formSignin.addEventListener('submit', function (e) {
        e.preventDefault();

        const emailIngresado = document.getElementById('email').value;
        const passwordIngresada = document.getElementById('password').value;

        const usuarioEncontrado = usuarios.find(
            user => user.email === emailIngresado && user.password === passwordIngresada
        );

        if (usuarioEncontrado) {
            usuarioLogueado = usuarioEncontrado;
            console.log("Usuario logueado:", usuarioLogueado);
            window.location.href = '../HOME/home.html';
        } else {
            window.location.href = '../ERROR/error.html';
        }
    });
}
