let doctorsOffice = (function(){
  let patients = []

  function nextPatient(){
    patients.length === 0 ? console.log("No patients in line") : patients.pop()
  }

  function addPatient(patient){
    patients.push(patient)
    console.log(`You've been added to the qeue, there are ${patients.length - 1} people in front of you`);
  }

  return {
    nextPatient,
    addPatient
  }
})()
