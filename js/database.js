const entrenamientos = [
    {
        "nombre_ejercicio": "Press de Banca",
        "categoria": "Pectoral",
        "img": "./img/workout_6.jpg",
        "codigo": "d2X4pMnV",
        "precio": 45000,
        "descripcion": "El press de banca es un ejercicio básico para desarrollar el músculo pectoral. Consiste en empujar una barra hacia arriba mientras se está acostado en un banco.",
        "entrenador": "Juan Pérez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Press Militar",
        "categoria": "Hombro",
        "img": "./img/workout_9.jpg",
        "codigo": "D20G1bFp",
        "precio": 65000,
        "descripcion": "El press militar es un ejercicio para desarrollar los hombros. Consiste en levantar una barra desde los hombros hasta por encima de la cabeza, manteniendo una postura firme.",
        "entrenador": "María García",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Dominadas",
        "categoria": "Espalda",
        "img": "./img/workout_12.jpg",
        "codigo": "wE2a1d3P",
        "precio": 30000,
        "descripcion": "Las dominadas son un ejercicio excelente para trabajar la espalda y los brazos. Consiste en levantar el cuerpo hasta que la barbilla esté por encima de la barra, utilizando la fuerza de los brazos y la espalda.",
        "entrenador": "Carlos Rodríguez",
        "disponibilidad": false
    },
    {
        "nombre_ejercicio": "Peso Muerto",
        "categoria": "Lumbar",
        "img": "./img/workout_3.jpg",
        "codigo": "K12Lm45X",
        "precio": 55000,
        "descripcion": "El peso muerto es un ejercicio fundamental para fortalecer la espalda baja y las piernas. Consiste en levantar una barra desde el suelo hasta que el cuerpo esté completamente recto, manteniendo la espalda plana.",
        "entrenador": "Ana Martínez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Crunches",
        "categoria": "Abdomen",
        "img": "./img/workout_8.jpg",
        "codigo": "J4l3k8Hw",
        "precio": 40000,
        "descripcion": "Los crunches son un ejercicio efectivo para fortalecer los músculos abdominales. Consiste en levantar la parte superior del cuerpo hacia las rodillas mientras se contraen los músculos abdominales.",
        "entrenador": "Laura Fernández",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Curls de Bíceps",
        "categoria": "Bíceps",
        "img": "./img/workout_11.jpg",
        "codigo": "M67BnDw2",
        "precio": 55000,
        "descripcion": "Los curls de bíceps son un ejercicio clásico para desarrollar los músculos de los brazos. Consiste en flexionar los codos para levantar una barra o mancuernas hacia los hombros.",
        "entrenador": "Pedro Sánchez",
        "disponibilidad": false
    },
    {
        "nombre_ejercicio": "Extensions de Tríceps",
        "categoria": "Tríceps",
        "img": "./img/workout_7.jpg",
        "codigo": "pL4DfE7g",
        "precio": 50000,
        "descripcion": "Las extensiones de tríceps son un ejercicio excelente para fortalecer la parte posterior de los brazos. Consiste en extender los brazos desde una posición flexionada hasta que estén completamente extendidos.",
        "entrenador": "Sofía López",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Flexiones de Muñeca",
        "categoria": "Antebrazo",
        "img": "./img/workout_2.jpg",
        "codigo": "G9jKpR3s",
        "precio": 25000,
        "descripcion": "Las flexiones de muñeca son un ejercicio útil para fortalecer los músculos de los antebrazos. Consiste en flexionar las muñecas hacia arriba y hacia abajo, utilizando un peso adecuado.",
        "entrenador": "Elena Jiménez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Sentadilla Libre",
        "categoria": "Cuadriceps",
        "img": "./img/workout_4.jpg",
        "codigo": "d2024pMnV",
        "precio": 15000,
        "descripcion": "Se tiene que bajar el tronco del cuerpo flexionando las rodillas, manteniendo la espalda recta y los pies a una separación superior a la anchura de los hombros",
        "entrenador": "José Patiño",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Glute Bridge",
        "categoria": "Glúteos",
        "img": "./img/workout_14.jpg",
        "codigo": "sH2JdF8k",
        "precio": 75000,
        "descripcion": "El glute bridge es un ejercicio para fortalecer los glúteos y los músculos de la parte baja de la espalda. Consiste en levantar las caderas desde el suelo mientras se contraen los glúteos.",
        "entrenador": "Roberto Gómez",
        "disponibilidad": false
    },
    {
        "nombre_ejercicio": "Leg Curl",
        "categoria": "Femoral",
        "img": "./img/workout_1.jpg",
        "codigo": "T3k8pF6s",
        "precio": 70000,
        "descripcion": "El leg curl es un ejercicio efectivo para trabajar los músculos isquiotibiales. Consiste en flexionar las piernas contra una resistencia, manteniendo las caderas en una posición fija.",
        "entrenador": "Ana Rodríguez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Elevación de Talones",
        "categoria": "Soleo",
        "img": "./img/workout_10.jpg",
        "codigo": "Q5bKpA9j",
        "precio": 60000,
        "descripcion": "La elevación de talones es un ejercicio excelente para fortalecer los músculos de la pantorrilla. Consiste en levantar los talones hacia arriba mientras se está de pie.",
        "entrenador": "David Martínez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Abducción de Piernas",
        "categoria": "Abductores",
        "img": "./img/workout_5.jpg",
        "codigo": "L2N9mP1s",
        "precio": 35000,
        "descripcion": "La abducción de piernas es un ejercicio para fortalecer los músculos de los muslos externos. Consiste en separar las piernas hacia afuera contra una resistencia.",
        "entrenador": "María López",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Prensa de Piernas",
        "categoria": "Cuadriceps",
        "img": "./img/workout_13.jpg",
        "codigo": "L5x7Kp9Q",
        "precio": 70000,
        "descripcion": "La prensa de piernas es un ejercicio efectivo para desarrollar los músculos de las piernas. Consiste en empujar una plataforma hacia arriba utilizando los músculos de las piernas.",
        "entrenador": "Laura Pérez",
        "disponibilidad": false
    },
    {
        "nombre_ejercicio": "Pullover",
        "categoria": "Pectoral",
        "img": "./img/workout_2.jpg",
        "codigo": "M3pK5v9X",
        "precio": 60000,
        "descripcion": "El pullover es un ejercicio clásico para trabajar el músculo pectoral y los músculos del dorso. Consiste en levantar una pesa desde la posición extendida sobre la cabeza hasta el pecho.",
        "entrenador": "Carlos Gutiérrez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Elevación Lateral",
        "categoria": "Hombro",
        "img": "./img/workout_8.jpg",
        "codigo": "J2z4W8nY",
        "precio": 55000,
        "descripcion": "La elevación lateral es un ejercicio para fortalecer los músculos deltoides laterales. Consiste en levantar los brazos hacia los lados hasta la altura de los hombros, manteniendo los codos ligeramente flexionados.",
        "entrenador": "Ana Gómez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Remo con Barra",
        "categoria": "Espalda",
        "img": "./img/workout_11.jpg",
        "codigo": "T8kN3p6L",
        "precio": 50000,
        "descripcion": "El remo con barra es un ejercicio excelente para fortalecer los músculos de la espalda. Consiste en tirar de una barra hacia el cuerpo mientras se está inclinado hacia adelante.",
        "entrenador": "Pedro Sánchez",
        "disponibilidad": false
    },
    {
        "nombre_ejercicio": "Hiperextensiones",
        "categoria": "Lumbar",
        "img": "./img/workout_9.jpg",
        "codigo": "V7mZ4pL6",
        "precio": 65000,
        "descripcion": "Las hiperextensiones son un ejercicio útil para fortalecer los músculos de la espalda baja. Consiste en inclinarse hacia adelante desde la cintura mientras se mantiene la espalda recta.",
        "entrenador": "Sofía López",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Plancha",
        "categoria": "Abdomen",
        "img": "./img/workout_7.jpg",
        "codigo": "P4x9M8nJ",
        "precio": 55000,
        "descripcion": "La plancha es un ejercicio excelente para fortalecer los músculos abdominales y del core. Consiste en mantener una posición similar a la de una flexión de brazos, pero apoyando el cuerpo en los antebrazos y los pies.",
        "entrenador": "Elena Fernández",
        "disponibilidad": false
    },
    {
        "nombre_ejercicio": "Martillo de Bíceps",
        "categoria": "Bíceps",
        "img": "./img/workout_10.jpg",
        "codigo": "N9pV3zB5",
        "precio": 45000,
        "descripcion": "El martillo de bíceps es un ejercicio que trabaja los músculos de los brazos de manera efectiva. Consiste en levantar pesas con un movimiento similar al de un martillo, manteniendo los codos cerca del cuerpo.",
        "entrenador": "David Martínez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Extensiones de Tríceps en Polea",
        "categoria": "Tríceps",
        "img": "./img/workout_5.jpg",
        "codigo": "F8mP3nL2",
        "precio": 40000,
        "descripcion": "Las extensiones de tríceps en polea son un ejercicio efectivo para aislar y fortalecer los músculos del tríceps. Consiste en extender los brazos hacia abajo mientras se sujeta una polea con una cuerda o barra.",
        "entrenador": "María García",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Roll de Muñeca",
        "categoria": "Antebrazo",
        "img": "./img/workout_3.jpg",
        "codigo": "L6nF7pD1",
        "precio": 35000,
        "descripcion": "El roll de muñeca es un ejercicio efectivo para fortalecer los músculos de los antebrazos y mejorar el agarre. Consiste en enrollar una barra con un peso hacia arriba y hacia abajo, utilizando solo los movimientos de las muñecas.",
        "entrenador": "Juan Pérez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Step Ups",
        "categoria": "Cuadriceps",
        "img": "./img/workout_1.jpg",
        "codigo": "X7bN4pK3",
        "precio": 55000,
        "descripcion": "Los step ups son un ejercicio efectivo para desarrollar los músculos de las piernas y mejorar la estabilidad. Consiste en subir y bajar de una plataforma o escalón utilizando una pierna a la vez.",
        "entrenador": "Laura Martínez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Hip Thrust",
        "categoria": "Glúteos",
        "img": "./img/workout_14.jpg",
        "codigo": "R5mD8nJ2",
        "precio": 75000,
        "descripcion": "El hip thrust es un ejercicio excelente para fortalecer los glúteos y los músculos de la parte baja de la espalda. Consiste en levantar las caderas desde el suelo hasta que el cuerpo esté completamente extendido, utilizando un banco como apoyo.",
        "entrenador": "Ana Rodríguez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Leg Curl Tumbado",
        "categoria": "Femoral",
        "img": "./img/workout_6.jpg",
        "codigo": "H9pD4mL8",
        "precio": 60000,
        "descripcion": "El leg curl tumbado es un ejercicio efectivo para trabajar los músculos isquiotibiales. Consiste en flexionar las piernas contra una resistencia mientras se está acostado boca abajo.",
        "entrenador": "Pedro Sánchez",
        "disponibilidad": false
    },
    {
        "nombre_ejercicio": "Elevación de Talones Sentado",
        "categoria": "Soleo",
        "img": "./img/workout_4.jpg",
        "codigo": "W3nH5mJ7",
        "precio": 50000,
        "descripcion": "La elevación de talones sentado es un ejercicio excelente para fortalecer los músculos de la pantorrilla. Consiste en levantar los talones mientras se está sentado y se sostiene un peso sobre las rodillas.",
        "entrenador": "María Gómez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Abducción de Piernas en Máquina",
        "categoria": "Abductores",
        "img": "./img/workout_12.jpg",
        "codigo": "Z6vB3nJ8",
        "precio": 45000,
        "descripcion": "La abducción de piernas en máquina es un ejercicio efectivo para fortalecer los músculos de los muslos externos. Consiste en separar las piernas hacia afuera contra una resistencia utilizando una máquina específica.",
        "entrenador": "David Pérez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Chest Fly",
        "categoria": "Pectoral",
        "img": "./img/workout_13.jpg",
        "codigo": "D4kM7nG8",
        "precio": 55000,
        "descripcion": "El chest fly es un ejercicio excelente para aislar y fortalecer los músculos pectorales. Consiste en abrir y cerrar los brazos mientras se sostienen pesas o se utiliza una máquina de poleas.",
        "entrenador": "Ana García",
        "disponibilidad": false
    },
    {
        "nombre_ejercicio": "Face Pull",
        "categoria": "Hombro",
        "img": "./img/workout_3.jpg",
        "codigo": "F7hM4bN8",
        "precio": 45000,
        "descripcion": "El face pull es un ejercicio efectivo para fortalecer los músculos del hombro y mejorar la postura. Consiste en tirar de una cuerda hacia la cara mientras se mantienen los codos altos y se contraen los músculos de la espalda.",
        "entrenador": "María Martínez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Pull Up",
        "categoria": "Espalda",
        "img": "./img/workout_2.jpg",
        "codigo": "K6nB3vP9",
        "precio": 55000,
        "descripcion": "Las pull ups son un ejercicio efectivo para trabajar los músculos de la espalda y los brazos. Consiste en levantar el cuerpo hacia arriba desde una barra fija, utilizando la fuerza de los brazos y la espalda.",
        "entrenador": "Carlos Gómez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Good Morning",
        "categoria": "Lumbar",
        "img": "./img/workout_1.jpg",
        "codigo": "P9dN2jM8",
        "precio": 50000,
        "descripcion": "El good morning es un ejercicio excelente para fortalecer los músculos de la espalda baja y los isquiotibiales. Consiste en inclinarse hacia adelante desde la cintura mientras se mantiene la espalda recta.",
        "entrenador": "Laura Pérez",
        "disponibilidad": false
    },
    {
        "nombre_ejercicio": "Russian Twist",
        "categoria": "Abdomen",
        "img": "./img/workout_5.jpg",
        "codigo": "J8mN5hB2",
        "precio": 45000,
        "descripcion": "El russian twist es un ejercicio efectivo para fortalecer los músculos abdominales y oblicuos. Consiste en girar el torso de lado a lado mientras se sostiene una pesa o se mantienen los brazos cruzados sobre el pecho.",
        "entrenador": "Sofía Gómez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Concentration Curl",
        "categoria": "Bíceps",
        "img": "./img/workout_6.jpg",
        "codigo": "T5bM3vG7",
        "precio": 40000,
        "descripcion": "El concentration curl es un ejercicio que permite aislar y trabajar específicamente los músculos del bíceps. Consiste en flexionar el brazo mientras se apoya el codo en el muslo, manteniendo el tronco estable.",
        "entrenador": "Juan Gómez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Fondos en Paralelas",
        "categoria": "Tríceps",
        "img": "./img/workout_4.jpg",
        "codigo": "N2dF7vK8",
        "precio": 60000,
        "descripcion": "Los fondos en paralelas son un ejercicio efectivo para fortalecer los músculos del tríceps y el pecho. Consiste en bajar y subir el cuerpo entre dos barras paralelas, utilizando la fuerza de los brazos.",
        "entrenador": "David Gómez",
        "disponibilidad": false
    },
    {
        "nombre_ejercicio": "Reverse Wrist Curl",
        "categoria": "Antebrazo",
        "img": "./img/workout_7.jpg",
        "codigo": "B8kD4vJ2",
        "precio": 55000,
        "descripcion": "El reverse wrist curl es un ejercicio útil para fortalecer los músculos de los antebrazos y mejorar el agarre. Consiste en flexionar las muñecas hacia arriba y hacia abajo, pero con las palmas de las manos hacia abajo.",
        "entrenador": "María Pérez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Hack Squat",
        "categoria": "Cuadriceps",
        "img": "./img/workout_9.jpg",
        "codigo": "X4vD8kN2",
        "precio": 65000,
        "descripcion": "El hack squat es un ejercicio efectivo para desarrollar los músculos de las piernas, especialmente los cuádriceps. Consiste en bajar el cuerpo hacia abajo mientras se mantiene una barra en los hombros.",
        "entrenador": "Ana Gómez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Deadlift",
        "categoria": "Femoral",
        "img": "./img/workout_8.jpg",
        "codigo": "H7jF4dM5",
        "precio": 75000,
        "descripcion": "El deadlift es un ejercicio fundamental para desarrollar la fuerza de todo el cuerpo, especialmente los músculos de la espalda y las piernas. Consiste en levantar una barra desde el suelo hasta la posición de pie.",
        "entrenador": "David Pérez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Elevación de Talones de Pie",
        "categoria": "Soleo",
        "img": "./img/workout_10.jpg",
        "codigo": "M5vG8hB3",
        "precio": 45000,
        "descripcion": "La elevación de talones de pie es un ejercicio efectivo para fortalecer los músculos de la pantorrilla. Consiste en levantar los talones hacia arriba mientras se está de pie.",
        "entrenador": "Sofía Martínez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Curl de Pierna en Máquina",
        "categoria": "Abductores",
        "img": "./img/workout_11.jpg",
        "codigo": "Z8nB2dF4",
        "precio": 50000,
        "descripcion": "El curl de pierna en máquina es un ejercicio efectivo para fortalecer los músculos de los muslos internos y externos. Consiste en flexionar las piernas contra una resistencia utilizando una máquina específica.",
        "entrenador": "Juan García",
        "disponibilidad": false
    },
    {
        "nombre_ejercicio": "Dumbbell Fly",
        "categoria": "Pectoral",
        "img": "./img/workout_12.jpg",
        "codigo": "P2nL5dM8",
        "precio": 55000,
        "descripcion": "El dumbbell fly es un ejercicio excelente para aislar y fortalecer los músculos pectorales. Consiste en abrir y cerrar los brazos mientras se sostienen pesas o se utilizan bandas de resistencia.",
        "entrenador": "Ana Pérez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Arnold Press",
        "categoria": "Hombro",
        "img": "./img/workout_13.jpg",
        "codigo": "G5bH8jM2",
        "precio": 60000,
        "descripcion": "El Arnold press es un ejercicio efectivo para desarrollar los músculos del hombro. Consiste en levantar pesas desde los hombros hasta por encima de la cabeza mientras se rota la palma de las manos hacia adelante.",
        "entrenador": "David García",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Bent Over Row",
        "categoria": "Espalda",
        "img": "./img/workout_14.jpg",
        "codigo": "N8mB2vF3",
        "precio": 65000,
        "descripcion": "El bent over row es un ejercicio efectivo para fortalecer los músculos de la espalda y los brazos. Consiste en tirar de una barra hacia el cuerpo mientras se está inclinado hacia adelante.",
        "entrenador": "Sofía Gómez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Back Extension",
        "categoria": "Lumbar",
        "img": "./img/workout_1.jpg",
        "codigo": "K5vF8bH2",
        "precio": 40000,
        "descripcion": "Las back extensions son un ejercicio efectivo para fortalecer los músculos de la espalda baja. Consiste en inclinarse hacia adelante desde la cintura mientras se mantiene la espalda recta y se levanta el torso.",
        "entrenador": "Juan Martínez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Hanging Leg Raise",
        "categoria": "Abdomen",
        "img": "./img/workout_2.jpg",
        "codigo": "Z6bF3nH7",
        "precio": 55000,
        "descripcion": "El hanging leg raise es un ejercicio efectivo para fortalecer los músculos abdominales inferiores. Consiste en levantar las piernas hacia arriba mientras se está suspendido de una barra fija.",
        "entrenador": "Ana García",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Barbell Curl",
        "categoria": "Bíceps",
        "img": "./img/workout_3.jpg",
        "codigo": "G4mN8jF2",
        "precio": 75000,
        "descripcion": "El barbell curl es un ejercicio clásico para desarrollar los músculos del bíceps. Consiste en flexionar los codos para levantar una barra desde los muslos hasta los hombros.",
        "entrenador": "David Pérez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Tricep Dips",
        "categoria": "Tríceps",
        "img": "./img/workout_4.jpg",
        "codigo": "X3bJ6mN8",
        "precio": 45000,
        "descripcion": "Los tricep dips son un ejercicio efectivo para fortalecer los músculos del tríceps y el pecho. Consiste en bajar y subir el cuerpo entre dos barras paralelas, utilizando la fuerza de los brazos.",
        "entrenador": "Laura Gómez",
        "disponibilidad": false
    },
    {
        "nombre_ejercicio": "Wrist Roller",
        "categoria": "Antebrazo",
        "img": "./img/workout_6.jpg",
        "codigo": "D8nH4mP5",
        "precio": 50000,
        "descripcion": "El wrist roller es un ejercicio útil para fortalecer los músculos de los antebrazos y mejorar el agarre. Consiste en enrollar una cuerda con un peso hacia arriba y hacia abajo, utilizando solo los movimientos de las muñecas.",
        "entrenador": "María Martínez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Leg Press",
        "categoria": "Cuadriceps",
        "img": "./img/workout_7.jpg",
        "codigo": "N6mD3vP8",
        "precio": 60000,
        "descripcion": "El leg press es un ejercicio efectivo para desarrollar los músculos de las piernas, especialmente los cuádriceps. Consiste en empujar una plataforma hacia arriba utilizando los músculos de las piernas.",
        "entrenador": "David Martínez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Stiff Leg Deadlift",
        "categoria": "Femoral",
        "img": "./img/workout_8.jpg",
        "codigo": "G5hF2nJ8",
        "precio": 65000,
        "descripcion": "El stiff leg deadlift es un ejercicio excelente para fortalecer los músculos de los isquiotibiales y la espalda baja. Consiste en inclinarse hacia adelante desde la cintura mientras se mantiene la espalda recta y se levanta una barra desde el suelo hasta la altura de las caderas.",
        "entrenador": "Laura Martínez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Calf Raise",
        "categoria": "Soleo",
        "img": "./img/workout_9.jpg",
        "codigo": "H6mN3jF7",
        "precio": 45000,
        "descripcion": "El calf raise es un ejercicio efectivo para fortalecer los músculos de la pantorrilla. Consiste en levantar los talones hacia arriba mientras se está de pie.",
        "entrenador": "Ana Gómez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Ab Crunch Machine",
        "categoria": "Abdomen",
        "img": "./img/workout_10.jpg",
        "codigo": "B7nM4jF5",
        "precio": 55000,
        "descripcion": "La ab crunch machine es una máquina efectiva para fortalecer los músculos abdominales. Consiste en flexionar el torso hacia adelante contra una resistencia controlada por la máquina.",
        "entrenador": "Sofía Pérez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Hammer Strength Chest Press",
        "categoria": "Pectoral",
        "img": "./img/workout_11.jpg",
        "codigo": "L8jF5bM3",
        "precio": 60000,
        "descripcion": "El hammer strength chest press es un ejercicio efectivo para trabajar los músculos pectorales. Consiste en empujar una plataforma hacia adelante mientras se está sentado en una máquina específica.",
        "entrenador": "David Gómez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Lateral Dumbbell Raise",
        "categoria": "Hombro",
        "img": "./img/workout_12.jpg",
        "codigo": "M9jB3nL8",
        "precio": 65000,
        "descripcion": "El lateral dumbbell raise es un ejercicio efectivo para fortalecer los músculos deltoides laterales. Consiste en levantar los brazos hacia los lados hasta la altura de los hombros, manteniendo los codos ligeramente flexionados.",
        "entrenador": "Laura Martínez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "T-Bar Row",
        "categoria": "Espalda",
        "img": "./img/workout_13.jpg",
        "codigo": "K8mN3jF5",
        "precio": 45000,
        "descripcion": "El T-bar row es un ejercicio efectivo para fortalecer los músculos de la espalda y los brazos. Consiste en tirar de una barra hacia el cuerpo mientras se está inclinado hacia adelante y se utiliza una máquina específica.",
        "entrenador": "Ana Gómez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Superman",
        "categoria": "Lumbar",
        "img": "./img/workout_14.jpg",
        "codigo": "Z7vK2mH8",
        "precio": 40000,
        "descripcion": "El superman es un ejercicio efectivo para fortalecer los músculos de la espalda baja y mejorar la estabilidad. Consiste en levantar los brazos y las piernas simultáneamente mientras se está tumbado boca abajo.",
        "entrenador": "David Pérez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Leg Raise",
        "categoria": "Abdomen",
        "img": "./img/workout_1.jpg",
        "codigo": "F4bG7vK9",
        "precio": 55000,
        "descripcion": "El leg raise es un ejercicio efectivo para fortalecer los músculos abdominales inferiores. Consiste en levantar las piernas hacia arriba mientras se está tumbado boca arriba.",
        "entrenador": "Laura Gómez",
        "disponibilidad": true
    },
    {
        "nombre_ejercicio": "Preacher Curl",
        "categoria": "Bíceps",
        "img": "./img/workout_2.jpg",
        "codigo": "W9nH6mG8",
        "precio": 60000,
        "descripcion": "El preacher curl es un ejercicio que permite aislar y trabajar específicamente los músculos del bíceps. Consiste en flexionar los codos mientras se apoya el brazo sobre un banco inclinado.",
        "entrenador": "Ana Pérez",
        "disponibilidad": true
    }         
]
