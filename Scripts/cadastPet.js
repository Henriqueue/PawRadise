
    const checkbox = document.getElementById('togglePet');
    const petContainer = document.getElementById('petContainer');
    const addPetBtn = document.getElementById('addPet');

    checkbox.addEventListener('change', () => {
        petContainer.style.display = checkbox.checked ? 'block' : 'none';
    });

    addPetBtn.addEventListener('click', () => {
        const newPet = document.createElement('div');
        newPet.classList.add('pet-section');
        newPet.style.marginTop = '20px';
        newPet.innerHTML = `
            <input type="text" placeholder="Nome do Pet">
            <select>
                <option disabled selected>Espécie</option>
                <option>Cachorro</option>
                <option>Gato</option>
            </select>
            <input type="number" placeholder="Idade (em anos)">
            <select>
                <option disabled selected>Porte</option>
                <option>Pequeno</option>
                <option>Médio</option>
                <option>Grande</option>
            </select>
            <input type="text" placeholder="Raça">
            <textarea placeholder="Informações específicas: castrado, deficiências, alergias, etc." rows="4" style="resize: none;"></textarea>
        `;
        petContainer.insertBefore(newPet, addPetBtn);
    });

