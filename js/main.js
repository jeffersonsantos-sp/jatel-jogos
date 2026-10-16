(function(){
	'use strict';

	var $form = document.querySelector('[data-js="form"]');
	var $search = document.querySelector('[data-js="search"]');
	var $tbody = document.querySelector('[data-js="tbody"]');
	var $count = document.querySelector('#cwCount');
	var $progressFill = document.querySelector('#progressFill');
	var $foundList = document.querySelector('#foundList');
	var $victory = document.querySelector('#cwVictory');
	var count = 0;
	var acertadas = [];
	var totalWords = 26;

	function getIndex(name) {
		var lowerCaseName = name.toLowerCase();
		var lowerCaseGameWords = gameWords.map(function(word) {
			return word.toLowerCase();
		});

		if (lowerCaseGameWords.indexOf(lowerCaseName) > -1) {
			var i = lowerCaseGameWords.indexOf(lowerCaseName);
			return indexes[i];
		}

		$search.value = '';
		return false;
	}

	function selectTd( line , column ){
		var tr = $tbody.children[line];
		var td = tr.children[column];
		td.classList.add("color");
		$search.value = '';
	}

	function addFoundTag(name) {
		var tag = document.createElement('span');
		tag.className = 'cw-found-tag';
		tag.textContent = name.toUpperCase();
		$foundList.appendChild(tag);
	}

	function updateProgress() {
		var pct = Math.round((count / totalWords) * 100);
		$progressFill.style.width = pct + '%';
	}

	function showVictory() {
		$victory.style.display = 'block';
		$search.disabled = true;
		var btn = document.querySelector('.cw-btn-search');
		if (btn) btn.disabled = true;
	}

	var letters = [
		['w','S','A','M','U','E','L','o','i','I'],
		['J','a','l','J','E','S','U','S','t','S'],
		['E','t','R','A','Q','U','E','L','o','A'],
		['R','T','I','M','O','T','E','O','A','Q'],
		['E','l','J','O','S','I','A','S','N','E'],
		['M','O','I','S','E','S','t','R','A','U'],
		['I','b','i','s','s','n','o','E','I','Q'],
		['S','P','A','U','L','O','a','T','V','O'],
		['A','m','p','A','B','E','L','S','A','N'],
		['B','P','E',"D",'R','O','m','E','D','E'],
		['I','A','L',"D",'A','N','I','E','L','J'],
		['G','G','I',"M",'A','R','I','A','P','O'],
		['A','I','S',"A",'I','A','S','E','L','N'],
		['I','R','E',"B",'E','C','A','J','W','A'],
		['L','D','U',"J",'E','F','T','E','R','S'],
		['J','Ó','Z',"A",'C','A','R','I','A','S']
	];

	var lines = [];

	letters.map(function(item, index){
		lines[index] = document.querySelector('[data-js="line'+ index +'"]');
	});

	letters.forEach(function(item, index){
		letters[index].forEach(function(item){
			lines[index].insertAdjacentHTML('beforeend', '<td>' + item + '</td>');
		});
	});

	var indexes = [
		[ [1,3], [1,4], [1,5], [1,6], [1, 7] ],
		[ [3,8], [4,8], [5,8] ],
		[ [0,9], [1,9], [2,9], [3,9], [4,9], [5,9]],
		[ [2,2], [2,3], [2,4], [2,5], [2,6],[2,7] ],
		[ [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7] ],
		[ [5,0], [5,1], [5,2], [5,3], [5,4], [5,5] ],
		[ [7,1], [7,2], [7,3], [7,4], [7,5] ],
		[ [8,3], [8,4], [8,5],[8,6] ],
		[ [5,7],[6,7], [7,7], [8,7], [9,7] ],
		[ [6,5], [6,6], [6,7] ],
		[ [1,0], [2,0], [3,0], [4,0],[5,0],[6,0], [7,0], [8,0] ],
		[[4,9], [5,9], [6,9], [7,9],[8,9],[9,9] ],
		[ [0,1], [0,2], [0,3], [0,4],[0,5],[0,6] ],
		[ [6,8], [7,8], [8,8],[9,8] ],
		[[4,2], [4,3], [4,4],[4,5],[4,6],[4,7]],
		[[9,1],[9,2],[9,3],[9,4],[9,5]],
		[[10,3],[10,4],[10,5],[10,6],[10,7],[10,8]],
		[[9,2],[10,2],[11,2],[12,2],[13,2], [14,2]],
		[[12,1],[12,2],[12,3],[12,4],[12,5],[12,6]],
		[[11,3],[11,4],[11,5],[11,6],[11,7]],
		[[8,0],[9,0],[10,0],[11,0],[12,0],[13,0],[14,0]],
		[[10,9],[11,9],[12,9],[13,9],[14,9] ],
		[[13,1],[13,2],[13,3],[13,4],[13,5],[13,6] ],
		[[14,3],[14,4],[14,5],[14,6],[14,7] ],
		[[15,2],[15,3],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9] ],
		[[15,0],[15,1]]
	];
	var gameWords = ['JESUS','ANA','ISAQUE','RAQUEL','TIMOTEO', 'MOISES', 'PAULO', 'ABEL','ESTER', 'NOE', 'JEREMIAS','ENOQUE', 'SAMUEL', 'DAVI', 'JOSIAS', 'PEDRO', 'DANIEL', 'ELISEU', 'ISAIAS','MARIA', 'ABIGAIL','JONAS','REBECA' ,'JEFTE','ZACARIAS','JO'];

	$form.addEventListener('submit', function(event) {
		event.preventDefault();
		var valueSearch = $search.value.toLowerCase();
		var getIndexes = getIndex(valueSearch);

		if (getIndexes && !acertadas.includes(valueSearch)) {
			for (var i = 0; i < getIndexes.length; i++) {
				selectTd(getIndexes[i][0], getIndexes[i][1]);
			}
			count++;
			$count.textContent = count;
			acertadas.push(valueSearch);
			addFoundTag(valueSearch);
			updateProgress();

			if (count >= totalWords) {
				setTimeout(showVictory, 600);
			}
		}
	}, false);

})();
