(function algumaCoisa() {
	'use strict';

	const pageUrl = window.location.href;
	const currentPage = pageUrl.substr(pageUrl.lastIndexOf('/') + 1);
	currentPage === 'artista_especifica.php' || currentPage === 'contato.php' ? initForm() : false;

	function initForm() {

		function activeBarWhenValidate() {
			const input = document.querySelectorAll('.form-box__input');
			const inputLength = input.length;
			for (let i = 0; i < inputLength; i++) {
				const element = input[i];
				element.addEventListener('blur', isInputValidated);

				function isInputValidated() {
					element.value ? element.classList.add('used') : element.classList.remove('used');
				}
			}
		}
		activeBarWhenValidate();

		function colocaSelectNoElemento(elemento, formMenu, selectMenuItens) {
			const $inputSelect = document.querySelector(elemento);
			const $formboxSelect = document.querySelector(formMenu);
			const $itens = document.querySelectorAll(selectMenuItens);

			$inputSelect.addEventListener('click', openSelect, false);

			function openSelect() {
				$formboxSelect.classList.toggle('form-box__select--active');

				(function iterateSelectItens() {
					const $itensLength = $itens.length;
					for (let i = 0; i < $itensLength; i++) {
						$itens[i].addEventListener('click', doWhenClickSelectItem, false);
					}
				}());

				function doWhenClickSelectItem(e) {
					e.preventDefault();
					$inputSelect.value = this.textContent;
					changeStylesAfterClick();
				}

				function changeStylesAfterClick() {
					$inputSelect.classList.add('used');
					$inputSelect.classList.add('form-box__input--isvalid');
					$formboxSelect.classList.remove('form-box__select--active');
				}
			}
		}

		colocaSelectNoElemento('.form-box__input-tipo', '.form-box__select-tipo', '.form-box__select-tipo a');
		colocaSelectNoElemento('.form-box__input-cidade', '.form-box__select-cidade', '.form-box__select-cidade a');
		colocaSelectNoElemento('.form-box__input-estado', '.form-box__select-estado', '.form-box__select-estado a');
	}

}());