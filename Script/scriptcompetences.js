
$(document).ready(function(){
             
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChartD);
    
            //Soft Skills doghnut chart
    
      function drawChartD() {
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn('string', 'Competence');
        dataTable.addColumn('number', 'Ratio');
        // A column for custom tooltip content
        dataTable.addColumn({type: 'string', role: 'tooltip', 'p' : {'html':true}});
        dataTable.addRows([
            
            ['	Anglais	',	 20 	,'8 mois consécutifs aux Etats-Unis (New York) pendant lesquelles j étais constamment au contact social et professionnel dans la langue locale. J ai fortement progressé dans la pratique et l exécution concrète du langage : TOEIC 796 ' ],
            
            ['	Evenementiel	',	 20 	,'Plus d une trentaine de projets exécutés en tant que chef de projet pendant l année 2019 m ont permis d acquérir un solide bagage dans tous les projets de type evenementiel' ],
            
            ['	Autonomie	',	 12 	,'Je traite les problèmes de façon autonome, je cherche des solutions par moi-même avant de solliciter la solution de facilité d une requête directe'],
            
            ['	Initiative	',	 12 	,'J effectue des choix et des jugements rapidement afin de tester la viabilité des solutions. Ce qui me permet de rebondir sur mes erreurs et d atteindre la rapidité d exécution d un proffesionel'],
            
            ['	Intelligene émotionnelle	',	 12 	,'Je m intègre bien dans les groupes en formation ou déjà formé. Mon caractère est relativement simple a apprécier et je n impose pas mes positions'],
            
            ['	Résilience	',	 12 	,'Les erreurs m apprennent beaucoup et je ne m arrête pas en face d une problématique d ampleur. La difficulté est une source de motivation.'],
            
            ['	Collectif	',	 12 	,"C est en partie à l aide du collectif que je me construis et j ai toujours fait passer les intérêts du collectif avant mes intérêts individuels"],
            ]);
          var options = {
          tooltip: {isHtml: true,showColorCode : true} ,
          legend: {position:'labeled', labeledValueText: 'none',
                  textStyle: {
            color: '#7F695B', 
            fontSize: 16
        }},
            pieHole: 0.6,
              'height': 400,
            chartArea : {'height':'92%','width':'92%'},
            //   'position':'initial',
          //  backgroundColor : 'red',
            pieSliceText : 'none',
            pieSliceTextStyle: {fontSize : 28, color : 'black'},
         colors: ['#F4DDC3', 
                  '#F4DDC3',
                  '#F4DDC3',
                 '#F4DDC3', 
                  '#F4DDC3',
                  '#F4DDC3',
                 '#F4DDC3', ],
              pieSliceBorderColor: 'white',
          };
           var chart = new google.visualization.PieChart(document.getElementById('col_chart_html_tooltip'));
        chart.draw(dataTable, options);
        $(document).ready(function () {
         $(window).resize(function(){
     drawChartD();
     });
   });
      };

        //Economics Skills doghnut chart
    
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartE);
  function drawChartE() {
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn('string', 'Competence');
        dataTable.addColumn('number', 'Ratio');
        // A column for custom tooltip content
        dataTable.addColumn({type: 'string', role: 'tooltip', 'p' : {'html':true}});
        dataTable.addRows([
            ['	Comptabilité & Finance	',	 4 	,'Dans le cadre de mes études ainsi que plusieurs projets personnels, j ai développé une expertise aiguisée des concepts financiers d entreprise'],           
            
            ['	Marketing	',	 4 	,'Ma dernière expérience professionnelle ainsi que des projets annexes m ont permis dapprofondirs les concepts clef relatifs au markeing'],
            
            ['	Etude de marché	',	 3 	,'J ai effectué plusieurs études de marchés sur des domaines d activité très différents. Je me sert des outils professionnels comme Xerfi, Insee, chambre du commerce, outils spécialisés etc'],
            
            ['	Référencement	',	 4 	,'J ai travaillé sur le référencement de plusieurs projets dans le e-market, la coiffure et l hôtellerie à l aide d outils d optimisation SEO notamment'],
            
            ['	Droit du WEB	',	 3 	,'Le droit du WEB est une pierre angulaire de mon programme scolaire et constitue l un des principaux enseignements que j ai suivi'],
            
            ['	Gestion de projet	',	 8 	,'J ai participé ou coordonné plusieurs projets avec des méthodes conventionnelles ou agiles. J apprécie énormément la dynamique projet'],
            
            ['	Developpement commercial	',	 2 	,'Point central de ma dernière expérience professionnelle, j ai apporté des résultats probants qui se sont mesurés par une hausse de l activité de +10% dans les ventes BtoB'],

             ]);
          var options = {
          tooltip: {isHtml: true,showColorCode : true} ,
          legend: {position:'labeled', labeledValueText: 'none',
                  textStyle: {
            color: '#7F695B', 
            fontSize: 16
        }},
            pieHole: 0.6,
              'height': 400,
            chartArea : {'height':'92%','width':'92%'},
            //   'position':'initial',
          //  backgroundColor : 'red',
            pieSliceText : 'none',
            pieSliceTextStyle: {fontSize : 28, color : 'black'},
         colors: [
                '#C4D1D1',
                 '#C4D1D1',
                 '#C4D1D1',
                 '#C4D1D1',
                 '#C4D1D1',
                 '#C4D1D1',
                 '#C4D1D1',
                 '#C4D1D1',],
                   pieSliceBorderColor: 'white',
         };
 
              
              var chart = new google.visualization.PieChart(document.getElementById('col_chart1_html_tooltip'));
        chart.draw(dataTable, options);
      };
    
    //Technicals Skills doghnut chart
    
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChartT);

      function drawChartT() {
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn('string', 'Competence');
        dataTable.addColumn('number', 'Ratio');
        // A column for custom tooltip content
        dataTable.addColumn({type: 'string', role: 'tooltip', 'p' : {'html':true}});
        dataTable.addRows([
            ['	Systèmes d information	',	 9 	,'Le domaine d activité des SI est la spécialité de ma formation, et j ai poursuivi de nombreux enseignements dans cette dominante'],
            
            ['	Excel	',	 8 	,'Excel ainsi que la suite office sont des outils que je manipule depuis longtemps, c est devenu un reflex pour moi d intégrer leur utilisation dans tous les travaux que j effectue'],
            
            ['	Blockchain	',	 5 	,'Cette technologie m a rapidement attiré et je suis monté en compétences à l aide notamment de l association Kryptoshere ainsi que par des formations dispensées par les leaders français comme Consensys ou Ledger'],
            
            ['Suite Adobe',	 5 	,'Le présent site WEB m a fait monter en compétences sur de nombreux concepts comme le UI - UX design et les outils de la suite Adobe'],
            
            ['	CAD	',	 5 	,'En tant que référent technique événementiel, j avais comme mission principale de développer sous CAD les infrastructures de portée du matériel de scénographie. J ai créé une vingtaine de structures qui ont toutes étés mises en place sur le terrain'],
            
            ['	Métrologie	',	 5 	,'La spécialité de mon BTS et l essentiel de mon expérience au sein de EDF concernaient des notions de métrologie. Je possède une expertise sur les problématiques de métrologie dans l industrie'],
            ['	Google Suite	',	 5 	,'Dans le cadre du développement de ce site web, son référencement et son suivi, je me suis familiarisé avec les outils Google publics'],
        ]);
           var options = {
         tooltip: {isHtml: true,showColorCode : true} ,
          legend: {position:'labeled', labeledValueText: 'none',
                  textStyle: {
            color: '#7F695B', 
            fontSize: 16
        }},
            pieHole: 0.6,
              'height': 400,
            chartArea : {'height':'92%','width':'92%'},
            //   'position':'initial',
          //  backgroundColor : 'red',
            pieSliceText : 'none',
            pieSliceTextStyle: {fontSize : 28, color : 'black'},
         colors: [
             '#8FA3A3', 
                  '#8FA3A3', 
                 '#8FA3A3', 
                 '#8FA3A3', 
                 '#8FA3A3', 
                 '#8FA3A3', 
                 '#8FA3A3', 
                 '#8FA3A3', ]
              };
              
              var chart = new google.visualization.PieChart(document.getElementById('col_chart2_html_tooltip'));
        chart.draw(dataTable, options);
      }
    
    
    
    
    
    
    
    
     $(window).resize(function(){
  drawChartD();
         drawChartE();
         drawChartT();
});
   });

