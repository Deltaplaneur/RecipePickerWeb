"use strict";
window.onload = OnLoading;

var listOfIngredients = [];

function OnLoading() {
    makeArrayOfRecipes();
    createRecipeTiles();
    document.querySelector("#dropdownListIngredients").style.display = "none";
}

function loadIngredientList() {
    if (arrayOfRecipes.length > 0) {
        var ingredientsInRecipes = [];
        arrayOfRecipes.forEach(function (recipe) {
            if (recipe.ingredients.length > 0) {
                recipe.ingredients.forEach(function (ingredient) {
                    var isPresent = false;
                    ingredientsInRecipes.forEach(function (currentIngredient) {
                        if (currentIngredient[0] == ingredient[0]) {
                            isPresent = true;
                        }
                    });
                    if (!isPresent) {
                        ingredientsInRecipes.push([ingredient[0], ingredient[3]]);
                    }
                });
            }
        });
        if (ingredientsInRecipes.length > 0) {
            //Sort ingredients alphabetically
            ingredientsInRecipes.sort(function (a, b) {
                return a[0] > b[0];
            });
            //create the p for dropdown
            var templateIngredientDropdown = document.querySelector("#templateIngredientToAddToList").content.cloneNode(true);
            var dropdownList = document.getElementById("dropdownListIngredients");
            ingredientsInRecipes.forEach(function (ingredientForDropdown) {
                var pDropdown = templateIngredientDropdown.cloneNode(true);
                pDropdown.querySelector("p").innerHTML = ingredientForDropdown[0];
                pDropdown.querySelector("p").classList.add(ingredientForDropdown[1]);
                dropdownList.appendChild(pDropdown);
            });
        }
    }
}

function createRecipeTiles() {
    arrayOfRecipes.forEach(function (recipe) {
        var newRecipe = document.querySelector("#templateRecipeItem").content.cloneNode(true);
        newRecipe.querySelector("img").src = recipe.image;
        newRecipe.querySelector("img").alt = recipe.title;
        newRecipe.querySelector(".hoverRecipeImage>p").innerHTML = recipe.title;
        var missingIngredients = [];
        recipe.ingredients.forEach(function (ingredient) {
            if (listOfIngredients.indexOf(ingredient[0]) < 0) {
                var ingredientText = document.createElement("P");
                ingredientText.innerHTML = ingredient[0];
                ingredientText.classList.add("missing");
                newRecipe.querySelector(".missingIngredients").appendChild(ingredientText);
            }
        });
        newRecipe.querySelector("div").style.order = newRecipe.querySelectorAll(".missingIngredients>p").length;
        document.getElementById("recipesList").appendChild(newRecipe);
    });
    loadIngredientList();
}

/* Add the element to the list of available ingredients when clicking on Add*/
function addToActiveIngredients(ingredientClicked) {
    //var ingredientToAdd = document.querySelector("#ingredients div>input").value;
    var ingredientToAdd = ingredientClicked.innerHTML;
    listOfIngredients.push(ingredientToAdd);
    var template = document.querySelector("#templateIngredientList");
    var clone = template.content.cloneNode(true);
    clone.querySelector("p").innerHTML = ingredientToAdd;
    clone = addColorToIngredient(clone, ingredientClicked);
    document.getElementById("listActiveIngredients").appendChild(clone);
    updateIngredients(ingredientToAdd, true);
}

function addColorToIngredient(elementToStyle, elementWithClass) {
    var content = elementToStyle.querySelector(".activeIngredient");
    if (elementWithClass.classList.contains("vegetable")) {
        content.classList.add("vegetable");
    } else if (elementWithClass.classList.contains("fruit")) {
        content.classList.add("fruit");
    } else if (elementWithClass.classList.contains("dairy")) {
        content.classList.add("dairy");
    } else if (elementWithClass.classList.contains("starch")) {
        content.classList.add("starch");
    } else {
        content.classList.add("other");
    }
    return elementToStyle;
}

function removeFromActiveIngredients(e) {
    var clickedObjectName = e.previousSibling.innerHTML;
    var indexOfIngredient = listOfIngredients.indexOf(clickedObjectName);
    if (indexOfIngredient >= 0) {
        listOfIngredients.splice(indexOfIngredient, 1);
    }
    var elementToRemove = e.parentElement;
    elementToRemove.parentElement.removeChild(elementToRemove);
    updateIngredients(clickedObjectName, false);
}

