function cardsEvent() {

  return `
  <div class="categorieContainerProduct">
            <div class="cardContainer">
                <h2> €</h2>

                <img src="">
                <p><?= $data['description'] ?> </p>
                <button>Ajouter au panier</button>
            </div>
    </div>
  `;

}

export default cardsEvent;