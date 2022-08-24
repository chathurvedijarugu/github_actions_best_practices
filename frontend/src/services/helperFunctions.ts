export function getAge(dateString:any) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export function getSelectedPatientDetails(selectedPatients: any) {
    let patients: any = []
    for (let i = 0; i < selectedPatients.length; i++) {
      const patient = {
        patientName: selectedPatients[i].name,
        testName: 'COVID RT-PCR Test',
        age: selectedPatients[i].age,
        gender: selectedPatients[i].gender.slice(0,1),
        relation: selectedPatients[i].relation,
        testCost: 2000,
      }
      patients.push(patient)
    }
    return patients
  }