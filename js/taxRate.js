(function(){
    var price = document.getElementById('price');
    var result = document.getElementById('result');
    var resultTax = document.getElementById('resultTax');
    var tax1 = document.getElementById('tax1');
    var tax2 = document.getElementById('tax2');
    var btn =  document.getElementById('tax-btn');
    console.log("ここまではOK");
    console.log(tax1.checked);

    function calculateTax() {
        if(tax1.checked){
            var includeTax = Math.floor(price.value * 1.1);
            result.innerHTML = `(税込:${includeTax}円)`;
            resultTax.innerHTML = `(内税:${includeTax - price.value}円)`;
        } else if(tax2.checked) {
            var includeTax8 = Math.floor(price.value * 1.08);
            result.innerHTML = `(税込:${includeTax8}円)`;
            resultTax.innerHTML = `(内税:${includeTax8 - price.value}円)`;
        }
    }

    btn.addEventListener('click', function(){
        console.log("クリックイベント");
        calculateTax();

    });
})();