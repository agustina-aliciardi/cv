function completeTrainins() {
  const container = document.getElementsByClassName("training-container")[0];
  let contenido = "";

  cursos.forEach((element, $id) => {
    if (element?.image) {
      contenido += `<div class="training" onClick="displayModal(${$id})">
            <img src="images/certificates/${element.image}" alt="${element.title}" />
            <h5>${element.title}</h5>
          </div>`;
    }
  });
  container.innerHTML = contenido;
}

function displayModal(numberCert) {
  const modal = document.getElementById("training-modal");
  modal.style.display = "block";

  const element = cursos[numberCert];
  modal.innerHTML = `<h5>${element.title}</h5>
                      <img src="images/certificates/${element.image}" alt="${element.title}" />
                      <p>${element["completion-date"]}</p>
                      <button type="button" onclick="closeModal()">Cerrar</button>`;
}

function closeModal() {
  document.getElementById("training-modal").style.display = "none";
}
