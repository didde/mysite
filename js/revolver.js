// revolver.js
var keywords = ["machine learning?",
"statistics?", 
"business intelligence?", 
"correlations?",
"causality?",
"hypothesis testing?",
"A/B testing?",
"end user testing?",
"neural networks?",
"regressions?",
"econometrics?",
"big data?",
"small data?",
"t-tests?",
"bias/variance?",
"omitted variables?",
"risk modeling?",
"data modeling?", 
"model validation?", 
"hadoop?",
"mapreduce?",
"data pipelines?",
"monte carlo?",
"markov chains?",
"times series?",
"economics?",
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