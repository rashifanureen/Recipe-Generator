        function generateRecipe() {
            const form = document.getElementById('ingredient-form');
            const checkboxes = form.querySelectorAll('input[name="ingredient"]');
            const selectedIngredients = Array.from(checkboxes)
                .filter(checkbox => checkbox.checked)
                .map(checkbox => checkbox.value);

            if (selectedIngredients.length === 0) {
                alert("Please select at least one ingredient.");
                return;
            }

            let recipe;

            if (selectedIngredients.includes("ingredient1") && selectedIngredients.includes("ingredient2") && selectedIngredients.includes("ingredient3")) {
                recipe = "Recipe: TOMATO-ONION-EGG RECIPE<br><br>Method:<br>1. Add oil to a pan and heat up. When the oil is hot, add cumin and mustard seeds. When they begin to splutter, add curry leaves and crushed or chopped garlic. Let the garlic fry for a minute.<br>2. Add onions and green chilies. Fry till they turn pink. You don't need to cook them till golden but they must lose the raw flavor.<br>3. Add tomatoes, turmeric, salt and fry till they turn mushy. Pierce the eggs with fork to make some incisions so they absorb the flavors.<br>4. Add eggs, red chili powder and garam masala.<br>5. On a low flame, fry till the mix becomes fragrant and the tomatoes break down to a mushy texture.<br>6. Add very little water, just enough to partially cover the eggs.<br>7. Cover and cook till the curry turns thick and the onions are soft cooked.<br>8. Add coconut milk, off the heat. Do not cook further, thick coconut milk could curdle the gravy. Taste test and add more salt if required. Mix well and serve.";
            } else if (selectedIngredients.includes("ingredient1") && selectedIngredients.includes("ingredient2")) {
                recipe = "Recipe: TOMATO EGG CURRY<br><br><br>Ingredients: <br>2 eggs <br>4 medium tomatoes <br> onion <br>	ginger-garlic paste <br>	coriander powder,<br> turmeric powder, <br>red chili powder,<br> salt, <br>oil.<br><br> Steps: <br> 1.	Heat oil in frying pan. Add chopped tomatoes and onion.<br> 2.	Cook onions for 5 min, add ginger-garlic paste cook till fragrant. <br> 3.	Add turmeric, coriander powder, chili powder. <br> 4.	Cook till oil separates. <br> 5.	Add tomatoes, cook till mushy. <br> 6.	Crack eggs into the curry, cover and cook till eggs are done.";
            } else if (selectedIngredients.includes("ingredient2")&& selectedIngredients.includes("ingredient3")) {
                recipe = "Recipe: EGG-ONION RECIPE <br><br> Ingredients: <br> 1½large yellow onions peeled and roughly chopped into ½-inch dice<br>½cup vegetable oil or chicken fat<br>6large eggs<br>Sea salt <br> freshly ground black pepper<br>Chopped tarragon<br>chives or parsley, for garnish<br><br>Steps:<br>Step 1:Put the onions and oil in a large frying pan and cook over medium heat, stirring occasionally, for about 20 minutes, or until the onions are golden brown and very soft.<br>Step 2: Meanwhile, put the eggs in a medium saucepan, cover with cold water and bring to a boil. Reduce to a simmer and cook for 8 minutes, until hard-boiled. Drain the eggs and run under cold water until cool enough to handle. Next, tap each egg on the side of the sink until cracked all over, then peel under cold running water. Transfer the peeled eggs to a medium serving bowl. Coarsely mash the eggs with a fork.<br>Step 3: When the onions are caramelized, transfer them to the eggs with a slotted spoon, leaving most of the oil in the pan. Gently mix with your hands or a fork or spoon; you should still be able to distinguish the egg bits from the onions. Season generously with salt and pepper. If the mixture seems too dry, add a little oil from the pan. The mixture should stick together if pressed with your fingers, but should not be oily. Sprinkle with herbs before serving warm or at room temperature.";
            } else if (selectedIngredients.includes("ingredient1")&& selectedIngredients.includes("ingredient3")) {
                recipe = "Recipe: TOMATO-ONION SALAD<br> <br> Ingredients: <br>16 cherry tomatoes <br>½ small brown onion - finely diced<br>3 tbsp finely chopped fresh coriander - (cilantro) <br>pinch salt <br><br>Steps:<br> Chop each of the tomatoes into eighths and add to a bowl.<br>16 cherry tomatoes<br>Add in the finely diced onion, chopped coriander and a pinch of salt.<br>½ small brown onion,3 tbsp finely chopped fresh coriander,pinch salt<br>Stir together and serve.";
            } else if (selectedIngredients.includes("ingredient3")) {
                recipe = "Recipe: ONION PAKODA <br><br> Ingredients:<br>Onion<br> Mint leaves<br>Fennel seeds <br>Gram flour (besan)<br>Rice flour <br> oil<br>Ginger<br>Red chilli powder<br> green chilli <br> garam masala powder for flavor.<br><br>Steps:<br>-Firstly, slice onions roughly in length-wise. Prepare all the other ingredients (mint leaves, green chilli, ginger)<br>-Then, take sliced onion in a mixing bowl. After that, add all the other ingredients except for the oil for deep frying.<br>Add water only under ¼ cup. Mix well but do not apply pressure while mixing, be gentle. This way the onion would not leave out excess water.<br>-Immediately after mixing, heat oil and start deep frying. Suggest not to rest the mixture as it turns brown,<br>-Take small portion and drop in oil by squeezing gently to make a cluster.<br>-Keep the oil heat in medium until its pale golden and bubbling reduces a little.<br>-After that, flip and cook furthermore, in medium or low flame. Before taking out, you can turn up the heat and take it out from oil. This ensures it doesn't retain oil.<br>-Drain over paper towel and repeat to finish all. Remember while dropping, the heat should be high, then medium to low and again high heat while taking out.<br>-Onion pakoda is best when hot and crispy. Serve it as a snack with your favorite chutney, such as green chutney or coconut chutney or simply tomato sauce.";
            } else if (selectedIngredients.includes("ingredient1")) {
                recipe = "Recipe: TOMATO SOUP <br><br> Ingredients:<br>oil<br>tomato<br>onion<br>garlic cloves<br>vegetable broth<br>dries brasil<br>salt<br>pepper<br><br>Steps:<br>- In a large pot, heat some oil over medium-high heat and saute one chopped onion and two minced garlic cloves until soft, about 10 minutes.<br>- Add four cups of vegetable broth, one 28-ounce can of crushed tomatoes, two tablespoons of tomato paste, one teaspoon of dried basil, salt and pepper to taste. Bring to a boil, then lower the heat and simmer for 20 minutes.<br>- Puree the soup with an immersion blender or in batches in a blender until smooth. Adjust the seasoning if needed.";
            } else if (selectedIngredients.includes("ingredient2")) {
                recipe = "Recipe: EGG OMELETE <br><br> Ingredients:<br> egg<br>salt<br>pepper<br>butter or oil<br><br>Steps:<br>- Crack two eggs into a small bowl and whisk them well with a fork. Add a pinch of salt and pepper to taste.<br>- Heat a nonstick skillet over medium-high heat and add a tablespoon of butter or oil. Swirl the pan to coat it evenly.<br>- When the butter is melted or the oil is hot, pour the egg mixture into the pan and tilt it to spread it evenly.<br>- Cook for about two minutes, or until the bottom is lightly browned and the top is almost set. You can use a spatula to lift the edges and check the doneness.<br>- If you want to add any fillings, such as cheese, ham, mushrooms, or spinach, sprinkle them over half of the omelette.<br>- Carefully fold the other half of the omelette over the fillings and slide it onto a plate.<br>- Enjoy your egg omelette with some bread, salad, or fruit.";
            } else {
                recipe = "Recipe: Mix selected ingredients and enjoy!";
            }

            displayRecipe(recipe);
        }

        function displayRecipe(recipe) {
            const recipeOutput = document.getElementById('recipe-output');
            recipeOutput.innerHTML = `<p>${recipe}</p>`;
        }