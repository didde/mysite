// revolver.js
var keywords = ["machine learning?", 
"statistics?", 
"data modeling?", 
"model validation?", 
"econometrics?",
"correlations?",
"decision trees",
"difference in differences"
"hypothesis testing?",
"t-tests?",
"bias/variance?",
"regressions?",
"omitted variables?",
"mapreduce?",
"hadoop?",
"data pipelines?",
"big data?",
"markov chains?",
"monte carlo?",
"economics?",
"micro-econometrics?",
"times series?",
"risk?",
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