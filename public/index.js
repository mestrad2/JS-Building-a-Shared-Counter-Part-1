async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
    var response = await fetch('http://localhost:9001/counter');
    var jsonResponse = await response.json();
    let countValue = jsonResponse.value;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    /*function refresh() {
        let refreshValue = countValue;
        countContainer.textContent = refreshValue;
    }*/

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    //refreshButton.addEventListener('click', refresh);
    countContainer.textContent = countValue;
}
main()