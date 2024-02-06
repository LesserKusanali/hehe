let redButtonClickCount = 0;
const redButtonMessages = ['huh ayaw mo?', 'ge.', 'djoke lng bakit ayaw mo??', 'noooo bawal mo ko tanggihan', 'awww hindi mo ko mahal?:<', 'HAHAHAHA kala mo makakatanggi ka? bawal, kala mo ah'];

function selectChoice(choice) {
  if (choice === 'ayoko') {
    redButtonClickCount++;
    if (redButtonClickCount > redButtonMessages.length) {
      redButtonClickCount = redButtonMessages.length;
    }
    document.getElementById('result').innerText = redButtonMessages[redButtonClickCount - 1];
    
    if (redButtonClickCount > 1) {
      let sigeButton = document.getElementById('sigeButton');
      let sigeButtonWidth = 100 + (redButtonClickCount - 1) * 20; // Increase width by 20px for each click
      let sigeButtonHeight = 50 + (redButtonClickCount - 1) * 10; // Increase height by 10px for each click
      sigeButton.style.width = sigeButtonWidth + 'px';
      sigeButton.style.height = sigeButtonHeight + 'px';
    }
    
    if (redButtonClickCount === 6) {
      document.getElementById('ayokoButton').style.display = 'none'; // Hide Ayoko button on 6th click
    }
  } else if (choice === 'sige') {
    document.getElementById('result').innerText = 'YAYYY ILOVEYOUSOMUCHH!!!<333';
    document.getElementById('ayokoButton').style.display = 'none'; // Hide Ayoko button when Sige button is clicked
  }
}
