export const CATEGORIES = [
  { id: 'all', label: 'All Products', icon: '🌿' },
  { id: 'organic', label: 'Organic', icon: '🌱' },
  { id: 'diabetes', label: 'Diabetes Friendly', icon: '💉' },
  { id: 'protein', label: 'Protein Rich', icon: '💪' },
  { id: 'millets', label: 'Traditional Millets', icon: '🌾' },
  { id: 'eco', label: 'Eco Products', icon: '♻️' },
]

export const PRODUCTS = [
  {
    id: 1, name: 'Organic Quinoa', category: 'organic', price: 349,
    ecoScore: 92, calories: 120, image: '🌾',
    tags: ['gluten-free', 'vegan'], description: 'Premium organic quinoa, rich in complete protein.',
    isJunk: false, allergens: [],
  },
  {
    id: 2, name: 'Finger Millet Flour', category: 'millets', price: 189,
    ecoScore: 95, calories: 336, image: '🌿',
    tags: ['diabetes-friendly', 'high-fiber'], description: 'Traditional ragi flour, excellent for diabetics.',
    isJunk: false, allergens: [],
  },
  {
    id: 3, name: 'Whey Protein Isolate', category: 'protein', price: 1299,
    ecoScore: 65, calories: 110, image: '💊',
    tags: ['muscle-gain', 'post-workout'], description: 'Pure whey protein for muscle recovery.',
    isJunk: false, allergens: ['dairy'],
  },
  {
    id: 4, name: 'Stevia Sweetener', category: 'diabetes', price: 299,
    ecoScore: 88, calories: 0, image: '🍃',
    tags: ['zero-calorie', 'diabetes-friendly'], description: 'Natural plant-based sweetener, zero glycemic index.',
    isJunk: false, allergens: [],
  },
  {
    id: 5, name: 'Bamboo Cutlery Set', category: 'eco', price: 249,
    ecoScore: 99, calories: 0, image: '🎋',
    tags: ['reusable', 'biodegradable'], description: 'Sustainable bamboo cutlery, replace plastic forever.',
    isJunk: false, allergens: [],
  },
  {
    id: 6, name: 'Chia Seeds', category: 'organic', price: 279,
    ecoScore: 90, calories: 138, image: '🫘',
    tags: ['omega-3', 'vegan', 'gluten-free'], description: 'Superfood chia seeds loaded with omega-3.',
    isJunk: false, allergens: [],
  },
  {
    id: 7, name: 'Barnyard Millet', category: 'millets', price: 159,
    ecoScore: 96, calories: 300, image: '🌾',
    tags: ['gluten-free', 'high-fiber'], description: 'Ancient grain, perfect alternative to rice.',
    isJunk: false, allergens: [],
  },
  {
    id: 8, name: 'Pea Protein Powder', category: 'protein', price: 899,
    ecoScore: 85, calories: 100, image: '🟢',
    tags: ['vegan', 'muscle-gain'], description: '100% plant-based protein from yellow peas.',
    isJunk: false, allergens: [],
  },
  {
    id: 9, name: 'Moringa Leaf Powder', category: 'organic', price: 199,
    ecoScore: 94, calories: 55, image: '🌿',
    tags: ['superfood', 'iron-rich'], description: 'Nutrient-dense moringa packed with vitamins.',
    isJunk: false, allergens: [],
  },
  {
    id: 10, name: 'Eco Water Bottle', category: 'eco', price: 599,
    ecoScore: 98, calories: 0, image: '🍶',
    tags: ['reusable', 'BPA-free'], description: 'Stainless steel bottle, ditch single-use plastic.',
    isJunk: false, allergens: [],
  },
  {
    id: 11, name: 'Ultra Junk Chips', category: 'organic', price: 49,
    ecoScore: 20, calories: 550, image: '🍟',
    tags: ['high-sodium', 'processed'], description: 'Highly processed snack.',
    isJunk: true, allergens: ['gluten', 'dairy'],
  },
  {
    id: 12, name: 'Spirulina Tablets', category: 'protein', price: 449,
    ecoScore: 91, calories: 20, image: '💚',
    tags: ['vegan', 'protein-rich', 'superfood'], description: 'Blue-green algae, nature\'s most complete protein.',
    isJunk: false, allergens: [],
  },
]

