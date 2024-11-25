
document.getElementById("smoothie-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const size = document.getElementById("size").value;
    const ingredients = Array.from(
      document.querySelectorAll("input[name='ingredients']:checked")
    ).map((input) => input.value);
    const sweetness = document.getElementById("sweetness").value;
    
    class Smoothie {
      
        constructor(name, size, ingredients, sweetness) {
        this.name = name;
        this.size = size;
        this.ingredients = ingredients;
        this.sweetness = sweetness;
      }
      getDescription() {
        return `
          <p><strong>Customer Name:</strong> ${this.name}</p>
          <p><strong>Size:</strong> ${this.size}</p>
          <p><strong>Ingredients:</strong> ${this.ingredients.join(", ")}</p>
          <p><strong>Sweetness Level:</strong> ${this.sweetness}</p>
        `;
      }
    }
    const smoothie = new Smoothie(name, size, ingredients, sweetness);
    const orderDetails = document.getElementById("order-details");
    orderDetails.innerHTML = smoothie.getDescription();
    document.getElementById("output").style.display = "block";
  });
  document.addEventListener("DOMContentLoaded", () => {
    const ingredientCheckboxes = document.querySelectorAll(".smoothie-form .checkbox-group input[type='checkbox']");
  
    ingredientCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const label = checkbox.nextElementSibling;
        label.classList.add("clicked-label");
        setTimeout(() => {
          label.classList.remove("clicked-label");
        }, 300); 
      });
    });
  });
  