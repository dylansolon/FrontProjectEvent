function formEvent() {
  return `
  <div class="containerTextForm">
  <h1>Fil d'Actualité des Événements</h1>
  </div>
  <div class="containerOpenFormButton container">
  <div class="InputContainer">
  <input type="text" name="text" class="input" id="input" placeholder="Search">
  
  <label for="input" class="labelforsearch">
<svg viewBox="0 0 512 512" class="searchIcon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
</label>
</div>
  <button class="openFormButton" id="openForm">Créer un Événement</button>
</div>
  <div class="overlay1"></div>

  <div class="form-container">
  <form class="formEvent" id="eventForm" enctype='multipart/form-data'>
    <button type="button" class="closeButton" id="closeForm">×</button>
    <h2>Créer un Événement</h2>
    
    <label for="organizer">Nom de l'organisateur :</label>
    <input type="text" id="organizer" name="orgName" placeholder="Nom de l'organisateur">

    <label for="file">Image de l'événement :</label>
    <input type="file" id="file" name="img">
    
    <label for="title">Titre de l'événement :</label>
    <input type="text" id="title" name="title" placeholder="Titre de l'événement">
    
    <div class="dateTimeGroup">
      <div>
        <label for="startDate">Date de début :</label>
        <input type="date" id="startDate" name="startDate">
      </div>
      <div>
        <label for="startTime">Heure de début :</label>
        <input type="time" id="startTime" name="startTime">
      </div>
    </div>
    
    <div class="dateTimeGroup">
      <div>
        <label for="endDate">Date de fin :</label>
        <input type="date" id="endDate" name="endDate">
      </div>
      <div>
        <label for="endTime">Heure de fin :</label>
        <input type="time" id="endTime" name="endTime">
      </div>
    </div>
    
    <label for="description">Description de l'événement :</label>
    <textarea id="description" name="description" rows="4" placeholder="Description de l'événement"></textarea>
    
    <label for="location">Lieu de l'événement :</label>
    <input type="text" id="location" name="location" placeholder="Lieu de l'événement">

    <input type="submit" value="Créer l'événement">
  </form>
  </div>
  `;
}

export default formEvent;
