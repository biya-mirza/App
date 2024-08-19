document.getElementById('tableForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
 
    const rows = parseInt(document.getElementById('rows').value);
    const columns = parseInt(document.getElementById('columns').value);
    const includeHeader = document.getElementById('header').checked;
    
 
    let table = document.createElement('table');
    table.border = '1';
    table.style.margin = '20px auto';
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    
  
    if (includeHeader) {
        let thead = table.createTHead();
        let headerRow = thead.insertRow();
        for (let i = 0; i < columns; i++) {
            let th = document.createElement('th');
            th.textContent = `Header ${i + 1}`;
            th.style.backgroundColor = '#FF851B';
            th.style.color = 'white';
            th.style.padding = '10px';
            th.style.border = '1px solid black';
            headerRow.appendChild(th);
        }
    }
    
  
    let tbody = table.createTBody();
    for (let i = 0; i < rows; i++) {
        let row = tbody.insertRow();
        for (let j = 0; j < columns; j++) {
            let cell = row.insertCell();
            cell.textContent = `Cell ${i + 1}-${j + 1}`;
            cell.style.padding = '10px';
            cell.style.border = '1px solid black';
            cell.style.textAlign = 'center';
        }
    }
    
  
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; 
    tableContainer.appendChild(table); 
});