export const DUMMY_USERS = [
  { id: 1, name: 'Arjun Kumar', email: 'arjun@example.com', joined: '2025-11-01', healthScore: 78 },
  { id: 2, name: 'Priya Sharma', email: 'priya@example.com', joined: '2025-12-14', healthScore: 85 },
  { id: 3, name: 'Ravi Patel', email: 'ravi@example.com', joined: '2026-01-03', healthScore: 62 },
  { id: 4, name: 'Anjali Nair', email: 'anjali@example.com', joined: '2026-01-22', healthScore: 91 },
  { id: 5, name: 'Vikram Singh', email: 'vikram@example.com', joined: '2026-02-10', healthScore: 74 },
]

export const DIET_PLANS = {
  weightLoss: [
    { day: 'Monday', breakfast: 'Ragi porridge + Green tea', lunch: 'Brown rice + Dal + Salad', dinner: 'Millet khichdi + Curd', calories: 1400 },
    { day: 'Tuesday', breakfast: 'Chia pudding + Fruits', lunch: 'Quinoa bowl + Tofu', dinner: 'Soup + Multigrain roti', calories: 1350 },
    { day: 'Wednesday', breakfast: 'Oats + Banana', lunch: 'Millets + Sambar', dinner: 'Stir-fry veggies + Paneer', calories: 1420 },
    { day: 'Thursday', breakfast: 'Sprouts + Coconut water', lunch: 'Jowar roti + Sabzi', dinner: 'Moong dal + Salad', calories: 1380 },
    { day: 'Friday', breakfast: 'Smoothie bowl', lunch: 'Quinoa salad + Lentils', dinner: 'Vegetable soup + Bread', calories: 1360 },
    { day: 'Saturday', breakfast: 'Idli + Chutney', lunch: 'Brown rice + Fish curry', dinner: 'Grilled chicken + Veggies', calories: 1450 },
    { day: 'Sunday', breakfast: 'Fruit bowl + Nuts', lunch: 'Millet pulao + Raita', dinner: 'Dal + Roti', calories: 1400 },
  ],
}

export const CHATBOT_RESPONSES = {
  'health problem': 'I understand you have health concerns. Common issues we address: diabetes management, weight control, gut health, and energy optimization. Tell me your specific concern for personalized food recommendations!',
  'good food': 'Top nutritious foods I recommend: 🌾 Finger Millet (Ragi), 🫘 Chia Seeds, 🌿 Moringa, 💚 Spirulina, 🥗 Quinoa. These are available in our marketplace!',
  'junk food': 'Foods to avoid: 🍟 Processed chips, 🥤 Sugary drinks, 🍫 Candy bars, 🍕 Fast food pizza, 🍩 Donuts. These spike blood sugar and cause inflammation.',
  'diet plan': 'I can generate a personalized 7-day diet plan for you! Go to your Dashboard and click "Generate Diet Plan". Choose your goal: weight loss, muscle gain, or diabetes management.',
  'allergy': 'I can help with allergy-safe foods! Common allergens to avoid: Gluten (use millets), Dairy (use plant protein), Nuts (use seeds). Filter products by allergen in our Marketplace.',
  'weight loss': '🔥 Best weight loss foods: Ragi, Quinoa, Green vegetables, Chia seeds, Moringa. Avoid: Sugar, Refined flour, Fried foods. Track your BMI in our Health Tracker!',
  'muscle gain': '💪 Best muscle foods: Whey protein, Pea protein, Spirulina, Eggs, Lentils, Quinoa. Aim for 1.6g protein per kg body weight daily.',
  'brain': '🧠 Brain boosting foods: Walnuts, Chia seeds (omega-3), Turmeric, Dark leafy greens, Blueberries. Avoid: Sugar & trans fats which cause brain fog.',
  'heart': '❤️ Heart healthy foods: Oats, Flaxseeds, Avocado, Walnuts, Leafy greens. Avoid: Saturated fats, Trans fats, Excess sodium. Exercise 30 mins daily!',
  'diabetes': '💉 Diabetes friendly foods: Finger millet, Barnyard millet, Bitter gourd, Fenugreek, Stevia. Avoid: White rice, White bread, Sugary drinks. Monitor blood sugar regularly.',
  'default': 'Hello! I am NutriNova AI Assistant 🌿. I can help you with food recommendations, health tips, and diet plans. Choose a quick option above or type your question!',
}
