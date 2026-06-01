# 🐣 Tamagotchi Pro

## 📖 Descripción

Tamagotchi Pro es una aplicación web desarrollada con JavaScript orientado a objetos que simula una mascota virtual.

El objetivo del juego es mantener con vida al Tamagotchi administrando correctamente sus necesidades. A medida que pasa el tiempo, sus estadísticas disminuyen automáticamente y el jugador debe utilizar diferentes acciones para recuperarlas.

Si alguna de las propiedades llega a cero, el Tamagotchi muere y la partida termina.

---

## 🎯 Funcionalidades

- Generación aleatoria de estadísticas al iniciar el juego.
- Gestión de:
  - ❤️ Salud
  - 😊 Felicidad
  - 🧼 Limpieza
  - ⚡ Energía
- Acciones disponibles:
  - 🍎 Alimentar
  - 🤡 Jugar
  - 😴 Dormir
  - 🚿 Duchar
  - 😡 Reprender
  - 🥰 Acariciar
- Disminución automática de las estadísticas cada 5 segundos.
- Actualización visual mediante barras de progreso.
- Detección automática del estado del Tamagotchi.
- Pantalla de Game Over cuando una propiedad llega a cero.
- Desactivación de botones al finalizar la partida.
- Eliminación de los Event Listeners mediante `removeEventListener()`.

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- Tailwind CSS
- JavaScript ES6+

---

## 📂 Estructura del proyecto

```text
Tamagotchi-Pro/
│
├── index.html
├── app.js
├── output.css
└── README.md
```

---

## 🧩 Programación Orientada a Objetos

El proyecto utiliza una clase llamada:

```javascript
class Tamagotchi
```

### Propiedades

- nombre
- salud
- felicidad
- limpieza
- energia

### Métodos

- alimentar()
- jugar()
- dormir()
- duchar()
- reprender()
- acariciar()
- disminuir()
- mostrar()
- verificarEstado()

---

## ⚙️ Funcionamiento

1. Al iniciar el juego se crea una instancia de la clase `Tamagotchi`.
2. Las estadísticas se generan aleatoriamente entre 3 y 10.
3. El usuario puede interactuar mediante los botones disponibles.
4. Cada 5 segundos las estadísticas disminuyen automáticamente.
5. Si una propiedad llega a cero:
   - El juego se detiene.
   - Se eliminan los escuchadores de eventos.
   - Los botones se deshabilitan.
   - Se muestra la pantalla de Game Over.

---

## ▶️ Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio.
2. Abrir el archivo `index.html` en un navegador web.
3. Interactuar con los botones para mantener con vida al Tamagotchi.

---

## 📚 Conceptos aplicados

- Programación Orientada a Objetos (POO)
- Clases y Objetos
- Constructores
- Métodos
- Funciones flecha
- Manipulación del DOM
- Eventos (`addEventListener` y `removeEventListener`)
- Temporizadores (`setInterval` y `clearInterval`)
- Actualización dinámica de la interfaz
- Gestión del estado del juego

---

## 👨‍💻 Autor

Proyecto desarrollado como práctica de Programación Orientada a Objetos en JavaScript.

**Nombre:** [ZAKHBAT MOHAMMED]  
**examen:** UF1843 - Programación con JavaScript  
**Año:** 2026