const fruits = [
    {
      id: 1,
      name: "Apple",
      category: "Fruits",
      price: 150,
      description: "Crisp and juicy red apples, perfect for snacking.",
      imageUrl: "https://media.istockphoto.com/id/1473676063/photo/red-apples-on-the-market-stall.webp?a=1&b=1&s=612x612&w=0&k=20&c=x0WdCbhPmrsjSpQHrykHIwlm6Wn2_yFzMuBVyAXSn3c=",
      rating: 4.7,
      stock: 100,
      brand: "Orchard Fresh",
    },
    {
      id: 2,
      name: "Banana",
      category: "Fruits",
      price: 50,
      description: "Sweet and ripe bananas, great for energy boosts.",
      imageUrl: "https://plus.unsplash.com/premium_photo-1664527307725-362b589c406d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuYW5hc3xlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.5,
      stock: 200,
      brand: "Nature's Basket",
    },
    {
      id: 3,
      name: "Orange",
      category: "Fruits",
      price: 120,
      description: "Citrusy and refreshing oranges, full of vitamin C.",
      imageUrl: "https://media.istockphoto.com/id/172665473/photo/oranges-wallpaper.webp?a=1&b=1&s=612x612&w=0&k=20&c=qCXjKFBAifF617_8NONuDyoifxsCaVTV3E72PM4vxhs=",
      rating: 4.8,
      stock: 150,
      brand: "Citrus Delight",
    },
    
    {
        id: 4,
        name: "Strawberry",
        category: "Fruits",
        price: 300,
        description: "Fresh and juicy strawberries, ideal for desserts.",
        imageUrl: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0cmF3YmVycmllc3xlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.9,
        stock: 80,
        brand: "Berry Bliss"
      },
      {
        id: 5,
        name: "Pineapple",
        category: "Fruits",
        price: 200,
        description: "Tropical and tangy pineapples, perfect for smoothies.",
        imageUrl: "https://images.unsplash.com/photo-1615734337277-dad9a7e99d1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpbmVhcHBsZXN8ZW58MHx8MHx8fDA%3D",
        rating: 4.6,
        stock: 70,
        brand: "Tropical Treat"
      },
      {
        id: 6,
        name: "Mango",
        category: "Fruits",
        price: 250,
        description: "Sweet and succulent mangoes, a summer favorite.",
        imageUrl: "https://media.istockphoto.com/id/501240197/photo/mangoes.webp?a=1&b=1&s=612x612&w=0&k=20&c=2AwrRPyg1nErELN8RHRbBVebd5HkkOXXs-vNXLLieZo=",
        rating: 4.8,
        stock: 90,
        brand: "Golden Harvest"
      },
      {
        id: 7,
        name: "Grapes",
        category: "Fruits",
        price: 180,
        description: "Seedless and juicy grapes, perfect for snacking.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1666270423730-9af384b9cb0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8R3JhcGVzfGVufDB8fDB8fHww",
        rating: 4.4,
        stock: 110,
        brand: "Vineyard Picks"
      },
      {
        id: 8,
        name: "Watermelon",
        category: "Fruits",
        price: 500,
        description: "Refreshing and hydrating watermelons, great for summer.",
        imageUrl: "https://media.istockphoto.com/id/1975501492/photo/group-of-old-tools-hanging-on-white-paint-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=GdN9GhrqgpzZVkmBvixtE3o_uYr6_SswgsWDQarL9hk=",
        rating: 4.7,
        stock: 50,
        brand: "Cool Melon Co."
      },
      {
        id: 9,
        name: "Peach",
        category: "Fruits",
        price: 220,
        description: "Soft and sweet peaches, perfect for pies and jams.",
        imageUrl: "https://media.istockphoto.com/id/1441626991/photo/peaches-and-nectarines.webp?a=1&b=1&s=612x612&w=0&k=20&c=yX2wgEt08J5BDFwqg42nWheVuB6B5V5Mdo64c8SJk2I=",
        rating: 4.5,
        stock: 60,
        brand: "Sunny Orchards"
      },
      {
        id: 10,
        name: "Kiwi",
        category: "Fruits",
        price: 270,
        description: "Exotic and tangy kiwis, full of nutrients.",
        imageUrl: "https://media.istockphoto.com/id/186858235/photo/kiwifruit.webp?a=1&b=1&s=612x612&w=0&k=20&c=AydcOjIAJAUWMohMRVGbr5xSLGqPaaDKWZdMHcWAK9U=",
        rating: 4.6,
        stock: 70,
        brand: "Green Harvest"
      },
      {
        id: 11,
        name: "Papaya",
        category: "Fruits",
        price: 180,
        description: "Tropical papayas, rich in flavor and health benefits.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1664391808687-55acdf5c7317?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UGFwYXlhfGVufDB8fDB8fHww",
        rating: 4.4,
        stock: 40,
        brand: "Tropic Picks"
      },
      {
        id: 12,
        name: "Blueberries",
        category: "Fruits",
        price: 350,
        description: "Antioxidant-rich blueberries, ideal for breakfast bowls.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1685748495537-704b5e4f1941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsdWViZXJyaWVzJTIwdGFydHxlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.9,
        stock: 30,
        brand: "Berry Bliss"
      },
      {
        id: 13,
        name: "Cherry",
        category: "Fruits",
        price: 400,
        description: "Juicy and tart cherries, great for snacking.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1688671923138-ff74e0f9a810?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hlcnJ5fGVufDB8fDB8fHww",
        rating: 4.8,
        stock: 50,
        brand: "Cherry Farm"
      },
      {
        id: 14,
        name: "Pomegranate",
        category: "Fruits",
        price: 300,
        description: "Nutritious and juicy pomegranates, full of antioxidants.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1668076515507-c5bc223c99a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UG9tZWdyYW5hdGV8ZW58MHx8MHx8fDA%3D",
        rating: 4.7,
        stock: 60,
        brand: "Nature's Jewels"
      },
      {
        id: 15,
        name: "Avocado",
        category: "Fruits",
        price: 320,
        description: "Creamy and healthy avocados, great for guacamole.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1666877046457-a2f4ecf1589b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZvY2Fkb3N8ZW58MHx8MHx8fDA%3Dh/to/avocado.jpg",
        rating: 4.5,
        stock: 40,
        brand: "Green Gold"
      },
      {
        id: 16,
        name: "Fig",
        category: "Fruits",
        price: 280,
        description: "Sweet and chewy figs, rich in fiber.",
        imageUrl: "https://images.pexels.com/photos/7438529/pexels-photo-7438529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rating: 4.4,
        stock: 35,
        brand: "Dry Delight"
      },
      {
        id: 17,
        name: "Coconut",
        category: "Fruits",
        price: 100,
        description: "Fresh coconuts, great for hydration and cooking.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1675040830227-9f18e88fd1f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29jb251dHxlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.6,
        stock: 80,
        brand: "Tropic Picks"
      },
      {
        id: 18,
        name: "Guava",
        category: "Fruits",
        price: 150,
        description: "Sweet and aromatic guavas, rich in nutrients.",
        imageUrl: "https://media.istockphoto.com/id/171575811/photo/guava.webp?a=1&b=1&s=612x612&w=0&k=20&c=5afYDx_s2lxEPT7rZjQhVhJSzoA53CFP2eMt7n32RaE=",
        rating: 4.5,
        stock: 70,
        brand: "Tropical Treat"
      },
      {
        id: 19,
        name: "Raspberry",
        category: "Fruits",
        price: 380,
        description: "Tangy and vibrant raspberries, perfect for desserts.",
        imageUrl: "https://images.pexels.com/photos/59999/raspberries-fruits-fruit-berries-59999.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating: 4.8,
        stock: 25,
        brand: "Berry Bliss"
      },
      {
        id: 20,
        name: "Lemon",
        category: "Fruits",
        price: 90,
        description: "Fresh and zesty lemons, ideal for drinks and cooking.",
        imageUrl: "https://images.pexels.com/photos/1414122/pexels-photo-1414122.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating: 4.3,
        stock: 100,
        brand: "Citrus Delight"
      }
  ];
  