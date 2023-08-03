
    function predictHeartDisease() {
      if(document.getElementById('age').value=="")
      alert("enter age");
      else if(document.getElementById('gender').value=="")
      alert("select gender");
      else if(document.getElementById('restingBP').value=="")
      alert("enter resting blood pressure");
      else if(document.getElementById('chestPain').value=="")
      alert("select chestpain type");
      else if(document.getElementById('cholesterol').value=="")
      alert("enter cholestral");
      else if(document.getElementById('ecg').value=="")
      alert("select ecg");
      else if(document.getElementById('maxHeartRate').value=="")
      alert("enter max heartRate");
      else{
      const age = parseInt(document.getElementById('age').value);
      const gender = document.getElementById('gender').value;
      const chestPain = document.getElementById('chestPain').value;
      const restingBP = parseInt(document.getElementById('restingBP').value);
      const cholesterol = parseInt(document.getElementById('cholesterol').value);
      const ecg = document.getElementById('ecg').value;
      const maxHeartRate = parseInt(document.getElementById('maxHeartRate').value);
      // Perform some basic calculation to predict heart disease (This is just an example)
      let risk = 0;
      if (gender === 'male') {
        risk += 0.5;
      } else if (gender === 'female') {
        risk -= 0.5;
      }
      
      if (age > 40) {
        risk += 0.3;
      }
      
      // Assign risk based on chest pain type
      if (chestPain === 'typicalAngina') {
        risk += 0.2;
      } else if (chestPain === 'atypicalAngina') {
        risk += 0.1;
      } else if (chestPain === 'nonAnginal') {
        risk += 0.05;
      }
      
      if (restingBP > 140) {
        risk += 0.2;
      }
      
      if (cholesterol > 200) {
        risk += 0.2;
      }
      
      // Assign risk based on ECG results
      if (ecg === 'abnormalST') {
        risk += 0.2;
      } else if (ecg === 'leftVentricularHypertrophy') {
        risk += 0.15;
      }
      
      if (maxHeartRate < 100 || maxHeartRate > 200) {
        risk += 0.1;
      }
      
      let result = '';
      if (risk >= 0.5) {
        result = 'High risk of heart disease.';
      } else {
        result = 'Low risk of heart disease.';
      }
      
      document.getElementById('result').innerHTML = result;
    }
}