
const deleteMed = (data) => {
  const med = document.querySelector('#stergereMedicament').value;
  data.forEach(doc => {
    var docum = doc.id;
    if (med.localeCompare(doc.data().denumire) == 0) {
      db.collection('meds').doc(docum).delete();
    }
    else {
      console.log("Medicamentul nu e sters!");
    }
  });
}


