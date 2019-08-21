La calculadora está realizada en angular 8. 

Se creó una ventana llamada calculadora donde se realizará el código y no se tocará el código principal solo el HTML para decirle que la página principal será la de calculadora.
En calculadora de realiza primero en HTML la creación de dos inputs con la función de obtener los números que el usuario ponga en ellos y los guarde en una variable llamada "num1" y "num2" las cuales nos ayudara a que se pueda manejar estas variables en component.ts
Se creó un botón llamado AC el cual tiene la función de borrar todo lo que este en el input y en el resultado, en él se encuentra la opción clic la cual quiere decir que al oprimir ese botón se activara una función determinada para el en este caso llamado "clear()".
en el otro div se creó los botones los cuales llevan los operadores y cada uno de ellos tienen la misma opción de clic donde se pone el nombre de la función determinada para cada uno de ellos.
Se agregó a cada objeto una opción de class el cual me permite darle un estilo desde la librería de bootstrap la cual ya he trabajado anteriormente y ayuda a que la interfaz se vea más agradable para el usuario.
En component.ts se crearon tres variables las cuales dos llegan desde HTML y una si es loca de ts, las tres variables son any las cuales no tienen un uso específico de ella así que puede ser lo que sea esas variables.
Después se ve las funciones de cada botón que se encuentra en HTML con la opción de clic las cuales trae cada una de ellas y cada una hace la función de los botones como multiplicar, dividir y demás
en la función de dividir se hace un if para comparar la segunda variable si es igual a cero y siendo así que mande una alerta y renueve la segunda variable.
En la función clear se colocan las tres variables y que sean igual a blanco para que quede otra vez para utilizar desde 0.
