$(function(){
			if(top.location.href.toLowerCase() == self.location.href.toLowerCase()) $(&#39;#docLink&#39;).show();

			$(&#39;#tabNav ul&#39;).idTabs(&#39;tab1&#39;);
			$(&#39;#tabNav ul a&#39;).one(&#39;click&#39;, function(){
				var rel = $(this).attr(&#39;rel&#39;);
				switch(rel){
					case &#39;demo3&#39;:
						$(&#39;#demo3&#39;).listmenu({
							includeNums: false,
							includeOther: true,
							noMatchText: &#39;No items under this letter&#39;,
							showCounts: false,
							//menuWidth: 700,
							cols:{
								count:5,
								gutter:15
							}
						});
						break;
					case &#39;demo4&#39;:
						$(&#39;#demo4&#39;).listmenu();
						break;
					case &#39;demo5&#39;:
						$(&#39;#demo5&#39;).listmenu();
						break;
					case &#39;demo6&#39;:
						$(&#39;#demo6&#39;).listmenu({
							noMatchText: &#39;No contacts available&#39;,
							cols:{
								count:3,
								gutter:35
							},
							onClick:function($target){
								if($target.is(&#39;a&#39;)){
									alert($target.text() + &#39; was clicked&#39;);
								}
							}
						});
						break;
				}				
				return false;
			});
		
			$(&#39;.demo:not(#demo6) a&#39;).click(function(){
				alert(&#39;Links in this demo don\&#39;t actually go anywhere. See Demo 6 for an onClick handler.&#39;);
				return false;
			});

			$(&#39;#btnDemo2&#39;).click(function(){
				$(&#39;#demo2&#39;).listmenu();
				$(this).hide();
			});

			$(&#39;#demo1&#39;).listmenu();
		});
