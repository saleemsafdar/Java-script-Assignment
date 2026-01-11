function make_sandwich(...items) {
    console.log("\nMaking a sandwich with:");
    items.forEach(item => console.log("- " + item));
}

make_sandwich("Cheese", "Chicken");
make_sandwich("Lettuce", "Tomato", "Mayo");
make_sandwich("Peanut Butter", "Jelly");