function updateIngredients(ingredient, add) {
    if (add) {
        var listRecipes = document.querySelectorAll(".recipeInList");
        listRecipes.forEach(function (recipeTile) {
            var ingredientsList = recipeTile.querySelectorAll(".missingIngredients>p.missing");
            ingredientsList.forEach(function (ingredientInList) {
                if (ingredient == ingredientInList.innerHTML) {
                    //ingredientInList.parentElement.removeChild(ingredientInList);
                    ingredientInList.classList.add("available");
                    ingredientInList.classList.remove("missing");
                    recipeTile.style.order = ingredientsList.length - 1;
                }
            });
        });
        var dropDownListIngredients = document.querySelectorAll(".ingredientForInput");
        dropDownListIngredients.forEach(function (ingredientDropdown) {
            if (ingredientDropdown.innerHTML == ingredient) {
                ingredientDropdown.style.display = "none";
            }
        });
    }
    if (!add) {
        /*var ingredientText = document.createElement("P");
        ingredientText.innerHTML = ingredient;*/
        var listRecipes = document.querySelectorAll(".recipeInList");
        listRecipes.forEach(function (recipeTile) {
            /*var recipeTitle = recipeTile.querySelector(".hoverRecipeImage p").innerHTML;
            arrayOfRecipes.forEach(function (recipe) {
                if (recipe.title == recipeTitle) {
                    recipe.ingredients.forEach(function (ingredientInList) {
                        if (ingredientInList[0] == ingredient) {
                            recipeTile.querySelector(".missingIngredients").appendChild(ingredientText.cloneNode(true));
                            //recipeTile.style.order = ingredientsList.length;
                            recipeTile.style.order = recipeTile.querySelectorAll(".missingIngredients p:missing").length;
                        }
                    });
                }
            });*/
            var ingredientsList = recipeTile.querySelectorAll(".missingIngredients>p.available");
            ingredientsList.forEach(function (ingredientInList) {
                if (ingredient == ingredientInList.innerHTML) {
                    //ingredientInList.parentElement.removeChild(ingredientInList);
                    ingredientInList.classList.add("missing");
                    ingredientInList.classList.remove("available");
                    recipeTile.style.order = recipeTile.querySelectorAll(".missingIngredients>p.missing").length;
                }
            });
        });
        var dropDownListIngredients = document.querySelectorAll(".ingredientForInput");
        dropDownListIngredients.forEach(function (ingredientDropdown) {
            if (ingredientDropdown.innerHTML == ingredient) {
                ingredientDropdown.style.display = "";
            }
        });
    }
}

function openRecipePage(e) {
    fillRecipePage(e.querySelector("p").innerHTML);
    document.getElementById("ingredients").style.display = "none";
    document.getElementById("recipesList").style.display = "none";
    document.getElementById("recipePage").style.display = "flex";
    document.querySelector("header").style.display = "none";
    updateIngredientAmounts(document.querySelector("#quantities input"));
}

function closeRecipePage() {
    document.getElementById("ingredients").style.display = "flex";
    document.getElementById("recipesList").style.display = "flex";
    document.getElementById("recipePage").style.display = "none";
    document.querySelector("header").style.display = "block";
}

function updateDropdownList(inputField) {
    if(document.querySelector("#dropdownListIngredients").style.display == "none") {
       document.querySelector("#dropdownListIngredients").style.display = "";
    }
    var typedText = inputField.value.toUpperCase();
    var ingredientsDropdown = document.getElementById("dropdownListIngredients").querySelectorAll(".ingredientForInput");
    ingredientsDropdown.forEach(function (divDropdown) {
        if (divDropdown.innerHTML.toUpperCase().indexOf(typedText) < 0) {
            divDropdown.classList.add("hidden");
        } else {
            if (divDropdown.classList.contains("hidden")) {
                divDropdown.classList.remove("hidden");
            }
        }
    });
}

function fillRecipePage(recipeToDisplay) {
    for (var i = 0; i < arrayOfRecipes.length; i++) {
        if (arrayOfRecipes[i].title == recipeToDisplay) {
            document.querySelector("#recipeImageLarge").src = arrayOfRecipes[i].image;
            document.querySelector("#recipePage h2").innerHTML = recipeToDisplay;
            var recipeStepsUl = document.querySelector("#recipeSteps ul");
            recipeStepsUl.innerHTML = "";
            arrayOfRecipes[i].steps.forEach(function (currentStep) {
                var newStepInRecipe = document.createElement("LI");
                newStepInRecipe.innerHTML = currentStep;
                recipeStepsUl.appendChild(newStepInRecipe);
            });
            var recipeIngredientsUl = document.querySelector("#recipeIngredients ul");
            recipeIngredientsUl.innerHTML = "";
            arrayOfRecipes[i].ingredients.forEach(function (currentIngredient) {
                var newIngredientItem = document.querySelector("#templateIngredient").content.cloneNode(true);
                newIngredientItem.querySelector("p:nth-child(3)").innerHTML = currentIngredient[0];
                newIngredientItem.querySelector("p:nth-child(1)").innerHTML = currentIngredient[1];
                newIngredientItem.querySelector("p:nth-child(2)").innerHTML = currentIngredient[2];
                newIngredientItem.querySelector("p:nth-child(1)").dataset.quantity = parseFloat(currentIngredient[1]) / 2;
                recipeIngredientsUl.appendChild(newIngredientItem);
            });
            break;
        }
    }
}

function updateIngredientAmounts(inputField) {
    var personsAmount = inputField.value;
    if (personsAmount < 1 || isNaN(personsAmount)) {
        inputField.value = 1;
    }
    document.querySelectorAll("#recipeIngredients ul p:first-child").forEach(function (ingredientAmountText) {
        ingredientAmountText.innerHTML = ingredientAmountText.dataset.quantity * personsAmount;
    });
}

function minusOnePerson() {
    var inputField = document.querySelector("#quantities input");
    if (parseInt(inputField.value) > 1) {
        inputField.value = parseInt(inputField.value) - 1;
        updateIngredientAmounts(inputField);
    }
}

function plusOnePerson() {
    var inputField = document.querySelector("#quantities input");
    inputField.value = parseInt(inputField.value) + 1;
    updateIngredientAmounts(inputField);
}
