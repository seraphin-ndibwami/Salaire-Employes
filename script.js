// controle du flux
const formulaire = document.querySelector('#EmployeSalaire')
formulaire.addEventListener('submit', collecteDeDonne)

const tableauxEmployes = []

const buttonFiltre = document.querySelector('#filtre')
buttonFiltre.addEventListener('click', FiltreLesDonnes)

const divFiltre = document.querySelector('.employesFiltres')
const divEmployes = document.querySelector('.employes')

/**
 * 
 * @param {SubmitEvent} e 
 */
function collecteDeDonne(e){
    e.preventDefault()
    const employe = {
        nom:document.querySelector('input#nomEmploye').value,
        salaire:document.querySelector('input#salaire').value
    }

    tableauxEmployes.push(employe)

    document.querySelector('input#nomEmploye').value = ""
    document.querySelector('input#salaire').value = ""

    let div = document.createElement('div')

    const text = `<div>
        <p>
           nom : ${employe.nom}
        </p>
        <p>
            salaire :${employe.salaire}
        </p>
    </div>`
    
    div.innerHTML = text
    divEmployes.appendChild(div)
}

function compareSalaire(a, b) {
    return b.salaire - a.salaire;
}

// Tri du tableau d'employés en utilisant la fonction de comparaison

function FiltreLesDonnes(e){
    tableauxEmployes.sort(compareSalaire)
    divFiltre.innerHTML = ""
    console.log(tableauxEmployes)
    let n = 0
    tableauxEmployes.forEach(els => {
        let div = document.createElement('div')

        const text = `<div>
            <p>
               nom : ${els.nom}
            </p>
            <p>
                salaire :${els.salaire}
            </p>
        </div>`

        if (n===0 || n=== (tableauxEmployes.length -1)){
            div.innerHTML = text
            divFiltre.appendChild(div)
        }
        n = n + 1
    })
}

