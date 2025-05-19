// Base de datos simulada con tres usuarios (formato plano)
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

// Variable para guardar al usuario logueado
let usuarioLogueado = null;

// --- SIGN UP ---
const formSignup = document.querySelector('.signup-form');
if (formSignup) {
    formSignup.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.getElementById('name').value;
        const apellido = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Crear usuario como objeto plano
        const nuevoUsuario = {
            nombre,
            apellido,
            email,
            password
        };

        usuarios.push(nuevoUsuario);

        // Redirigir al Sign In
        window.location.href = '../SIGN IN/signin.html';
    });
}