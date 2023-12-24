/**
 * Bootstrap est conçu en lobile first donc peut s'adapter à tous les types d' écrans
 */

/** Breakpoint
 * Représentent les valeurs pour lesquelles le CSS va changer en fonction du type d' écran sur lequel on se trouve.
 * x-small: <576px
 * sm: >576px
 * md: >768px
 * lg: >992px
 */

/**Container
 * class bootstrap qui permet de centrer les éléments au milieu de la page.
 * le container-fluid prend toujours 100% de l' écran
 */

/**Grid
 * Divise l' ecran en 12 parties lorsqu'on se sert de ses classes:
 * D' abord row
 * Ensuite col; col-sm veut dire que ça va s' appliquer lorsqu'on sera sur un écran de petite taille.
 * col-md: pour dire que c'est une colonne sur un écran de moyenne taille 
 * col-sm-4: pr dire qu'on veut prendre 4 colonnes lorsque nous somme sur un écran de petite taille. Ainsi, ça prend 4 colonnes sur les écrans sm, md, lg ...
 * col-: <576px
 * col-sm: >576px
 * si col-6 et col puis col: alors le col-6 s' éxécute d' abord puis les autres se concertent pour le reste.  
 */

/**Column
 * la class row utilise la propriété flex donc on peut utiliser la propriété des flexbox :
 * align-items-: au niveau des row pr un alignement vertical;
 * align-self-: au niveau des col;
 * justify-content-: au niveau des row pr faire un alignement horizontal. 
 */

/**Typography
 * permet d' afficher les textes d' une certaine façon
 * 
 */

/**images: on a 2 class
 * img-fluid: prend 100% comme max-width et height auto. 
 * img-thumbnail: prend 200px x 200px
 * rounded pr mettre des arrondis,
 * float start ou end pour mettre à la fin ou au début
 * mx-auto et d-block pour centrer
 * Quand on utilise la balise picture pour la responsive, les class sont ajoutés au balise img dans le picture
 */

/** cdnJS
 * puis fontawesome : permet d' accéder à des icones avec la balise i comme dans bootstrap.
 * 
 */

/**
 * Ainsi, si je mets col- tout court, mes éléments vont s' empiler à chaque fois que l' écran rétréçie.
 * mx-auto : pour centrer les boites quand il reste des colonnes ou offset : 1 qui définie une colonne à gauche et à droite par Ex. 
 */

/**Modal
 * Pour utiliser les modals, bah rien de bien compliquer. On a besoin de 2 attributs qui seront appliquer au boutton qui va déclencher le modal:
 * data-bs-toggle: "modal" pour indiquer comme interrupteur du popup 
 * data-bs-target: id; pour cibler le contenu qu' il faut afficher. Ce dernier ayant le meme attribut.
 * 
 */

/**fade
 * la class fade permet de faire apparaitre en fondu. S' applique à l' élément global.
 */

/**Tooltip
 * permet de donner des indices sur un boutton comme le btn close de mon modal par Ex
 * On l' utilise en ajoutant ses 3 attributs au boutton concerné
 * Mais ça nécessite de JS pr fonctionner comme voulu. On met donc ce code JS en bas su script du fichier JS.
 */

/** Accordéons
 * Permettent d' afficher un texte en utilisant peu d' espace. Le texte s' affiche au click.
 * 
 */

/**Badge
 * Représente des bouttons de notification
 */

/**Breadcrumb
 * Pour afficher sur qu' elle page on se trouve.
 */

/** pixabay
 * Un site qui fournie des images libres de droit.
 */

/** Sur le TP
 * rounded-0: pr enlever l' arrondie de bootstrap sur les btn
 * btn-outline-info: btn transparent avec un effet hover
 * position-fixed de bootstrap qui permet de fixer le navbar mais casse le CSS donc on lui ajoute du w-100
 * text-capitalize qui met la première lettre de tous les mots en majuscule
 * border-0: pour enlever la bordure d'une card
 * les nav tout comme les row, implémentent déjà la propriété flex.
 * row puis row-cols-md-2 et row-cols-1 veut dire: On aura 2 colonnes lorsqu'on sera sur un écran de moyenne taille puis 1 colonne pour les petites; Ensuite, A l' intérieur, j' aligne juste les col 6 par Ex, ça  fera 6 colonnes disposées sur 2 colonnes de 3 boites dans la rangée concernée.
 * d-sm-none puis d-md-block: display small none: pr dire de ne pas afficher sur un petit écran mais d' afficher à partir des écrans moyennes.
 * carousel-caption: pour legender chaque image. On le met dans le carousel-item juste après l' img.
 * Pour les form, je part juste dans input-group
 * pour utiliser le fontawesome, i.fas.fa-user par EX.
 * Pour le footer, je pars dans nav&tab 
 * Pour appliquer du style aux bouttons ou aux liens, on les appliquent directement à l' intérieur.
 * Je peux utiliser le :!important pour que mon style s' applique à bootstrap.
 * d-none & d-md-block: pr dire de s' afficher qu'à partir de md.
 */