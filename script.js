// collehamenti al dom
let wrapperBody = document.querySelector('#wrapperBody');


let buttonShow = document.querySelector('#buttonShow');


let tableContacts = document.querySelector('table')

let buttonAdd = document.querySelector('#buttonAdd'); 

let inputName = document.querySelector('#inputName')
let inputNumber = document.querySelector('#inputNumber');

let inputNameDelete = document.querySelector('#inputNameDelete')
let buttonDelete = document.querySelector('#buttonDelete')


let inputIdName = document.querySelector('#inputIdName');
let inputNumberUpdate = document.querySelector('#inputNumberUpdate')

let buttonUpdate = document.querySelector('#buttonUpdate')

// Oggetto rubrica che conterrà proprietà
let rubrica = {
    'contatti': [
        {'id':1,'nome': 'Marta', 'numero': 3331111111},
        {'id':2,'nome': 'Leonardo', 'numero': 3332222222},
        {'id':3,'nome': 'B', 'numero': 3333333333},
        {'id':4,'nome': 'Nardino', 'numero': 3334444444}
    ],
    createListContacts() {
        /** cicliamo i contatti della rubrica */
        this.contatti.forEach(contatto => {
            let rowContact = document.createElement('tr');
          
            rowContact.innerHTML = `
                <td>${contatto.id}</td>
                <td>${contatto.nome}</td>
                <td>${contatto.numero}</td>
            `;
          
            wrapperBody.appendChild(rowContact)
        });

        let wrapperFooter = document.querySelector('#wrapperFooter');
        let footerTotal = document.createElement('tr');
        footerTotal.innerHTML = `
            <td>Totale</td>
            <td>${this.contatti.length}</td>
        `;
        wrapperFooter.appendChild(footerTotal)
    },
    'aggiungiContatto': function(name, number) {
        let newContact = {'nome': name, 'numero': number};
        this.contatti.push(newContact);
    },
    'rimuovereContatto': function(name) {  
        let filteredContacts = this.contatti.filter(contatto => contatto.nome.toLowerCase() != name.toLowerCase());
        this.contatti = filteredContacts
    },
    'modificaContatto': function(name, number) {
        for(let i = 0; i < this.contatti.length; i++) {
            if(this.contatti[i].nome == name) {
                this.contatti[i].numero = number;
            }            
        }        
        
    }
}

// Aggiunto evento 'click' del mouse al pulsante 'Mostra tabella', che ci permetterà di mostrare o nascondere l'intera tabellla
buttonShow.addEventListener('click', () => {
    tableContacts.classList.toggle('d-none')
})

// Invochiamo il metodo aggiungiContatto()
buttonAdd.addEventListener('click', () => {
    wrapperBody.innerHTML = '';
    wrapperFooter.innerHTML = '';

    let nome = inputName.value;
    let numero = inputNumber.value; 

    rubrica.aggiungiContatto(nome, numero);
    rubrica.createListContacts();
})

// Invochiamo il metodo rimuovereContatto()
buttonDelete.addEventListener('click', () => {
    wrapperBody.innerHTML = '';
    wrapperFooter.innerHTML = '';

    let nome = inputNameDelete.value;
    rubrica.rimuovereContatto(nome)
    rubrica.createListContacts();
})

// Invochiamo il metodo modificaContatto()
buttonUpdate.addEventListener('click', () => {
    wrapperBody.innerHTML = '';
    wrapperFooter.innerHTML = '';
    let nome = inputIdName.value;
    let numero = inputNumberUpdate.value;
    rubrica.modificaContatto(nome, numero)
    rubrica.createListContacts();
})

// Invochiamo il metodo createListContacts() per creare la lista dei contatti (es. Invocare un metodo di un oggetto)
rubrica.createListContacts();