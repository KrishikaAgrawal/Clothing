document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const itemList = document.getElementById("item-list");

  // Example clothing items with images
  const clothingItems = [
    { id: 1, name: "Black Tunic", image: "images/Black Tunic.jpg" },
    {
      id: 2,
      name: "Brown Cotton Kurti",
      image: "images/Brown Cotton Kurti.jpg",
    },
    { id: 3, name: "Ethnic Jacket", image: "images/Ethnic Jacket.jpg" },
    { id: 4, name: "Grey Men Shirts", image: "images/Grey Men Shirts.jpg" },
    { id: 5, name: "Jogger Trackpant", image: "images/Jogger Trackpant.jpg" },
    { id: 6, name: "Men Kurta", image: "images/men kurta.jpg" },
    {
      id: 7,
      name: "Purple Square Neck Top",
      image: "images/purple square neck top.jpg",
    },
    {
      id: 8,
      name: "Round Neck Cotton Blend Tshirt",
      image: "images/Round Neck Cotton Blend Tshirt.jpg",
    },
    { id: 9, name: "Satin Saree", image: "images/Satin Saree.jpg" },
    {
      id: 10,
      name: "Women Shirt Black",
      image: "images/women shirt black.jpg",
    },
  ];

  // Function to display items
  function displayItems(items) {
    itemList.innerHTML = ""; // Clear previous items
    items.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("p-4", "bg-white", "rounded-lg", "shadow-md");
      itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="w-full h-72 object-cover rounded-t-lg">
                <h2 class="text-xl font-bold mt-4">${item.name}</h2>
            `;
      itemList.appendChild(itemElement);
    });
  }

  // Display all items initially
  displayItems(clothingItems);

  // Filter and display items based on search input
  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    const filteredItems = clothingItems.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
    displayItems(filteredItems);
  });
});
