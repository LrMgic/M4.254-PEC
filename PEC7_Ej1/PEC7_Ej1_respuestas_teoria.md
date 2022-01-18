a) ¿Qué es y cómo funciona el elemento <RouterOutlet>?
Es una directiva de angular, la qual equivale a un nombre dinámico según el estado actual del enrutamiento.
La directiva <router-outlet></router-outlet> muestra al enrutador donde debe mostrar las vistas enrutadas.

b) ¿Para qué se utilizan las directivas routerLink y routerLinkActive?
El [routerLink]="['/...']" indica la enrutador la vista enrutada que se debe mostrar.
El [routerLinkActive]="[Class]" realiza un seguimiento de si la ruta vinculada de un elemento está actualmente activa y le permite especificar una o más clases de CSS para agregar al elemento cuando la ruta vinculada está activa.

¿Existen más directivas relacionadas con el router?
Otra directiva asociada al router es RouterLinkWithHref, el qual vincula a rutas específicas de la aplicación.

c) ¿Qué diferencias hay entre los servicios Router y ActivatedRoute? ¿Qué funcionalidades tiene cada uno de estos servicios?
Los servicios de enrutado proporcionan navegación entre vistas y capacidades de manipulación de URL.
ActivatedRoute brinda acceso a información sobre una ruta asociada a un componente que se carga en un outlet.

Describe algunos de los métodos más importantes por los que están compuestos.
Router: - initialNavigation(): Configura el oyente de cambio de ubicación y realiza la navegación inicial. - getCurrentNavigation(): Devuelve el Navigationobjeto actual cuando el enrutador está navegando y null cuando está inactivo. - resetConfig(): Restablece la configuración de la ruta utilizada para la navegación y la generación de enlaces. - dispose(): Elimina el enrutador. - createUrlTree(): Agrega segmentos de URL al árbol de URL actual para crear un nuevo árbol de URL. - navigateByUrl(): Navega a una vista utilizando una ruta de ruta absoluta. - navigate(): Navegue en función de la matriz de comandos proporcionada y un punto de partida. Si no se proporciona una ruta de inicio, la navegación es absoluta. - serializeUrl(): Serializa a UrlTreeen una cadena - parseUrl(): Analiza una cadena en un UrlTree - isActive(): Puede devolver tres overloads:
_ Si la URL está activa: devuelve el equivalente IsActiveMatchOptions de true aque es {paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored'} o false que es {paths: 'subset', queryParams: 'subset', fragment: 'ignored', matrixParams: 'ignored'}.
_ Si la URL está activa: isActive(url: string | UrlTree, matchOptions: IsActiveMatchOptions): boolean \* Si la URL está activa: isActive(url: string | UrlTree, matchOptions: boolean | IsActiveMatchOptions): boolean
ActivatedRoute: - toString(): Se utiliza para devolver los valores de objeto o cadena de objetos en texto.

d) ¿Qué son las Route Guards?
Las Rout Guards son "middlewares" que se ejecutan antes de cargar una ruta y determinan si se puede cargar.

¿Cómo se usan las guardas en Angular?
Angular-CLI provee un generador que crea automaticamente el Guard junto a sus pruebas, a través del comando "ng generate guard <guard-name>". Antes de la creación, angular nos permite elegir de que tipo de Guard se trata. Una vez se ha generado el Guard, se configura y se implementa en los RoutModule a los que se quiera aplicar.

Describe todas las guardas que existen en Angular (consulta para ello la documentación oficial de Angular)
Existen 5 tipos de Rout Guard: - CanActivate: Antes de cargar los componentes de la ruta. - CanActivateChild: Antes de cargar las rutas hijas de la ruta actual. - CanDeactivate: Antes de intentar salir de la ruta actual. Utilizado para evitar salir de una ruta, por ejemplo, si no se han guardado los datos. - Resolve: Se activa cuando se inicia la navegación. - CanLoad: Antes de cargar los recursos (assets) de la ruta.

e) ¿Qué es la carga Lazy de los módulos de Angular?
Lazy Load es un patrón de diseño que consiste en retrasar la carga o inicialización de un objeto hasta el momento de su utilización. Con esto queremos decir que Angular no descargará todos los módulos cuando se ejecute la aplicación, sino que solo los que se están utilizando.

¿Cómo se configura en Angular la carga Lazy? ( https://angular.io/guide/lazy-loading-ngmodules )
Para generar una carga Lazy, se debe crear dos nuevos archivos para cada carga diferida que queramos crear, los cuales equivalen a los hijos de app.module.ts y app-routing-module.ts.
En el nuevo hijo.module.ts, se especifican los componentes y módulos que se usarán en esa carga Lazy, eliminando de app.module.ts esos que no se utilizarán fuera de ese hijo.
En el nuevo hijo-routing.module.ts, se especifican las rutas que se generan dentro de esa carga diferida, modificando en app-routing.module la ruta al módulo diferido por una función:
{
path: 'hijo',
loadChildren: () =>
import('./Hijo/hijo.module').then((m) => m.HijoModule),
},

f) ¿Qué es/para qué son útiles los middlewares en el contexto de node.js?
Un middleware es un bloque de código que se ejecuta entre la petición que hace el usuario (request) hasta que la petición llega al servidor. Esto nos permite saber, por ejemplo, si un usuario se ha identificado (Loguing).

¿Dónde estás usando middlewares en nuestra aplicación?
Por ejemplo, en el ejercicio 5 de la PEC6 encontramos el middleware siguiente:
this.wineService.create(wine).subscribe(
(res) => {
this.message = "Product successfully created.";
console.log("Triggered event emitter");
this.productCreated.next();
},
(err) => {
this.message = "Unable to create product, please try again.";
}
);
el qual nos sirve para validar y confirmar que un producto se ha creado correctamente o bien se ha producido algún error.
