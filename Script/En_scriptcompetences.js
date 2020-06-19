
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
            
            ['	English', 20 ,'8 consecutive months in the United States (New York) during which I was constantly in social and professional contact in the local language. I made strong progress in the practice and concrete execution of the language: TOEIC 796 ' ],
            
            ['	Events	',	 20 	,'More than thirty projects carried out as project manager during 2019 have enabled me to acquire a solid background in all event-type projects' ],
            
            ['	Autonomy', 12 , 'I deal with problems autonomously, I look for solutions by myself before asking for the easy solution of a direct request'],
            
            ['	Initiative', 12 , 'I make choices and judgements quickly to test the viability of solutions. This allows me to bounce back on my mistakes and reach the speed of a professional s execution'],
            
            ['	Emotional Intelligence', 12 , 'I fit well in groups in formation or already formed. My character is relatively simple to appreciate and I do not impose my positions'],
            
            ['	Resilience	',	 12 	,'I learn from mistakes and I do not stop when faced with a big problem. Difficulty is a source of motivation'],
            
            ['	Collective	',	 12 	,"It is partly with the help of the collective that I build myself and I have always put the interests of the collective before my individual interests"],
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
            ['	Accounting & Finance ', 4 , 'In the course of my studies as well as several personal projects, I have developed a sharp expertise in corporate financial concepts'],           
            
            ['	Marketing	',	 4 	,'My last professional experience and related projects have allowed me to deepen the key concepts related to marketing'],
            
            ['	Market research	',	 3 	,' I have carried out several market studies on very different fields of activity. I use professional tools such as Xerfi, Insee, chamber of commerce, specialised tools etc'],
            
            ['	SEO	',	 4 	,'I have worked on the referencing of several projects in the e-market, hairdressing and hotel industry using SEO tools in particular'],
            
            ['	WEB law', 3 , 'WEB law is a cornerstone of my school curriculum and is one of the main lessons I have learned'],
            
            ['	 Project management', 8 , 'I have participated or coordinated several projects with conventional or agile methods. I greatly appreciate the project dynamic'],
            
            ['	Business development ', 2 , 'The focus of my last professional experience, I brought convincing results which were measured by a +10% increase in activity in BtoB sales'],

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
            ['	Information systems', 9 , 'The field of IS activity is the speciality of my training, and I have taught many courses in this area'],
            
            ['	Excel	',	 8 	,'Excel and the office suite are tools that I have been using for a long time, it has become a reflex for me to integrate their use in all the work I do'],
            
            ['	Blockchain	',	 5 	,'This technology quickly attracted me and I quickly developed my skills with the help in particular of the Kryptoshere association and through training given by French leaders such as Consensys or Ledger'],
            
            ['  Adobe Suite ',	 5 	,'This WEB site has helped me to develop my skills on many concepts such as UI - UX design and the tools of the Adobe suite'],
            
            ['	CAD	',	 5 	,'As a technical referent for events, my main mission was to develop in CAD the infrastructures for the scenography equipment. I created about twenty structures which were all set up in the field'],
            
            ['	Métrology	',	 5 	,' The speciality of my BTS and most of my experience at EDF concerned metrology. I have an expertise on metrology issues in industry'],
            
            ['	Google Suite	',	 5 	,' During the development of this website, its referencing and its follow-up, I became familiar with the public Google tools'],
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

