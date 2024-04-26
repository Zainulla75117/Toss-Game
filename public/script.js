var resultCount = 0;

function tossCoin() {
    var result = Math.random() < 0.5 ? 'heads' : 'tails';
    document.getElementById('result').innerText = 'Result: ' + result;

    if (result === 'heads') {
        document.getElementById('headsCoin').style.display = 'block';
        document.getElementById('tailsCoin').style.display = 'none';
    } else {
        document.getElementById('headsCoin').style.display = 'none';
        document.getElementById('tailsCoin').style.display = 'block';
    }

    var coinElement = result === 'heads' ? document.getElementById('headsCoin') : document.getElementById('tailsCoin');
    
    coinElement.classList.remove('flip');
    void coinElement.offsetWidth; 
    coinElement.classList.add('flip'); 

    var resultList = document.getElementById('resultsList');
    var listItem = document.createElement('li');
    listItem.textContent = ++resultCount + '. ' + result.charAt(0).toUpperCase() + result.slice(1); 
    resultList.appendChild(listItem);

    // Remove and re-add animation class to trigger animation on every click
    coinElement.classList.remove('flip');
    void coinElement.offsetWidth;
    coinElement.classList.add('flip');
}

function exportToPDF() {
    var doc = new jsPDF();

    // Add title
    doc.setFontSize(20);
    doc.text('Result List', 10, 20);

    // Add result list
    var y = 30;
    document.querySelectorAll('#resultsList li').forEach(function(item, index) {
        doc.text(item.textContent, 10, y);
        y += 10; // Increase y position for the next item
    });

    // Save the PDF
    doc.save('result_list.pdf');
}
