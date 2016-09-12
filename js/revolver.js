// revolver.js
var keywords = ["machine learning?",
"statistics?", 
"econometrics?",
"correlations?",
"hypothesis testing?",
"t-tests?",
"bias/variance?",
"regressions?",
"omitted variables?",
"big data?",
"small data?",
"risk?",
"data modeling?", 
"model validation?", 
"decision trees?",
"mapreduce?",
"hadoop?",
"data pipelines?",
"markov chains?",
"monte carlo?",
"economics?",
"times series?",
"uncertainty?",
"life?",
];
var count = 1;
setInterval(function(){    
    $("span.keyword").fadeOut(400, function(){        
        $(this).html(keywords[count]);        
        count++;        
        if(count == keywords.length)            
            count = 0;        
        $(this).fadeIn(400);    
    });
}, 4000);