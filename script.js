document.getElementById('Main_Form').addEventListener('submit', event=>{
    event.preventDefault();
  
    const weight = parseFloat(document.getElementById('weight').value);
    const feet = parseFloat(document.getElementById('feet').value);
    const inches = parseFloat(document.getElementById('inches').value);
  
    if (weight <= 0 || feet < 0 || inches < 0)
    {
      alert("Please enter valid positive numbers.");
      return;
    }
    const totalInch = feet * 12 + inches;
    const meterHeight = totalInch * 0.0254;
    const bmi = weight / (meterHeight * meterHeight);
    let result = "Your BMI is " + bmi.toFixed(2) + ".";
    let healthInfo = "";
  
    if (bmi < 18.5) {
      result += " You are underweight.";
      healthInfo += `<h3><u>Tips to Gain Weight:</h3></u>
          <ul>
          <li>Eat calorie-dense foods like nuts and whole grains.</li>
          <li>Include more protein like eggs, chicken, tofu.</li>
          <li>Eat more frequent meals.</li>
          <li>Work with a nutritionist if possible.</li>
        </ul>
        For more ways to gain weight, <a href = "https://www.wikihow.com/Gain-Weight" style="text-decoration: none"> this </a>will benefit you.`;
    }
    else if (bmi >= 18.5 && bmi <= 24.9)
    {
      result += " You have a normal weight.";
      healthInfo += 
      `<h3>Good Job! You should be proud of yourself! :D </h3>
        <p>Keep eating a balanced diet and stay active to maintain your health.</p>`;
    } 
    else if (bmi >= 25 && bmi <= 29.9)
    {
      result += " You are overweight.";
      healthInfo += 
        `<h3><u>Tips to Lose Weight:</h3></u>
        <ul>
          <li>Eat more fruits, vegetables, lean proteins.</li>
          <li>Exercise regularly! Walking, jogging, swimming are the best options.</li>
          <li>Limit sugary drinks and fast food.</li>
          <li>Track meals and calories if needed.</li>
          <li>Most importantly, don't lose hope! You can do it!</li>
        </ul>
        If you want to lose weight fast, then a trip to this <a href ="https://www.wikihow.com/Lose-Weight-Fast" style="text-decoration: none"> page</a> will help you!`;
    } 
    else
    {
      result += " You are obese.";
      healthInfo += 
      `<h3><u>Tips to Improve Health:</h3></u>
        <ul>
          <li>Speak with a healthcare provider or nutritionist.</li>
          <li>Start small: reduce your portions, increase healthy choices.</li>
          <li>Try light exercise daily, like walking.</li>
          <li>Focus on sustainable long-term habits.</li>
          <li>Most importantly, don't lose hope! You can do it!</li>
        </ul>
        Want more health tips? This<a href ="https://www.wikihow.com/Lose-Weight-Fast" style="text-decoration: none"> source </a> has got you covered.`;
    }
    document.getElementById('result').innerHTML = result + healthInfo;
  });
    document.getElementById('reset').addEventListener('click', event=>{
    document.getElementById('weight').value = '';
    document.getElementById('feet').value = '';
    document.getElementById('inches').value = '';
    document.getElementById('result').innerHTML = '';
});

  
