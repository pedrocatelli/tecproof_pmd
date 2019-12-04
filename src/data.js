//Construct rules: Use only single alphabetical character to represent variables to be substituted
//"<unique identifier": new Rule("<rule name>", [<premise1>,...], "<conclusion>")
var builtin_rules = { //Fundamental Logical Rules
                      "~I" : new Rule("Introdução da Negação (Redução ao absurdo)", ["A => (B & ~B)"], "~A"),
                      "~E": new Rule("Eliminação da Negação", ["A", "~A"], "B"),
                      "~~E": new Rule("Elim. da Dupla Negação", ["~~A"], "A"),
                      "~~I": new Rule("Introdução da Dupla Negação", ["A"], "~~A"),
                      "=>I": new Rule("Introdução do Condicional", ["A |- B"], "A => B"),
                      "MP" : new Rule("Modus Ponens", ["A", "A => B"], "B"),
                      "MP2" : new Rule("Modus Ponens 2", ["A", "A => ~B"], "~B"),
                      "MT" : new Rule("Modus Tollens", ["A => B", "~B"], "~A"),
                      "MT2": new Rule("Modus Tollens 2", ["A => ~B", "B"], "~A"),
                      "&I" : new Rule("Introdução da Conjunção", ["A", "B"], "A & B"),
                      "&I1": new Rule("Eliminação da Conjunção 1", ["A & B"], "A"),
                      "&I2": new Rule("Eliminação da Conjunção 2", ["A & B"], "B"),
                      "vI1": new Rule("Introdução da Disjunção 1", ["A"], "A v B"),
                      "vI2": new Rule("Introdução da Disjunção 2", ["A"], "B v A"),
                      "vE" : new Rule("Eliminação da Disjunção", ["A v B", "A => C", "B => C"], "C"),
                      "DS1" : new Rule("Silogismo Disjuntivo 1", ["A v B", "~A"], "B"),
                      "DS2" : new Rule("Silogismo Disjuntivo 2", ["A v B", "~B"], "A"),        
                      //Extra Logical Rules
                      "Iter" : new Rule("Iteração", ["A"], "A")
                    };

//Constants
var EXPR_STRING_CLASS_NAME = "expression_string";
var EXPR_MODIFIER_CLASS_NAME = "expression_modifier";
var EXPR_ITEM_CLASS_NAME = "expression_content";
var EXPR_ITEM_SELECTED_CLASS_NAME = "expression_content_selected";
var EXPR_PREFIX = "expr_";
var SCOPE_PREFIX = "scope_";

var INVALID_SCOPE = 1;
var INVALID_MATCH_QUANTITY = 2;
var INVALID_MATCH_QUALITY = 3;
var ERROR_MESSAGE_SCOPE= "Algumas premissas não podem ser usadas sob escopo atual";
var ERROR_MESSAGE_MATCH_QUANTITY = "Número de premissas inválido";
var ERROR_MESSAGE_MATCH_QUALITY = "Premissas não se encaixam a essa regra";
var ERROR_RULE_ALREADY_EXISTS = "Identificador de regras já existe";