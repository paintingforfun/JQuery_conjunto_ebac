$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();

        const endNovaImagem = $('#end-nova-img').val();
        const novaImagem = $('<li style="display: none"></li>');
        $(`<img src="${endNovaImagem}" />`).appendTo(novaImagem);
        $(`
            <div class="overlay-img">
                <a href="${endNovaImagem}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novaImagem);

        $(novaImagem).appendTo('ul');
        $(novaImagem).fadeIn(1000);
        $('#end-nova-img').val('');

    })
})