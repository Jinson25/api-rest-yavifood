import bcrypt from "bcryptjs";
export const sample_foods: any[] = [
  {
    id: '1',
    name: 'Caldo de Bolas',
    cookTime: '20-25',
    price: 10,
    favorite: false,
    origins: ['Ecuador'],
    stars: 4.5,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Sopas', 'Todo'],
  },
  {
    id: '2',
    name: 'Papas Fritas',
    price: 20,
    cookTime: '05-10',
    favorite: true,
    origins: ['Ecuador', 'Quito'],
    stars: 4.7,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['ComidaRapida', 'Todo'],
  },
  {
    id: '3',
    name: 'Menestra de Frejol',
    price: 50,
    cookTime: '10-15',
    favorite: false,
    origins: ['Manabi'],
    stars: 3.5,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Almuerzos', 'Todo'],
  },
  {
    id: '4',
    name: 'Tigrillo',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['Ecuador'],
    stars: 3.3,
    imageUrl: 'https://www.bonella.com.ec/-/media/Project/Upfield/Brands/Rama/Rama-EC/Assets/Recipes/sync-img/aee6aa7f-26b7-4327-b78b-051d06a86f51.jpg?rev=a5e10720d9dc445e89d96b438da6eb0a&w=900',
    tags: ['Desayunos', 'Todo'],
  },
  {
    id: '5',
    name: 'Gourmet',
    price: 110,
    cookTime: '40-50',
    favorite: false,
    origins: ['Ecuador'],
    stars: 5.0,
    imageUrl: 'https://aprende.com/wp-content/uploads/2022/06/platillo-gourmet.jpg',
    tags: ['Gourmet', 'Todo'],
  },
  {
    id: '6',
    name: 'Batido Fresa',
    price: 2,
    cookTime: '2 - 10',
    favorite: false,
    origins: ['Ecuador'],
    stars: 4.0,
    imageUrl: 'https://www.comedera.com/wp-content/uploads/2022/04/Batido-de-fresa-shutterstock_398479468.jpg',
    tags: ['Jugos', 'Todo'],
  },
  {
    id: '7',
    name: 'Arroz con Pollo',
    cookTime: '25-30',
    price: 15,
    favorite: false,
    origins: ['Peru'],
    stars: 4.2,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Almuerzos', 'Todo'],
  },
  {
    id: '7',
    name: 'Arroz con Pollo',
    cookTime: '25-30',
    price: 15,
    favorite: false,
    origins: ['Peru'],
    stars: 4.2,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Almuerzos', 'Todo'],
  },
  {
    id: '8',
    name: 'Pizza Margherita',
    cookTime: '12-15',
    price: 25,
    favorite: true,
    origins: ['Italy'],
    stars: 4.8,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Cenas', 'Todo'],
  },
  {
    id: '9',
    name: 'Ensalada Caprese',
    price: 30,
    cookTime: '10-15',
    favorite: false,
    origins: ['Italy'],
    stars: 4.0,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Ensaladas', 'Todo'],
  },
  {
    id: '10',
    name: 'Ceviche de Camarones',
    price: 22,
    cookTime: '15-20',
    favorite: true,
    origins: ['Peru'],
    stars: 4.5,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Mariscos', 'Almuerzos'],
  },
  {
    id: '11',
    name: 'Hamburguesa Clásica',
    price: 18,
    cookTime: '10-15',
    favorite: false,
    origins: ['Estados Unidos'],
    stars: 3.8,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Hamburguesas', 'Todo'],
  },
  {
    id: '12',
    name: 'Tacos al Pastor',
    price: 14,
    cookTime: '15-20',
    favorite: true,
    origins: ['Mexico'],
    stars: 4.5,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Mexicano', 'Cenas'],
  },
  {
    id: '13',
    name: 'Sushi de Aguacate',
    price: 20,
    cookTime: '20-25',
    favorite: false,
    origins: ['Japan'],
    stars: 4.2,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Sushi', 'Cenas'],
  },
  {
    id: '14',
    name: 'Spaghetti Carbonara',
    price: 16,
    cookTime: '12-18',
    favorite: true,
    origins: ['Italy'],
    stars: 4.7,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Pasta', 'Cenas'],
  },
  {
    id: '15',
    name: 'Enchiladas',
    price: 22,
    cookTime: '25-30',
    favorite: false,
    origins: ['Mexico'],
    stars: 4.0,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Mexicano', 'Almuerzos'],
  },
  {
    id: '16',
    name: 'Pollo Teriyaki',
    price: 18,
    cookTime: '15-20',
    favorite: true,
    origins: ['Japan'],
    stars: 4.5,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Asian', 'Cenas'],
  },
  {
    id: '17',
    name: 'Tarta de Manzana',
    price: 25,
    cookTime: '40-45',
    favorite: false,
    origins: ['France'],
    stars: 4.2,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Postres', 'Todo'],
  },
  {
    id: '18',
    name: 'Tacos de Pescado',
    price: 20,
    cookTime: '15-20',
    favorite: true,
    origins: ['Mexico'],
    stars: 4.7,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Mariscos', 'Almuerzos'],
  },
  {
    id: '19',
    name: 'Pasta Primavera',
    price: 16,
    cookTime: '20-25',
    favorite: false,
    origins: ['Italy'],
    stars: 4.0,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Pasta', 'Almuerzos'],
  },
  {
    id: '20',
    name: 'Fajitas de Pollo',
    price: 18,
    cookTime: '15-20',
    favorite: true,
    origins: ['Mexico'],
    stars: 4.5,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Mexicano', 'Cenas'],
  },
  {
    id: '21',
    name: 'Salmon Poke Bowl',
    price: 25,
    cookTime: '10-15',
    favorite: false,
    origins: ['Hawaii'],
    stars: 4.2,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Mariscos', 'Almuerzos'],
  },
  {
    id: '22',
    name: 'Pastel de Chocolate',
    price: 30,
    cookTime: '40-45',
    favorite: true,
    origins: ['United States'],
    stars: 4.7,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Postres', 'Todo'],
  },
  {
    id: '23',
    name: 'Burritos',
    price: 18,
    cookTime: '15-20',
    favorite: false,
    origins: ['Mexico'],
    stars: 4.0,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Mexicano', 'Cenas'],
  },
  {
    id: '24',
    name: 'Ensalada de Quinoa',
    price: 22,
    cookTime: '10-15',
    favorite: true,
    origins: ['South America'],
    stars: 4.5,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Ensaladas', 'Todo'],
  },
  {
    id: '25',
    name: 'Pollo a la Parrilla',
    price: 20,
    cookTime: '20-25',
    favorite: false,
    origins: ['United States'],
    stars: 4.2,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Cenas', 'Todo'],
  },
  {
    id: '26',
    name: 'Tiramisú',
    price: 15,
    cookTime: '30-35',
    favorite: true,
    origins: ['Italy'],
    stars: 4.7,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Postres', 'Todo'],
  },
  {
    id: '27',
    name: 'Wrap de Pollo',
    price: 14,
    cookTime: '12-15',
    favorite: false,
    origins: ['United States'],
    stars: 4.0,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Almuerzos', 'Todo'],
  },
  {
    id: '28',
    name: 'Sopa de Lentejas',
    price: 12,
    cookTime: '25-30',
    favorite: true,
    origins: ['Middle East'],
    stars: 4.5,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Sopas', 'Almuerzos'],
  },
  {
    id: '29',
    name: 'Hummus y Pita',
    price: 16,
    cookTime: '10-15',
    favorite: false,
    origins: ['Middle East'],
    stars: 4.2,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Aperitivos', 'Todo'],
  },
  {
    id: '30',
    name: 'Pollo Kung Pao',
    price: 18,
    cookTime: '15-20',
    favorite: true,
    origins: ['China'],
    stars: 4.7,
    imageUrl: 'https://recetas123.net/wp-content/uploads/menestra-de-frejol.jpg',
    tags: ['Asian', 'Cenas'],
  },

]

export const sample_tags: any[] = [
  { name: 'All', count: 6 },
  { name: 'ComidaRapida', count: 4 },
  { name: 'Postres', count: 2 },
  { name: 'Almuerzos', count: 3 },
  { name: 'Desayunos', count: 2 },
  { name: 'Gourmet', count: 1 },
  { name: 'Jugos', count: 1 },
  { name: 'Sopas', count: 1 },
]

export const sample_users: any[] = [
  {
    name: "Angeles Quinatoa",
    email: "angeles@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    address: "Toronto On",
    isAdmin: true,
  },
  {
    name: "Jinson Medina",
    email: "admin@admin.net",
    password: bcrypt.hashSync("12345", 10),
    address: "Catzuqui",
    isAdmin: true,
  },
  {
    name: "Alessandro Cisneros",
    email: "alessandro@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    address: "Shanghai",
    isAdmin: false,
  },
  {
    name: "Mishel",
    email: "mishel@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    address: "Quitumbe",
    isAdmin: false,
  },
];
