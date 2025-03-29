
import { Recipe } from '@/types/recipe';

export const recipes: Recipe[] = [
  {
    id: 'italian-pasta-primavera',
    title: 'Italian Pasta Primavera',
    description: 'A light and flavorful pasta dish loaded with fresh vegetables and herbs, tossed in a delicate white wine sauce.',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    cuisine: 'italian',
    featured: true,
    ingredients: [
      { id: 1, name: 'pasta', quantity: 12, unit: 'oz' },
      { id: 2, name: 'olive oil', quantity: 3, unit: 'tbsp' },
      { id: 3, name: 'garlic cloves, minced', quantity: 3, unit: '' },
      { id: 4, name: 'cherry tomatoes, halved', quantity: 1, unit: 'cup' },
      { id: 5, name: 'zucchini, sliced', quantity: 1, unit: 'medium' },
      { id: 6, name: 'bell peppers, diced', quantity: 2, unit: '' },
      { id: 7, name: 'white wine', quantity: 0.25, unit: 'cup' },
      { id: 8, name: 'Parmesan cheese, grated', quantity: 0.5, unit: 'cup' },
      { id: 9, name: 'fresh basil, chopped', quantity: 0.25, unit: 'cup' },
      { id: 10, name: 'salt', quantity: 1, unit: 'tsp' },
      { id: 11, name: 'black pepper', quantity: 0.5, unit: 'tsp' },
    ],
    steps: [
      {
        id: 1,
        title: 'Prepare the ingredients',
        description: 'Wash and chop all vegetables. Mince garlic, halve tomatoes, slice zucchini, and dice bell peppers. Grate Parmesan cheese and chop fresh basil.',
        imageUrl: 'https://images.unsplash.com/photo-1567137827022-fbe18eff7275',
      },
      {
        id: 2,
        title: 'Cook pasta',
        description: 'Bring a large pot of salted water to a boil. Add pasta and cook according to package instructions until al dente. Reserve 1/2 cup of pasta water before draining.',
        imageUrl: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14',
      },
      {
        id: 3,
        title: 'Sauté vegetables',
        description: 'In a large skillet, heat olive oil over medium heat. Add garlic and sauté for 30 seconds until fragrant. Add bell peppers and zucchini, cooking for 3-4 minutes until slightly tender.',
        imageUrl: 'https://images.unsplash.com/photo-1580013759032-c96505e24c1f',
      },
      {
        id: 4,
        title: 'Add tomatoes and wine',
        description: 'Add cherry tomatoes to the skillet and cook for 2 minutes. Pour in white wine and let it simmer for 3 minutes to reduce slightly.',
      },
      {
        id: 5,
        title: 'Combine and season',
        description: 'Add the drained pasta to the skillet with vegetables. Toss to combine, adding pasta water as needed to create a light sauce. Season with salt and pepper.',
      },
      {
        id: 6,
        title: 'Finish and serve',
        description: 'Remove from heat. Stir in grated Parmesan cheese and fresh basil. Serve immediately with additional Parmesan on top if desired.',
        imageUrl: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
      },
    ],
  },
  {
    id: 'asian-glazed-salmon',
    title: 'Asian Glazed Salmon',
    description: 'Tender salmon fillets coated in a sweet and savory Asian-inspired glaze, served with steamed rice and vegetables.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2',
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    cuisine: 'asian',
    ingredients: [
      { id: 1, name: 'salmon fillets', quantity: 2, unit: 'fillets' },
      { id: 2, name: 'soy sauce', quantity: 3, unit: 'tbsp' },
      { id: 3, name: 'honey', quantity: 2, unit: 'tbsp' },
      { id: 4, name: 'rice vinegar', quantity: 1, unit: 'tbsp' },
      { id: 5, name: 'sesame oil', quantity: 1, unit: 'tsp' },
      { id: 6, name: 'garlic cloves, minced', quantity: 2, unit: '' },
      { id: 7, name: 'ginger, grated', quantity: 1, unit: 'tsp' },
      { id: 8, name: 'green onions, sliced', quantity: 2, unit: '' },
      { id: 9, name: 'sesame seeds', quantity: 1, unit: 'tsp' },
    ],
    steps: [
      {
        id: 1,
        title: 'Prepare the glaze',
        description: 'In a small bowl, whisk together soy sauce, honey, rice vinegar, sesame oil, minced garlic, and grated ginger until well combined.',
      },
      {
        id: 2,
        title: 'Prepare the salmon',
        description: 'Pat salmon fillets dry with paper towels. Place them in a shallow dish and pour half of the glaze over them, turning to coat. Marinate for 15 minutes.',
        imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2',
      },
      {
        id: 3,
        title: 'Preheat the oven',
        description: 'Preheat the oven to 400°F (200°C). Line a baking sheet with parchment paper or aluminum foil.',
      },
      {
        id: 4,
        title: 'Bake the salmon',
        description: 'Place the marinated salmon on the prepared baking sheet. Bake for 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork.',
      },
      {
        id: 5,
        title: 'Reduce remaining glaze',
        description: 'While the salmon is baking, pour the remaining glaze into a small saucepan. Bring to a simmer over medium heat and cook for 2-3 minutes until slightly thickened.',
      },
      {
        id: 6,
        title: 'Serve',
        description: 'Drizzle the reduced glaze over the baked salmon. Garnish with sliced green onions and sesame seeds. Serve with steamed rice and vegetables.',
      },
    ],
  },
  {
    id: 'mexican-street-tacos',
    title: 'Authentic Mexican Street Tacos',
    description: 'Traditional street-style tacos with marinated grilled meat, fresh cilantro, onions, and a squeeze of lime on soft corn tortillas.',
    image: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    cuisine: 'mexican',
    ingredients: [
      { id: 1, name: 'flank steak', quantity: 1, unit: 'pound' },
      { id: 2, name: 'corn tortillas', quantity: 12, unit: 'small' },
      { id: 3, name: 'white onion, finely chopped', quantity: 0.5, unit: 'cup' },
      { id: 4, name: 'fresh cilantro, chopped', quantity: 0.5, unit: 'cup' },
      { id: 5, name: 'limes, quartered', quantity: 2, unit: '' },
      { id: 6, name: 'garlic cloves, minced', quantity: 3, unit: '' },
      { id: 7, name: 'ground cumin', quantity: 1, unit: 'tbsp' },
      { id: 8, name: 'chili powder', quantity: 1, unit: 'tbsp' },
      { id: 9, name: 'olive oil', quantity: 2, unit: 'tbsp' },
      { id: 10, name: 'salt', quantity: 1, unit: 'tsp' },
    ],
    steps: [
      {
        id: 1,
        title: 'Marinate the steak',
        description: 'In a bowl, mix minced garlic, cumin, chili powder, salt, and olive oil. Rub the mixture all over the flank steak. Cover and refrigerate for at least 1 hour, preferably overnight.',
        imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e',
      },
      {
        id: 2,
        title: 'Prepare toppings',
        description: 'Finely chop the white onion and fresh cilantro. Cut limes into quarters. Set aside in small serving bowls.',
      },
      {
        id: 3,
        title: 'Grill the steak',
        description: 'Preheat grill to high heat. Grill the marinated flank steak for 4-5 minutes per side for medium-rare, or to your desired doneness. Let rest for 5 minutes before slicing.',
        imageUrl: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c',
      },
      {
        id: 4,
        title: 'Slice the meat',
        description: 'Slice the grilled steak against the grain into thin strips. Then chop the strips into smaller pieces.',
      },
      {
        id: 5,
        title: 'Warm the tortillas',
        description: 'Heat a dry skillet over medium heat. Warm the corn tortillas for about 30 seconds on each side until soft and pliable, but not crispy.',
      },
      {
        id: 6,
        title: 'Assemble the tacos',
        description: 'Place a small amount of chopped steak in the center of each tortilla. Top with chopped onion and cilantro. Serve with lime quarters for squeezing over the tacos just before eating.',
      },
    ],
  },
  {
    id: 'chocolate-lava-cake',
    title: 'Decadent Chocolate Lava Cake',
    description: 'Indulgent individual chocolate cakes with a molten chocolate center, dusted with powdered sugar and served warm.',
    image: 'https://images.unsplash.com/photo-1617305855058-336d24456869',
    prepTime: 15,
    cookTime: 12,
    servings: 4,
    cuisine: 'dessert',
    ingredients: [
      { id: 1, name: 'unsalted butter', quantity: 0.5, unit: 'cup' },
      { id: 2, name: 'semisweet chocolate', quantity: 4, unit: 'oz' },
      { id: 3, name: 'eggs', quantity: 2, unit: 'large' },
      { id: 4, name: 'egg yolks', quantity: 2, unit: 'large' },
      { id: 5, name: 'granulated sugar', quantity: 0.25, unit: 'cup' },
      { id: 6, name: 'all-purpose flour', quantity: 2, unit: 'tbsp' },
      { id: 7, name: 'cocoa powder', quantity: 1, unit: 'tbsp' },
      { id: 8, name: 'salt', quantity: 0.25, unit: 'tsp' },
      { id: 9, name: 'powdered sugar, for dusting', quantity: 1, unit: 'tbsp' },
    ],
    steps: [
      {
        id: 1,
        title: 'Prepare ramekins',
        description: 'Preheat oven to 425°F (220°C). Butter four 6-ounce ramekins and dust with cocoa powder, tapping out excess.',
      },
      {
        id: 2,
        title: 'Melt chocolate and butter',
        description: 'In a heatproof bowl over simmering water, melt butter and chocolate together, stirring occasionally until smooth. Remove from heat and let cool slightly.',
        imageUrl: 'https://images.unsplash.com/photo-1511381939415-e44015466834',
      },
      {
        id: 3,
        title: 'Prepare the batter',
        description: 'In a separate bowl, whisk together eggs, egg yolks, and sugar until pale and thick. Fold in the melted chocolate mixture. Gently fold in flour, cocoa powder, and salt until just combined.',
      },
      {
        id: 4,
        title: 'Fill ramekins',
        description: 'Divide the batter evenly among the prepared ramekins, filling each about 3/4 full.',
      },
      {
        id: 5,
        title: 'Bake',
        description: 'Place ramekins on a baking sheet and bake for 12 minutes, or until the sides are set but the center is still soft.',
        imageUrl: 'https://images.unsplash.com/photo-1617305855058-336d24456869',
      },
      {
        id: 6,
        title: 'Serve',
        description: 'Remove from oven and let stand for 1 minute. Run a knife around the edge of each cake, then invert onto serving plates. Dust with powdered sugar and serve immediately, while the centers are still warm and molten.',
      },
    ],
  },
  {
    id: 'vegetarian-buddha-bowl',
    title: 'Nourishing Vegetarian Buddha Bowl',
    description: 'A vibrant, nutrient-packed bowl with a variety of colorful vegetables, grains, and protein, topped with a creamy tahini dressing.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    prepTime: 20,
    cookTime: 30,
    servings: 2,
    cuisine: 'vegetarian',
    ingredients: [
      { id: 1, name: 'quinoa, rinsed', quantity: 0.75, unit: 'cup' },
      { id: 2, name: 'sweet potato, cubed', quantity: 1, unit: 'medium' },
      { id: 3, name: 'chickpeas, drained and rinsed', quantity: 15, unit: 'oz can' },
      { id: 4, name: 'avocado, sliced', quantity: 1, unit: 'medium' },
      { id: 5, name: 'kale, chopped', quantity: 2, unit: 'cups' },
      { id: 6, name: 'red cabbage, shredded', quantity: 1, unit: 'cup' },
      { id: 7, name: 'tahini', quantity: 2, unit: 'tbsp' },
      { id: 8, name: 'lemon juice', quantity: 1, unit: 'tbsp' },
      { id: 9, name: 'olive oil', quantity: 2, unit: 'tbsp' },
      { id: 10, name: 'maple syrup', quantity: 1, unit: 'tsp' },
      { id: 11, name: 'garlic clove, minced', quantity: 1, unit: '' },
      { id: 12, name: 'salt', quantity: 0.5, unit: 'tsp' },
      { id: 13, name: 'black pepper', quantity: 0.25, unit: 'tsp' },
      { id: 14, name: 'pumpkin seeds', quantity: 2, unit: 'tbsp' },
    ],
    steps: [
      {
        id: 1,
        title: 'Cook quinoa',
        description: 'Combine quinoa with 1.5 cups water in a pot. Bring to a boil, reduce heat to low, cover and simmer for 15 minutes. Remove from heat and let stand for 5 minutes, then fluff with a fork.',
      },
      {
        id: 2,
        title: 'Roast sweet potatoes and chickpeas',
        description: 'Preheat oven to 400°F (200°C). Toss sweet potato cubes with 1 tbsp olive oil, salt, and pepper. On another baking sheet, toss chickpeas with olive oil, salt, and pepper. Roast both for 20-25 minutes, tossing halfway through.',
        imageUrl: 'https://images.unsplash.com/photo-1596489765834-58d432076d1c',
      },
      {
        id: 3,
        title: 'Prepare kale',
        description: 'Massage chopped kale with a small amount of olive oil and a pinch of salt until it begins to soften, about 2-3 minutes.',
      },
      {
        id: 4,
        title: 'Make dressing',
        description: 'In a small bowl, whisk together tahini, lemon juice, minced garlic, maple syrup, salt, and pepper. Add water, 1 tablespoon at a time, until it reaches a pourable consistency.',
        imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      },
      {
        id: 5,
        title: 'Assemble bowls',
        description: 'Divide quinoa between two bowls. Arrange sweet potatoes, chickpeas, massaged kale, shredded red cabbage, and sliced avocado on top of the quinoa.',
      },
      {
        id: 6,
        title: 'Finish and serve',
        description: 'Drizzle the tahini dressing over the bowls. Sprinkle with pumpkin seeds. Serve immediately or refrigerate for a ready-to-go meal.',
      },
    ],
  },
  {
    id: 'thai-green-curry',
    title: 'Thai Green Curry with Vegetables',
    description: 'A fragrant and creamy Thai green curry loaded with colorful vegetables and aromatic herbs.',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd',
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    cuisine: 'asian',
    ingredients: [
      { id: 1, name: 'coconut milk', quantity: 2, unit: 'cans (13.5 oz each)' },
      { id: 2, name: 'green curry paste', quantity: 3, unit: 'tbsp' },
      { id: 3, name: 'vegetables (bell peppers, carrots, broccoli)', quantity: 4, unit: 'cups mixed' },
      { id: 4, name: 'firm tofu, cubed', quantity: 14, unit: 'oz' },
      { id: 5, name: 'lime leaves', quantity: 4, unit: '' },
      { id: 6, name: 'lemongrass stalk, bruised', quantity: 1, unit: '' },
      { id: 7, name: 'ginger, sliced', quantity: 1, unit: 'inch piece' },
      { id: 8, name: 'vegetable broth', quantity: 1, unit: 'cup' },
      { id: 9, name: 'soy sauce or tamari', quantity: 2, unit: 'tbsp' },
      { id: 10, name: 'palm sugar or brown sugar', quantity: 1, unit: 'tbsp' },
      { id: 11, name: 'lime juice', quantity: 1, unit: 'tbsp' },
      { id: 12, name: 'Thai basil leaves', quantity: 0.5, unit: 'cup' },
      { id: 13, name: 'jasmine rice, cooked', quantity: 2, unit: 'cups' },
    ],
    steps: [
      {
        id: 1,
        title: 'Prepare ingredients',
        description: 'Cut all vegetables into bite-sized pieces. Press and cube tofu. Measure out other ingredients.',
      },
      {
        id: 2,
        title: 'Start the curry base',
        description: 'In a large pot, heat 2 tablespoons of coconut milk over medium heat. Add green curry paste and stir-fry for 1-2 minutes until fragrant.',
      },
      {
        id: 3,
        title: 'Add aromatics',
        description: 'Add sliced ginger, bruised lemongrass, and lime leaves. Stir to combine with the curry paste.',
        imageUrl: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd',
      },
      {
        id: 4,
        title: 'Add coconut milk and broth',
        description: 'Pour in the remaining coconut milk and vegetable broth. Bring to a gentle simmer.',
      },
      {
        id: 5,
        title: 'Add vegetables and tofu',
        description: 'Add harder vegetables like carrots first, simmer for 5 minutes, then add softer vegetables and tofu. Simmer for another 5-7 minutes until vegetables are tender-crisp.',
      },
      {
        id: 6,
        title: 'Season the curry',
        description: 'Stir in soy sauce, palm sugar, and lime juice. Taste and adjust seasonings as needed.',
      },
      {
        id: 7,
        title: 'Finish and serve',
        description: 'Remove from heat. Stir in Thai basil leaves. Serve hot over jasmine rice, removing lemongrass and lime leaves before eating.',
      },
    ],
  },
];

export function getFeaturedRecipes() {
  return recipes.filter(recipe => recipe.featured);
}

export function getRecommendedRecipes(excludeId: string, count = 3) {
  return recipes
    .filter(recipe => recipe.id !== excludeId)
    .slice(0, count);
}

export function getRecipeById(id: string) {
  return recipes.find(recipe => recipe.id === id);
}
