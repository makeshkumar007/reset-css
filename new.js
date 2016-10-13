$(function(){
			if(top.location.href.toLowerCase() == self.location.href.toLowerCase()) $('#docLink').show();

			$('#tabNav ul').idTabs('tab1');
			$('#tabNav ul a').one('click', function(){
				var rel = $(this).attr('rel');
				switch(rel){
					case 'demo3':
						$('#demo3').listmenu({
							includeNums: false,
							includeOther: true,
							noMatchText: 'No items under this letter',
							showCounts: false,
							//menuWidth: 700,
							cols:{
								count:5,
								gutter:15
							}
						});
						break;
					case 'demo4':
						$('#demo4').listmenu();
						break;
					case 'demo5':
						$('#demo5').listmenu();
						break;
					case 'demo6':
						$('#demo6').listmenu({
							noMatchText: 'No contacts available',
							cols:{
								count:3,
								gutter:35
							},
							onClick:function($target){
								if($target.is('a')){
									alert($target.text() + ' was clicked');
								}
							}
						});
						break;
				}				
				return false;
			});
		
			$('.demo:not(#demo6) a').click(function(){
				alert('Links in this demo don\'t actually go anywhere. See Demo 6 for an onClick handler.');
				return false;
			});

			$('#btnDemo2').click(function(){
				$('#demo2').listmenu();
				$(this).hide();
			});

			$('#demo1').listmenu();
		});
