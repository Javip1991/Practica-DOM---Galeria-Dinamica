const legoProducts = [
            {
                id: 1,
                title: "LEGO Star Wars Halcón Milenario",
                price: "849.99 €",
                category: "Star Wars",
                image: "https://www.lego.com/cdn/cs/set/assets/blt3349f56c6f192e18/75192_Prod.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",     
                enlace: "https://www.lego.com/es-es/product/75192"
            },
            {
                id: 2,
                title: "LEGO Harry Potter Castillo Hogwarts",
                price: "469.99 €",
                category: "Harry Potter",
                image: "https://www.lego.com/cdn/cs/set/assets/blt51ff6bf5627b4161/71043_Prod.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
                enlace: "https://www.lego.com/es-es/product/71043"
            },
            {
                id: 3,
                title: "LEGO Technic McLaren P1",
                price: "449.99 €",
                category: "Technic",
                image: "https://www.lego.com/cdn/cs/set/assets/blt519dac201a3dd4c1/42172.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
                enlace: "https://www.lego.com/es-es/product/42172"
            },
            {
                id: 4,
                title: "LEGO City Persecucion moto policial",
                price: "9.99 €",
                category: "City",
                image: "https://www.lego.com/cdn/cs/set/assets/blt182bf1ba1dce75fa/60455_Prod_en-gb.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
                enlace: "https://www.lego.com/es-es/product/60455"
            },
            {
                id: 5,
                title: "LEGO Máquina Expendedora de Minifiguras",
                price: "169.99 €",
                category: "Ideas",
                image: "https://www.lego.com/cdn/cs/set/assets/blt1b722db9c4e6093b/21358_Prod_en-gb.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
                enlace: "https://www.lego.com/es-es/product/21358"
            },
            {
                id: 6,
                title: "LEGO Talleres de la Ciudad de NINJAGO",
                price: "249.99 €",
                category: "Ninjago",
                image: "https://www.lego.com/cdn/cs/set/assets/blt34caca320d47f97e/71837_Prod_en-gb.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
                enlace: "https://www.lego.com/es-es/product/71837"
            },
            {
                id: 7,
                title: "LEGO Castillo de Disney",
                price: "339.99 €",
                category: "Disney",
                image: "https://www.lego.com/cdn/cs/set/assets/blt4dbf45919a0034d4/43222.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
                enlace: "https://www.lego.com/es-es/product/43222"
            },
            {
                id: 8,
                title: "LEGO Creator Mansion encantada",
                price: "89.99 €",
                category: "Creator",
                image: "https://www.lego.com/cdn/cs/set/assets/blt61735fb0922b35cc/31167_Prod.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
                enlace: "https://www.lego.com/es-es/product/31167"
            },
            {
                id: 9,
                title: "LEGO Architecture Torre Eiffel",
                price: "6299.99 €",
                category: "Architecture",
                image: "https://www.lego.com/cdn/cs/set/assets/blt0e2b04c977a2dc2a/10307.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
                enlace: "https://www.lego.com/es-es/product/10307"
            }
        ];

        function renderProducts(products) {
            const productList = document.getElementById('product-list');
            productList.innerHTML = '';
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'lego-product-card';
                
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">${product.title}</h3>
                        <p class="product-price">${product.price}</p>
                        <span class="filter-tag">${product.category}</span>
                    </div>
                `;

                productCard.addEventListener('click', () => {
                const url = product.enlace ? product.enlace : `https://www.lego.com/es-es/product/${product.id}`;
                window.open(url, '_blank');
            });

                
                productList.appendChild(productCard);
            });
        }

        document.addEventListener('DOMContentLoaded', () => renderProducts(legoProducts));

        const searchInput = document.querySelector('.lego-search');
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = legoProducts.filter(product => 
                product.title.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
            renderProducts(filtered);
        });

        






            