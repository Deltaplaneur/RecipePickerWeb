/*var example = {
    title: "Title of recipe",
    image: "src of image",
    steps: ["First step", "Second step", "Third Step"],
    ingredients: [["Ingredient", 200, "unit"],["Ingredient", 300, "unit"],["Ingredient", 400, "unit"]]
};*/
var arrayOfRecipes = [];

function makeArrayOfRecipes() {
    arrayOfRecipes.push({
        title: "Aubergines farcies",
        image: "media/recipePictures/AubergineFarcie.jpg",
        steps: ["Préchauffez votre four à 210°C.", "Faites bouillir de l’eau pour le riz.",
"Coupez l’aubergine en 2 et videz le centre en évitant de percer la peau.",
"Coupez la chair d’aubergine en dés et faites cuire dans une poêle en couvrant à feu moyen avec une cuillère à soupe d’eau.",
"Placez le riz dans l’eau bouillante et faites cuire une dizaine de minutes jusqu’à ce qu’il soit tendre.",
"Dans un bol, mélangez le riz et l’aubergine.",
"Pour la garniture tomate, ajoutez la sauce tomate dans le bol.",
"Pour la garniture œuf-crème, mélangez l’œuf et la crème puis ajoutez le mélange dans le bol.",
"Placez la garniture dans les aubergines vidées, saupoudrez de fromage râpé.",
"Faites cuire pendant 20 à 30 minutes au four."],
        ingredients: [["Aubergine", 1, "", "vegetable"], ["Riz", 100, "g", "starch"], ["Fromage râpé", 50, "g", "dairy"], ["Sauce tomate", 30, "g", "vegetable"], ["Oeuf", 1, "", "other"], ["Crème", 5, "cL", "dairy"]]
    });
    arrayOfRecipes.push({
        title: "Bouillon de légumes à l’œuf",
        image: "media/recipePictures/BouillonLegumesOeuf.jpg",
        steps: ["Coupez le poireau et les carottes épluchées.",
"Faites-les cuire dans une casserole d’eau frémissante pendant 15-20 minutes.",
"Coupez les champignons en rondelles et faites-les cuire 5 minutes dans une poêle à feu moyen avec un fond d’eau.",
"Ajoutez les champignons dans la casserole.",
"Dans un bol, battez 2 œufs avec la crème.",
"Versez lentement les œufs dans le bouillon, en versant au travers d’une fourchette agitée latéralement, afin de créer des filaments d’œuf dans le bouillon.",
"Après 2-3 minutes de cuisson, le bouillon est prêt."],
        ingredients: [["Champignon", 150, "g", "vegetable"], ["Poireau", 0.5, "", "vegetable"], ["Carotte", 2, "", "vegetable"], ["Oeuf", 2, "", "other"], ["Crème", 5, "cL", "dairy"]]
    });
    arrayOfRecipes.push({
        title: "Ravioles en bouillon",
        image: "media/recipePictures/BouillonLegumesRavioles.jpg",
        steps: ["Placez les ravioles au congélateur pendant 30 minutes.",
"Épluchez et coupez tous les légumes en rondelles.",
"Placez les légumes dans 2 litres d’eau frémissante et faites cuire pendant 15 minutes.",
"Séparez les ravioles les unes des autres, puis ajoutez les dans le bouillon. Dès que les ravioles remontent à la surface, elle sont prêtes.",
"Ajoutez sel et poivre selon vos préférences."],
        ingredients: [["Ravioles", 100, "g", "starch"], ["Courgette", 1, "", "vegetable"], ["Carotte", 3, "", "vegetable"], ["Oignon", 1, "", "vegetable"], ["Ail", 2, "gousses", "vegetable"]]
    });
    arrayOfRecipes.push({
        title: "Wrap Œuf-Aubergine-Poivron",
        image: "media/recipePictures/BurritoAubergine.jpg",
        steps: ["Coupez l’aubergine et le poivron en frites d’une dizaine de centimètres.",
"Faites-les cuire dans une poêle à feu moyen avec un fond d’eau et d’huile en couvrant pendant 10-15 minutes.",
"Lorsque les légumes sont cuits, augmentez légèrement le feu et préparez 2 œufs au plat.",
"Terminez en faisant réchauffer les tortillas à la poêle pendant quelques minutes.",
"Dressez en plaçant les légumes au centre d’une tortilla avec l’œuf et le fromage.",
"Rabattez les côtés de la tortilla vers le centre, en laissant un espace au milieu.",
"Repliez le bas de la tortilla vers le haut, jusqu’à avoir recouvert toute la garniture.",
"Terminez le wrap en faisant rouler la garniture recouverte vers le haut."],
        ingredients: [["Fromage râpé", 20, "g", "dairy"], ["Aubergine", 1, "", "vegetable"], ["Oeuf", 2, "", "other"], ["Poivron", 1, "", "vegetable"], ["Tortilla", 2, "", "starch"]]
    });
    arrayOfRecipes.push({
        title: "Cake Courgettes-Chèvre",
        image: "media/recipePictures/CakeCourgetteChevre.jpg",
        steps: ["Préchauffez votre four à 200°C.",
                "Coupez la courgette en dés et faites revenir dans une poêle pendant une dizaine de minutes.",
"Coupez le fromage en morceaux.",
"Dans un saladier, mélangez tous les ingrédients.",
"Faites cuire dans un moule à cake pendant 35-40 minutes.",
"Laissez refroidir avant de servir."],
        ingredients: [["Farine", 175, "g", "starch"], ["Courgette", 1, "", "vegetable"], ["Chèvre", 150, "g", "dairy"], ["Levure", 0.5, "sachet", "starch"], ["Oeuf", 3, "", "other"], ["Lait", 15, "cL", "dairy"]]
    });
    arrayOfRecipes.push({
        title: "Cookies sucrés/salés",
        image: "media/recipePictures/CookiesSucreSale.jpg",
        steps: ["Épluchez la carotte. Coupez-la en rondelles et le brocoli en tranches.",
"Faites-les cuire dans une poêle à feu moyen pendant 10 minutes en couvrant avec un fond d’eau.",
"Dans une casserole, versez 75g de sucre et faites cuire à feu doux jusqu’à ce que le sucre ait fondu.",
"Ajoutez 15g de beurre coupé en dés et 5cL de crème, mélangez et sortez du feu.",
"Préchauffez votre four à 180°C.",
"Dans un saladier, mélangez la farine, la levure, l’œuf et le beurre. Séparez en 2 parties égales, pour le sucré et le salé.",
"Incorporez le reste du sucre à une des pâtes.",
"Coupez le chocolat en morceaux.",
"Formez des boules avec la pâte salée et ajoutez la carotte et le brocoli dessus.",
"Formez des boules avec la pâte sucrée et ajoutez les morceaux de chocolat et des morceaux de caramel.",
"Enfournez pour une dizaine de minutes, sortez lorsque les contours commencent à brunir."],
        ingredients: [["Farine", 150, "g", "starch"], ["Carotte", 1, "", "vegetable"], ["Brocoli", 50, "g", "vegetable"], ["Levure", 0.5, "sachet", "starch"], ["Oeuf", 1, "", "other"], ["Beurre", 90, "g", "dairy"], ["Sucre", 100, "g", "starch"], ["Crème", 5, "cL", "dairy"]]
    });
    arrayOfRecipes.push({
        title: "Croque-Madame aux légumes",
        image: "media/recipePictures/CroqueMadameLegumes.jpg",
        steps: ["Sortez le beurre à température ambiante pendant 30 minutes.",
"Chauffez une poêle à feu moyen avec un fond d’huile.",
"Épluchez la carotte et coupez la en rondelles fines.",
"Placez la carotte dans la poêle avec 1 cuillère à soupe d’eau et couvrez.",
"Coupez la courgette en rondelles fines et ajoutez les dans la poêle.",
"Tranchez l’ail en petits dés et mélangez avec le beurre jusqu’à obtenir un mélange facile à étaler.",
"Étalez le beurre ailé sur le pain de mie.",
"Retirez les légumes du feu pour préparer 2 œufs au plat, en augmentant légèrement le feu.",
"Placez une tranche de pain côté beurre dans la poêle, dressez le croque-madame avec une autre tranche par-dessus, beurre vers le haut.",
"Quand le bas commence à griller, retournez pour 1-2 minutes de cuisson."],
        ingredients: [["Ail", 2, "gousses", "vegetable"], ["Pain de mie", 4, "tranches", "starch"], ["Carotte", 1, "", "vegetable"], ["Courgette", 1, "", "vegetable"], ["Oeuf", 2, "", "other"], ["Beurre", 30, "g", "dairy"], ["Fromage râpé", 30, "g", "dairy"]]
    });
    arrayOfRecipes.push({
        title: "Crumble Pomme-Pêche",
        image: "media/recipePictures/CrumblePommePeche.jpg",
        steps: ["Préchauffez votre four à 210°C.",
"Épluchez les pommes et coupez-les en dés.",
"Faites les revenir dans une casserole avec 30g de beurre et 25g de sucre pendant 15 minutes, en remuant périodiquement.",
"Dans un saladier, mélangez la farine avec le reste de beurre et de sucre jusqu’à obtenir une pâte très sableuse.",
"Ajoutez la compote de pêche aux pommes et versez dans un plat.",
"Recouvrez en émiettant la pâte.",
"Faites cuire 30-35 minutes au four."],
        ingredients: [["Compote de pêche", 200, "g", "fruit"], ["Pomme", 2, "", "fruit"], ["Farine", 120, "g", "starch"], ["Beurre", 100, "g", "dairy"], ["Sucre", 75, "g", "starch"]]
    });
    arrayOfRecipes.push({
        title: "Galettes de courgettes aux légumes",
        image: "media/recipePictures/GalettesCourgettes.jpg",
        steps: ["Coupez la courgette en longs morceaux fins.",
"Dans un saladier, mélangez la courgette, 1 œuf, la farine et la levure.Laissez reposer une demi - heure.",
"Épluchez et coupez la carotte en dés.Faites cuire à feu moyen dans une poêle avec un fond d’ eau pendant 15 minutes.",
"Recouvrez le fond d’ une poêle avec de l’ huile et faites chauffer à feu moyen - chaud.",
"Versez une louche de la pâte à courgette et étalez pour former une galette.",
"Laissez cuire quelques minutes de chaque côté.",
"Dans un bol, mélangez l’ œuf restant et la crème, puis versez dans une poêle à feu moyen en remuant pendant 1 minute pour obtenir des œufs brouillés.",
"Dans la poêle encore chaude, placez le gruyère râpé et faites griller quelques minutes de chaque côté."],
        ingredients: [["Gruyère râpé", 30, "g", "dairy"], ["Courgette", 1, "", "vegetable"], ["Carotte", 1, "", "vegetable"], ["Farine", 100, "g", "starch"], ["Levure", 0.5, "sachet", "starch"], ["Crème", 5, "cL", "dairy"]]
    });
    arrayOfRecipes.push({
        title: "Galettes de quinoa et crème d’aubergine",
        image: "media/recipePictures/GalettesQuinoa.jpg",
        steps: ["Dans une casserole d’eau bouillante, faites cuire le quinoa pendant 10 minutes.",
"Egouttez le quinoa et le placer dans un saladier.",
"Ajoutez la farine et l’œuf et mélangez pour obtenir une pâte homogène.",
"Dans une poêle, versez de l’huile jusqu’à recouvrir le fond et faites chauffer à feu chaud.",
"Versez une louche de pâte pour former une galette et faites cuire 3 minutes de chaque côté.",
"Dans une casserole d’eau bouillante, faites cuire l’aubergine coupée en gros morceaux pendant 15 minutes, jusqu’à ce que la chair soit très tendre.",
"Enlevez la peau de l’aubergine cuite et hachez-la en petits morceaux.",
"Faites cuire l’aubergine dans une poêle pendant 5 minutes afin de la ramollir et d’obtenir une consistance homogène.",
"Placez l’aubergine dans un bol et ajoutez la crème puis mélangez jusqu’à obtenir une texture crémeuse."],
        ingredients: [["Quinoa", 100, "g", "starch"], ["Aubergine", 1, "", "vegetable"], ["Farine", 30, "g", "starch"], ["Crème", 10, "cL", "dairy"], ["Oeuf", 1, "", "other"]]
    });
    arrayOfRecipes.push({
        title: "Gâteau à la pomme et fleur d’oranger, ganache au chocolat",
        image: "media/recipePictures/GateauPommeFleur.jpg",
        steps: ["Préchauffez votre four à 180°C.",
"Épluchez et coupez les pommes en dés.",
"Faites revenir les pommes dans une poêle à feu moyen avec une cuillère à soupe de sucre.",
"Dans un saladier, fouettez le yaourt, les œufs et le sucre.",
"Ajoutez le beurre en mélangeant, puis la farine et la levure.",
"Ajoutez les pommes à la pâte et versez dans un moule beurré.",
"Placez au four pour une vingtaine de minutes.",
"Découpez le chocolat en carrés et placez dans une casserole à feu doux.",
"Ajoutez la crème et mélangez jusqu’à ce que le chocolat soit fondu."],
        ingredients: [["Chocolat", 100, "g", "other"], ["Pomme", 2, "", "fruit"], ["Farine", 200, "g", "starch"], ["Crème", 15, "cL", "dairy"], ["Oeuf", 3, "", "other"], ["Fleur d'oranger", 10, "cL", "other"], ["Yaourt", 1, "", "dairy"], ["Sucre", 75, "g", "starch"], ["Beurre", 75, "g", "dairy"], ["Levure", 0.5, "sachet", "starch"]]
    });
    arrayOfRecipes.push({
        title: "Gaufres et compote",
        image: "media/recipePictures/GaufresCompote.jpg",
        steps: ["Faites fondre le beurre.",
"Dans un saladier, mélangez la farine, le sucre et la levure.",
"Incorporez progressivement les œufs, le beurre et le lait.",
"Laissez reposer la pâte 30 minutes.",
"Épluchez et coupez les pommes en dés.",
"Faites cuire les pommes dans une casserole à feu moyen avec un fond d’eau pendant 10-15 minutes en couvrant.",
"Ajoutez d’autres fruits avec les pommes (pêches, fraises, framboises…).",
"Chauffez votre appareil à gaufres puis versez la pâte en faisant cuire chaque gaufre 3-5 minutes."],
        ingredients: [["Sucre", 20, "g", "starch"], ["Lait", 15, "cL", "dairy"], ["Farine", 130, "g", "starch"], ["Beurre", 40, "g", "dairy"], ["Oeuf", 2, "", "other"], ["Levure", 0.5, "sachet", "starch"]]
    });
    arrayOfRecipes.push({
        title: "Gratin Dauphinois",
        image: "media/recipePictures/GratinDauphinois.jpg",
        steps: ["Préchauffez votre four à 180°C.",
"Épluchez les pommes de terre et coupez-les en rondelles de 2cm d’épaisseur environ.",
"Coupez l’ail en rondelles fines.",
"Mélangez le lait et la crème.",
"Placez les pommes de terre et l’ail dans un plat, et recouvrez avec le liquide.",
"Enfournez pour 45-50 minutes."],
        ingredients: [["Pommes de terre", 1, "kg", "starch"], ["Crème", 20, "cL", "dairy"], ["Ail", 1, "gousse", "vegetable"], ["Lait", 50, "cL", "dairy"]]
    });
    arrayOfRecipes.push({
        title: "Gratin de pâtes",
        image: "media/recipePictures/GratinPates.jpg",
        steps: ["Faites bouillir une casserole d’eau pour les pâtes.",
"Préchauffez votre four à 200°C.",
"Ajoutez les pâtes dans l’eau et faites cuire selon les instructions du paquet.",
"Découpez la courgette en rondelles et faites la revenir dans une poêle pendant une dizaine de minutes.",
"Mélangez les œufs, la crème et la moitié du fromage râpé dans un bol.",
"Dans un plat, versez les pâtes et la courgette. Ajoutez le mélange liquide et recouvrez avec le reste du fromage.",
"Faites cuire pendant 30-40 minutes."],
        ingredients: [["Pâtes", 100, "g", "starch"], ["Fromage râpé", 50, "g", "dairy"], ["Sauce tomate", 50, "g", "vegetable"], ["Crème", 10, "cL", "dairy"], ["Courgette", 1, "", "vegetable"], ["Oeuf", 3, "", "other"]]
    });
    arrayOfRecipes.push({
        title: "Gratin de ravioles à la courgette et aux champignons",
        image: "media/recipePictures/GratinRavioles.jpg",
        steps: ["Préchauffez votre four à 210°C.",
"Coupez la courgette en rondelles.",
"Dans une poêle, faites précuire les courgettes à feu moyen en couvrant pendant 7-8 minutes en remuant régulièrement.",
"Coupez les champignons en rondelles.",
"Faites précuire les champignons pendant 2-3 minutes.",
"Dans un bol, mélangez le lait et la crème. Poivrez et ajoutez d’autres épices selon vos envies.",
"Dans un plat, disposez une couche de courgette, une couche de champignons, une couche de ravioles et une couche de fromage râpé. Versez le liquide jusqu’à couvrir.",
"Recommencez l’étape précédente jusqu’à ce que le plat soit rempli.",
"Faites cuire au four pendant 25-30 minutes."],
        ingredients: [["Champignon", 5, "", "vegetable"], ["Ravioles", 1, "paquet", "starch"], ["Courgette", 1, "", "vegetable"], ["Lait", 30, "cL", "dairy"], ["Fromage râpé", 100, "g", "dairy"], ["Crème", 10, "cL", "dairy"]]
    });
    arrayOfRecipes.push({
        title: "Pommes dauphines et œuf poché aux légumes",
        image: "media/recipePictures/LegumesOeufPoche.jpg",
        steps: ["Préchauffez votre four à 200°C.",
"Coupez le brocoli et remuez-le dans l’huile.",
"Placez le brocoli et les pommes dauphines dans un plat et faites cuire 10 minutes, en remuant à mi-cuisson.",
"Sortez le brocoli du four et continuez la cuisson des pommes dauphines en augmentant la température à 220°C.",
"Faites chauffer une casserole d’eau bouillante.",
"Baissez le feu pour avoir un frémissement et ajoutez le vinaigre blanc.",
"Remuez l’eau pour former un tourbillon et cassez l’œuf en le mettant au centre du tourbillon.",
"Sortez au bout de 3 minutes de cuisson et placez dans un bol d’eau froide pour arrêter la cuisson."],
        ingredients: [["Pommes dauphines", 150, "g", "starch"], ["Oeuf", 2, "", "other"], ["Brocoli", 150, "g", "vegetable"], ["Huile", 5, "cL", "other"], ["Vinaigre blanc", 1, "cL", "other"]]
    });
    arrayOfRecipes.push({
        title: "Mélange de légumes au quinoa",
        image: "media/recipePictures/MelangeLegumesQuinoa.jpg",
        steps: ["Dans une casserole d’eau bouillante, faites cuire le quinoa pendant 10-15 minutes.",
"Coupez la carotte en rondelles et faites cuire dans une poêle à feu moyen en couvrant pendant 15 minutes, avec un fond d’eau.",
"Égouttez le quinoa et réservez.",
"Dans un bol, mélangez les 2 œufs.",
"Lorsque la carotte est cuite, réservez et versez l’œuf dans la poêle. Remuez constamment jusqu’à ce que les œufs soient presque prêts. ",
"Retirez les œufs de la poêle et baissez légèrement le feu.",
"Versez le quinoa, la sauce tomate, la carotte, les œufs et les tomates séchées dans la poêle. Mélangez et faites cuire quelques minutes."],
        ingredients: [["Quinoa", 100, "g", "starch"], ["Oeuf", 2, "", "other"], ["Sauce tomate", 50, "g", "vegetable"], ["Carotte", 1, "", "vegetable"], ["Cacahuètes", 25, "g", "other"], ["Tomates séchées", 50, "g", "vegetable"]]
    });
    arrayOfRecipes.push({
        title: "Menemen à l’oignon",
        image: "media/recipePictures/MenemenOignon.jpg",
        steps: ["Coupez l’oignon en dés et le poivron en lamelles.",
"Faites cuire dans une poêle à feu moyen pendant une dizaine de minutes avec un fond d’eau et un peu d’huile d’olive. ",
"Lorsque les légumes sont aux 2/3 cuits, ajouter la pulpe de tomates et laisser cuire pendant 3-5 minutes en remuant.",
"Ajoutez les œufs et mélangez grossièrement jusqu’à ce que les œufs soient cuits.",
"Servez avec du pain grillé et éventuellement du fromage frais."],
        ingredients: [["Pulpe de tomates", 100, "g", "vegetable"], ["Oeuf", 2, "", "other"], ["Oignon", 1, "", "vegetable"], ["Poivron", 1, "", "vegetable"]]
    });
    arrayOfRecipes.push({
        title: "Migas Courgette-Patate Douce",
        image: "media/recipePictures/MigasCourgettePatate.jpg",
        steps: ["Chauffez une poêle à feu moyen avec un fond d’huile.",
"Épluchez et coupez la patate douce en dés. Placez dans la poêle avec un fond d’eau et couvrez.",
"Coupez la courgette en dés et faites cuire avec la patate douce pendant une dizaine de minutes.",
"Coupez la tortilla en petits quartiers.",
"Dans un bol, battez rapidement les 3 œufs.",
"Lorsque les légumes sont presque prêts, sortez les de la poêle et faites griller la tortilla pendant quelques minutes en remettant un peu d’huile.",
"Lorsque les quartiers de tortilla sont bien croustillants, reversez les légumes et mélangez.",
"Ajoutez les œufs et faites cuire en couvrant pendant 2 à 3 minutes.",
"Lorsque les œufs sont cuits, vous pouvez optionnellement saupoudrer de fromage râpé."],
        ingredients: [["Tortilla", 1, "", "starch"], ["Patate douce", 0.5, "", "starch"], ["Courgette", 1, "", "vegetable"], ["Oeuf", 3, "", "other"]]
    });
    arrayOfRecipes.push({
        title: "Naan, caviar d’aubergine et beignets de carotte",
        image: "media/recipePictures/NaanBeignetsCarotte.jpg",
        steps: ["Dans un saladier, formez un puit avec 250g de farine et la levure.",
"Versez au centre le lait et l’huile et mélangez petit à petit en partant du centre.",
"Terminez de mélanger à la main, en ajoutant un peu de farine si la pâte est trop collante.",
"Formez une boule et laissez reposer 15-20 minutes en couvrant d’un torchon.",
"Préchauffez une poêle à feu moyen-chaud.",
"Séparez la boule en 4, étalez chaque naan.",
"Placez un naan dans la poêle et couvrez, retournez au bout de 3-4 minutes pour encore 2-3 minutes de cuisson.",

"Faites bouillir une casserole d’eau.",
"Coupez l’aubergine en épaisses tranches.",
"Placez les tranches dans l’eau bouillante et faites cuire pendant 15-20 minutes.",
"Lorsque vous pouvez planter un couteau sans effort dans les aubergines, sortez du feu et retirez la peau.",
"Émincez l’aubergine et placez dans une poêle à feu moyen pendant 5-10 minutes en remuant régulièrement, jusqu’à obtenir une consistance de purée.",

"Épluchez et râpez finement les carottes.",
"Faites cuire dans une poêle à feu moyen pendant 15 minutes avec un fond d’eau et en couvrant.",
"Lorsque les carottes sont fondantes, placez-les dans un saladier avec les œufs et 50g de farine.",
"Mélangez puis formez des boules, en ajoutant de la farine si le mélange ne se tient pas.",
"Chauffez à feu fort assez d’huile pour avoir 1 cm d’épaisseur dans une poêle, sans faire bouillir.",
"Placez les boules dans l’huile, puis retournez-les lorsque le dessous commence à dorer."],
        ingredients: [["Farine", 300, "g", "starch"], ["Oeuf", 2, "", "other"], ["Levure", 0.5, "", "starch"], ["Lait", 12, "cL", "dairy"], ["Huile", 1, "cL", "other"], ["Aubergine", 1, "", "vegetable"], ["Carotte", 4, "", "vegetable"]]
    });
    arrayOfRecipes.push({
        title: "Œufs crémeux et bouillon de légumes",
        image: "media/recipePictures/OeufsCremeux.jpg",
        steps: ["Dans un bol, cassez les œufs et battez-les pour obtenir un mélange homogène.",
"Faites fondre le beurre dans une poêle à feu doux.",
"Coupez le fromage frais en dés.",
"Versez les œufs dans la poêle et faites cuire à feu doux en remuant continuellement pendant 5-6 minutes.",
"Lorsque les œufs sont prêts, ajoutez la crème et le fromage frais et continuez à remuer pendant 1 minute.",
"Retirez les œufs du feu.",
"La recette du bouillon est celle du bouillon de légumes à l’œuf."],
        ingredients: [["Oeuf", 2, "", "other"], ["Crème", 5, "cL", "dairy"], ["Beurre", 10, "g", "dairy"], ["Fromage frais", 30, "g", "dairy"]]
    });
    arrayOfRecipes.push({
        title: "Pain perdu aux poivrons",
        image: "media/recipePictures/PainPerduPoivron.jpg",
        steps: ["Coupez le poivron en lamelles ou en dés et faites-le cuire à feu moyen dans une poêle avec un fond d’eau pendant une quinzaine de minutes.",
"Dans un bol, mélangez le lait et les œufs jusqu’à obtenir un mélange homogène.",
"Imbibez les tranches de pain du liquide.",
"Lorsque les poivrons sont cuits, sortez-les de la poêle et faites cuire les tranches de pain 2-3 minutes par côté, en augmentant un peu le feu."],
        ingredients: [["Oeuf", 2, "", "other"], ["Lait", 20, "cL", "dairy"], ["Poivron", 1, "", "vegetable"], ["Pain de mie", 6, "tranches", "starch"]]
    });
    arrayOfRecipes.push({
        title: "Pancakes et crème de citron",
        image: "media/recipePictures/PancakesCremeCitron.jpg",
        steps: ["Dans un saladier, mélangez la farine, le sucre et la levure.",
"Dans un bol, fouettez 2 œufs et le lait.",
"Versez dans le saladier et laissez reposer pendant 30 minutes.",
"Râpez 1 cuillère à soupe de zeste et pressez le citron.",
"Dans un bol, fouettez 3 œufs.",
"Dans une casserole, faites fondre le beurre et ajoutez le sucre glace et le jus de citron.",
"Portez à ébullition puis versez sur les œufs.",
"Ajoutez les zestes et reversez dans la casserole, en baissant la température à feu doux.",
"Remuez en permanence jusqu’à ce que la crème épaississe puis versez dans un ramequin.",
"Chauffez une poêle à feu moyen pour les pancakes.",
"Versez une louche de pâte puis retournez lorsque des bulles se forment et que le dessous devient ferme.",
"Faites cuire encore une minute."],
        ingredients: [["Farine", 120, "g", "starch"], ["Oeuf", 5, "", "other"], ["Levure", 0.5, "", "starch"], ["Lait", 15, "cL", "dairy"], ["Sucre", 20, "g", "starch"], ["Citron", 1, "", "fruit"], ["Beurre", 30, "g", "dairy"], ["Sucre glace", 75, "g", "starch"]]
    });
    arrayOfRecipes.push({
        title: "Pâtes et frites de légumes",
        image: "media/recipePictures/PatesFritesLegumes.jpg",
        steps: ["Faites chauffer une poêle à feu moyen avec un fond d’huile.",
"Épluchez et coupez en frites la patate douce.",
"Faites cuire dans la poêle avec un fond d’eau et en couvrant.",
"Faites bouillir de l’eau pour les pâtes.",
"Coupez la courgette en frite et ajoutez dans la poêle, en remuant régulièrement.",
"Ajoutez les pâtes dans l’eau bouillante et faites cuire selon les instructions du paquet.",
"Placez légumes et pâtes dans une assiette, saupoudrez de fromage râpé."],
        ingredients: [["Pâtes", 100, "g", "starch"], ["Courgette", 1, "", "vegetable"], ["Patate douce", 1, "", "starch"], ["Fromage râpé", 20, "g", "dairy"], ["Ail", 1, "gousse", "vegetable"]]
    });
    arrayOfRecipes.push({
        title: "Pâtes maison aux courgettes et à l’ail",
        image: "media/recipePictures/PatesMaisonCourgette.jpg",
        steps: ["Dans un grand bol ou saladier, verser la farine en formant un puit au centre.",
"Casser les œufs au centre et utilisez une fourchette pour incorporer graduellement la farine aux œufs.",
"Lorsque la pâte devient trop compacte, utiliser une main pour pétrir la pâte.",
"Une fois toute la farine incorporée ou si la pâte ne peut pas absorber plus de farine, placez la pâte pendant 30 minutes au réfrigérateur.",
"Coupez la courgette en rondelles et faites revenir une quinzaine de minutes à la poêle.",
"Préparez une casserole d’ eau bouillante pour les pâtes.",
"Émincez les gousses d’ ail.",
"Enfarinez votre plan de travail, sortez la pâte du frigo et roulez la en un cylindre de 10 cm d’ épaisseur.",
"Coupez le cylindre en 2 et roulez les 2 moitiés en cylindres de 5— 7 centimètres d’ épaisseur.",
"Coupez des pièces de 1 - 2 centimètres de large.Enfarinez chaque pièce et utilisez votre pouce pour aplatir et étaler la pâte.",
"Une fois toutes les pâtes formées, placez - les dans l’ eau bouillante.Une fois remontées à la surface, cuisez encore une minute puis égouttez les pâtes.",
"Placez les pâtes et l’ ail dans la poêle avec les courgettes pendant quelques minutes puis servez."],
        ingredients: [["Oeuf", 2, "", "other"], ["Farine", 150, "g", "starch"], ["Courgette", 1, "", "vegetable"], ["Ail", 2, "gousse", "vegetable"]]
    });
    arrayOfRecipes.push({
        title: "Pâtes au poivron et carotte",
        image: "media/recipePictures/PatesPoivronCarotte.jpg",
        steps: ["Coupez le poivron en lamelles et les carottes épluchées en rondelles.",
"Chauffez une poêle à feu moyen avec un fond d’huile.",
"Faites bouillir une casserole d’eau.",
"Placez les légumes dans la poêle avec 2 cuillères à soupe d’eau.",
"Couvrez et faites cuire une quinzaine de minute en remuant toutes les 2-3 minutes.",
"Versez les pâtes dans l’eau bouillante et faites cuire selon les instructions du paquet de pâtes.",
"Égouttez les pâtes et versez les dans la poêle avec les légumes pendant 2 minutes en remuant.",
"Placez dans une assiette et recouvrez de fromage râpé."],
        ingredients: [["Pâtes", 100, "g", "starch"], ["Poivron", 1, "", "vegetable"], ["Carotte", 2, "", "vegetable"], ["Fromage", 20, "g", "dairy"]]
    });
    arrayOfRecipes.push({
        title: "Pizza mozzarella-légumes",
        image: "media/recipePictures/PizzaMozza.jpg",
        steps: ["Préchauffez votre four à 200°C.",
"Coupez la mozzarella en rondelles et réservez afin qu’elle s’assèche un peu.",
"Coupez les légumes en rondelles et faites cuire une dizaine de minutes dans une poêle à feu moyen en couvrant.",
"Étalez la pâte à pizza.",
"Recouvrez la pâte de sauce tomate en laissant un espace pour la croûte puis recouvrez de légumes.",
"Ajoutez la mozzarella et le parmesan râpé.",
"Enfournez pour 10-15 minutes, jusqu’à ce que la croûte soit dorée sans que les légumes ne brûlent."],
        ingredients: [["Pâte à pizza", 1, "", "starch"], ["Carotte", 1, "", "vegetable"], ["Courgette", 1, "", "vegetable"], ["Mozzarella", 125, "g", "dairy"], ["Parmesan", 50, "g", "dairy"], ["Champignon", 5, "", "vegetable"], ["Sauce tomate", 100, "g", "vegetable"]]
    });
    arrayOfRecipes.push({
        title: "Pizza aux légumes",
        image: "media/recipePictures/PizzaOeufLegumes.jpg",
        steps: ["Préchauffez votre four à 200°C.",
"Chauffez une poêle à feu moyen avec un fond d’huile.",
"Épluchez la carotte et coupez la en rondelles fines.",
"Placez la carotte dans la poêle avec 1 cuillère à soupe d’eau et couvrez.",
"Coupez la courgette en rondelles fines et ajoutez les dans la poêle.",
"Retirez du feu un peu avant que les légumes ne soient cuits.",
"Étalez la pâte à pizza (si vous n’avez pas de rouleau, prenez la pâte et utilisez la gravité pour l’étirer, en faisant tourner en permanence jusqu’à obtenir un cercle assez large).",
"Couvrez la pâte de sauce tomate, en laissant une bordure pour la croûte.",
"Placez les légumes sur la pâte et recouvrez de fromage râpé.",
"Placez au four pendant 5 minutes.",
"Sortez la pizza du four, cassez les œufs dessus et enfournez de nouveau pour 10 à 15 minutes."],
        ingredients: [["Pâte à pizza", 1, "", "starch"], ["Carotte", 1, "", "vegetable"], ["Courgette", 1, "", "vegetable"], ["Fromage râpé", 30, "g", "dairy"], ["Oeuf", 2, "", "other"], ["Sauce tomate", 100, "g", "vegetable"]]
    });
    arrayOfRecipes.push({
        title: "Polenta et aubergines frites",
        image: "media/recipePictures/PolentaAubergine.jpg",
        steps: ["Coupez l’aubergine en grandes lamelles et saupoudrez de sel.",
"Laissez reposer pendant 15 minutes puis essuyez le sel.",
"Préchauffez votre four à 200°C.",
"Découpez les aubergines en frites.",
"Dans un grand plat, placez les aubergines puis versez de l’huile et du curry.",
"Mélangez afin que les aubergines soient bien enduites d’huile et de curry.",
"Placez au four pendant une vingtaine de minutes, en les retournant au bout de 10-15 minutes.",
"Faites bouillir 350mL d’eau dans une casserole puis ajouter la polenta en remuant.",
"Couper le fromage en dés et l’ajouter à la polenta.",
"Mélanger la polenta et ajouter de l’eau si la consistance est trop solide. Laissez cuire 5 minutes puis retirez du feu une fois que le fromage a bien fondu."],
        ingredients: [["Aubergine", 1, "", "vegetable"], ["Polenta", 100, "g", "starch"], ["Fromage", 50, "g", "dairy"], ["Curry", 15, "g", "other"]]
    });
    arrayOfRecipes.push({
        title: "Polenta aux légumes",
        image: "media/recipePictures/PolentaOeuf.jpg",
        steps: ["Faites bouillir 500mL d’eau dans une casserole.",
"Versez la polenta en remuant et laissez cuire une petite dizaine de minutes, en ajoutant de l’eau si la texture devient trop solide. ",
"Ajoutez le gruyère coupé en morceaux et les petit-pois carotte et laissez cuire quelques minutes en remuant. Salez et poivrez selon vos goûts.",
"Retirez du feu et préparez un œuf au plat dans une poêle à feu moyen-chaud.",
"Versez la polenta dans un bol et placez l’œuf au plat dessus.",
"Sortez la pizza du four, cassez les œufs dessus et enfournez de nouveau pour 10 à 15 minutes."],
        ingredients: [["Petit-pois carotte", 100, "g", "vegetable"], ["Polenta", 100, "g", "starch"], ["Gruyère", 50, "g", "dairy"], ["Oeuf", 1, "", "other"]]
    });
    arrayOfRecipes.push({
        title: "Pommes de terres sautées aux courgettes et à l’œuf",
        image: "media/recipePictures/PommesTerreCourgette.jpg",
        steps: ["Coupez les pommes de terre en dés.",
"Chauffez une poêle à feu moyen avec un fond d’huile et placez les pommes de terre dedans.",
"Coupez la courgette en dés et versez les dans la poêle.",
"Ajoutez 2 cuillères à soupe d’eau dans la poêle.",
"Coupez l’oignon en rondelles ou en petits dés et versez dans la poêle.",
"Faites cuire une dizaine de minutes en remuant régulièrement.",
"Dans un bol, cassez les œufs et ajoutez le lait.",
"Mélangez vigoureusement.",
"Retirez les légumes de la poêle et versez les œufs à la place.",
"Faites cuire 2 minutes en mélangeant en permanence.",
"Mélangez les légumes et les œufs dans une assiette en ajoutant du fromage râpé.",
"Sortez la pizza du four, cassez les œufs dessus et enfournez de nouveau pour 10 à 15 minutes."],
        ingredients: [["Pommes de terre", 100, "g", "starch"], ["Courgette", 1, "", "vegetable"], ["Oignon", 1, "", "vegetable"], ["Oeuf", 2, "", "other"], ["Lait", 5, "cL", "dairy"], ["Fromage", 20, "g", "dairy"]]
    });
    arrayOfRecipes.push({
        title: "Quiche aux légumes",
        image: "media/recipePictures/QuicheLegumes.jpg",
        steps: ["Préchauffez votre four à 190°C.",
"Chauffez une poêle à feu moyen avec un fond d’huile.",
"Coupez l’oignon, la courgette et le poivron, et faites cuire dans la poêle pendant une dizaine de minutes avec un fond d’eau en couvrant et en remuant régulièrement.",
"Dans un bol, mélangez les œufs et la crème jusqu’à obtenir un mélange fluide.",
"Coupez la moitié du fromage en petits dés et ajoutez les aux œufs.",
"Étalez la pâte dans un moule, ajoutez les légumes puis le liquide.",
"Coupez le reste du fromage en lamelles ou râpez le avant de l’ajouter sur le dessus de la quiche.",
"Faites cuire 20 à 30 minutes."],
        ingredients: [["Pâte brisée", 1, "", "starch"], ["Courgette", 1, "", "vegetable"], ["Oignon", 1, "", "vegetable"], ["Poivron", 1, "", "vegetable"], ["Fromage", 75, "g", "dairy"], ["Oeuf", 2, "", "other"], ["Crème", 10, "cL", "dairy"]]
    });
    arrayOfRecipes.push({
        title: "Ravioles grillées aux petits légumes",
        image: "media/recipePictures/RaviolesPoeleLegumes.jpg",
        steps: ["Placez les ravioles au congélateur pendant 30 minutes pour qu’elles soient plus faciles à séparer.",
"Dans une casserole faites réchauffer les petit-pois et carotte pendant 5-10 minutes à feu moyen, avant de les égoutter.",
"Séparez les ravioles et faites les cuire à feu chaud dans une poêle pendant 3-5 minutes. Lorsque la pâte devient transparente et ferme, les ravioles sont prêtes.",
"Servez les légumes et les ravioles en dressant avec le parmesan."],
        ingredients: [["Petit-pois carotte", 100, "g", "vegetable"], ["Ravioles", 100, "g", "starch"], ["Parmesan", 30, "g", "dairy"]]
    });
    arrayOfRecipes.push({
        title: "Riz sauté au citron",
        image: "media/recipePictures/RizCitron.jpg",
        steps: ["Dans une casserole, faites bouillir 2-3 volumes d’eau par rapport au riz.",
"Ajoutez le riz et faites cuire jusqu’à évaporation de l’eau ou jusqu’à ce que le riz soit tendre.",
"Découpez le brocoli et placez le dans une poêle couverte à feu doux avec 10cL d’eau pendant 5 minutes.",
"Épluchez et coupez la carotte en rondelles. Ajoutez-la au brocoli.",
"Râpez un peu de zeste de citron et pressez pour obtenir le jus.",
"Lorsque le riz est prêt, ajoutez le aux légumes, en ajoutant le jus de citron et les cacahuètes.",
"Laissez cuire 3-5 minutes en remuant avant de servir en saupoudrant de zeste."],
        ingredients: [["Citron", 0.5, "", "fruit"], ["Brocoli", 50, "g", "vegetable"], ["Cacahuètes", 30, "g", "other"], ["Carotte", 1, "", "vegetable"], ["Riz", 100, "g", "starch"]]
    });
    arrayOfRecipes.push({
        title: "Riz sauté et purée de carottes",
        image: "media/recipePictures/RizSautePureeCarottes.jpg",
        steps: ["Faites bouillir de l’eau dans une casserole.",
"Coupez grossièrement les carottes et faites les cuire dans l’eau bouillante une quinzaine de minutes.",
"Lorsque vous pouvez planter sans effort un couteau dans les carottes, sortez les de l’eau.",
"Utilisez le reste de l’eau pour cuire le riz.",
"Chauffez une poêle à feu moyen avec un fond d’huile.",
"Coupez le poivron en lamelles et placez dans la poêle avec un fond d’eau. Faites cuire en couvrant pendant une dizaine de minutes.",
"Coupez les carottes en morceaux et écrasez les dans un bol.",
"Ajoutez le lait et mélangez pour atteindre une consistance de purée.",
"Lorsque le riz est cuit, versez le dans la poêle et ajoutez les cacahuètes.",
"Cassez l’œuf dans la poêle et mélangez jusqu’à ce qu’il soit cuit.",
"Laissez cuire encore 2 à 3 minutes en mélangeant."],
        ingredients: [["Riz", 100, "g", "starch"], ["Carotte", 3, "", "vegetable"], ["Poivron", 1, "", "vegetable"], ["Oeuf", 1, "", "other"], ["Cacahuètes", 30, "g", "other"], ["Lait", 10, "cL", "dairy"]]
    });
    arrayOfRecipes.push({
        title: "Spaghettis aux courgettes",
        image: "media/recipePictures/SpaghettiCourgette.jpg",
        steps: ["Faites bouillir une casserole d’eau salée.",
"Coupez la courgette en rondelles et faites-la cuire dans une poêle pendant une quinzaine de minutes à feu moyen avec un fond d’eau, en couvrant et remuant régulièrement.",
"Lorsque l’eau bout, versez les pâtes et faire cuire selon la durée indiquée sur le paquet.",
"Lorsque les courgettes sont presque cuites, ajouter la sauce tomate et remuer régulièrement.",
"Égouttez les pâtes cuites et ajoutez-les dans la poêle.",
"Faites cuire 2-3 minutes en remuant afin de mélanger les légumes et les pâtes.",
"Servir avec le parmesan."],
        ingredients: [["Pâtes", 150, "g", "starch"], ["Courgette", 1, "", "vegetable"], ["Parmesan", 20, "g", "dairy"], ["Sauce tomate", 50, "g", "vegetable"]]
    });
    arrayOfRecipes.push({
        title: "Tarte plat-dessert",
        image: "media/recipePictures/TartePlatDessert.jpg",
        steps: ["Préchauffez votre four à 190°C.",
"Épluchez et coupez les pommes en dés. Faites cuire dans une casserole à feu moyen en couvrant.",
"Quand les pommes commencent à être fondantes, ajoutez la rhubarbe et laissez cuire 5 minutes.",
"Épluchez la carotte et coupez la en dés.",
"Faites cuire dans une poêle à feu moyen avec un fond d’eau pendant une dizaine de minutes, en ajoutant l’oignon coupé en dés.",
"Dans un bol, mélangez l’œuf, la crème et le fromage coupé en petits dés.",
"Séparez la pâte feuilleté dans 2 moules à tarte différents.",
"Dans un moule, placez la compote pomme-rhubarbe, et dans l’autre versez les légumes et le mélange œuf-crème-fromage.",
"Placez au four pendant 15 à 20 minutes et laissez refroidir quelques minutes avant de servir."],
        ingredients: [["Pâte feuilletée", 1, "", "starch"], ["Pomme", 2, "", "fruit"], ["Compote de rhubarbe", 100, "g", "fruit"], ["Oignon", 1, "", "vegetable"], ["Carotte", 1, "", "vegetable"], ["Fromage", 50, "g", "dairy"], ["Oeuf", 2, "", "other"], ["Crème", 5, "cL", "dairy"]]
    });
    arrayOfRecipes.push({
        title: "Tarte aux poireaux",
        image: "media/recipePictures/TartePoireaux.jpg",
        steps: ["Préchauffez votre four à 180°C.",
"Séparez la partie blanche du poireau des feuilles et coupez-la en 2 verticalement.",
"Lavez bien l’intérieur du poireau puis coupez en morceaux.",
"Coupez l’oignon en dés.",
"Faites revenir le poireau et l’oignon pendant 10 minutes dans une poêle à feu moyen avec un peu de beurre et un peu d’eau.",
"Dans un bol mélangez le lait, la crème, l’œuf et le fromage râpé.",
"Placez la pâte à tarte dans un moule et versez les légumes à l’intérieur.",
"Recouvrez avec le liquide et placez au four pendant 30 minutes."],
        ingredients: [["Pâte feuilletée", 150, "g", "starch"], ["Poireau", 1, "", "vegetable"], ["Oignon", 1, "", "vegetable"], ["Crème", 10, "cL", "dairy"], ["Lait", 20, "cL", "dairy"], ["Oeuf", 1, "", "other"], ["Fromage râpé", 50, "g", "dairy"]]
    });
    arrayOfRecipes.push({
        title: "Tergoule à la cannelle",
        image: "media/recipePictures/Tergoule.jpg",
        steps: ["Préchauffez votre four à 150°C.",
"Dans une casserole, faites chauffer le lait jusqu’à ébullition.",
"Dans un plat, versez le riz, le sucre et de la cannelle selon vos goûts.",
"Versez le lait chaud dans le plat et mélangez tous les ingrédients.", 
"Placez le plat dans votre four pendant 1h30 à 3h selon la texture souhaitée."],
        ingredients: [["Sucre", 50, "g", "starch"], ["Riz rond", 100, "g", "starch"], ["Lait entier", 1, "L", "dairy"], ["Cannelle", 10, "g", "other"]]
    });
    arrayOfRecipes.push({
        title: "Tortilla Poivron-Courgette-Avocat",
        image: "media/recipePictures/TortillaPoivronCourgette.jpg",
        steps: ["Coupez le poivron en lamelles et la courgette en dés ou rondelles.",
"Chauffez une poêle à feu moyen avec un fond d’huile.",
"Placez les légumes dans la poêle avec 2 cuillères à soupe d’eau.",
"Couvrez et faites cuire une quinzaine de minute en remuant toutes les 2-3 minutes.",
"Coupez l’avocat en lamelles.",
"Réchauffez pendant une minute chaque tortilla.",
"Placez les légumes dans la moitié supérieure d’une tortilla, en râpant le fromage dessus.",
"Pliez le bas puis la gauche et enfin la droite de la tortilla."],
        ingredients: [["Tortilla", 2, "", "starch"], ["Courgette", 1, "", "vegetable"], ["Poivron", 1, "", "vegetable"], ["Avocat", 1, "", "vegetable"], ["Fromage", 30, "g", "dairy"]]
    });
    arrayOfRecipes.push({
        title: "Céréales parfaites",
        image: "media/recipePictures/Cereales.jpg",
        steps: ["Placez les Weetabix dans un grand bol.",
               "Recouvrez de corn flakes.",
               "Ajoutez du muesli aggloméré.",
               "Optionnellement, ajoutez des cacahuètes.",
               "Versez une poignée de fruits rouges surgelés sur le dessus.",
               "Remplissez avec du lait froid jusqu'à couvrir l'ensemble."],
        ingredients: [["Corn Flakes", 50, "g", "starch"], ["Muesli", 50, "g", "starch"], ["Weetabix", 2, "", "starch"], ["Cacahuètes", 20, "g", "other"], ["Lait", 300, "mL", "dairy"], ["Fruits rouges surgelés", 30, "g", "fruit"]]
    });
}
