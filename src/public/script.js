(document).ready(function () {
    const btnSearch = document.getElementById('buscar');
    console.log(btnSearch);
    btnSearch.addEventListener('click', search);
    alert('0hola');
    function search() {
        const search = document.getElementById('apellidos');
        console.log("apellidos", search);
        // var response = await axios('https://insult.mattbas.org/api/insult')
        // var data = response.data
        return search;
    }
});