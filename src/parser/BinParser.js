/**
 * LR parser generated by the Syntax tool.
 *
 * https://www.npmjs.com/package/syntax-cli
 *
 *   npm install -g syntax-cli
 *
 *   syntax-cli --help
 *
 * To regenerate run:
 *
 *   syntax-cli \
 *     --grammar ~/path-to-grammar-file \
 *     --mode <parsing-mode> \
 *     --output ~/path-to-output-parser-file.js
 */

'use strict';

/**
 * Matched token text.
 */
let yytext;

/**
 * Length of the matched token text.
 */
let yyleng;

/**
 * Storage object.
 */
let yy = {};

/**
 * Result of semantic action.
 */
let __;

/**
 * Result location object.
 */
let __loc;

function yyloc(start, end) {
  if (!yy.options.captureLocations) {
    return null;
  }

  // Epsilon doesn't produce location.
  if (!start || !end) {
    return start || end;
  }

  return {
    startOffset: start.startOffset,
    endOffset: end.endOffset,
    startLine: start.startLine,
    endLine: end.endLine,
    startColumn: start.startColumn,
    endColumn: end.endColumn,
  };
}

const EOF = '$';

/**
 * List of productions (generated by Syntax tool).
 */
const productions = [[-1,1,(_1) => { __ = _1 }],
[0,3,(_1,_2,_3) => { __ = new ExpAnd(_1, _3) }],
[0,3,(_1,_2,_3) => { __ = new ExpOr(_1, _3) }],
[0,2,(_1,_2) => { __ = new ExpNot(_2) }],
[0,3,(_1,_2,_3) => { __ = new ExpNotEqual(_1, _3) }],
[0,3,(_1,_2,_3) => { __ = new ExpBeEqual(_1, _3) }],
[0,3,(_1,_2,_3) => { __ = new ExpGreaterEqual(_1, _3) }],
[0,3,(_1,_2,_3) => { __ = new ExpLessEqual(_1, _3) }],
[0,3,(_1,_2,_3) => { __ = new ExpGreater(_1, _3) }],
[0,3,(_1,_2,_3) => { __ = new ExpLess(_1, _3) }],
[0,3,(_1,_2,_3) => { __ = new ExpPlus(_1, _3) }],
[0,3,(_1,_2,_3) => { __ = new ExpMinus(_1, _3) }],
[0,3,(_1,_2,_3) => { __ = new ExpTimes(_1, _3) }],
[0,3,(_1,_2,_3) => { __ = new ExpDivide(_1, _3) }],
[0,2,(_1,_2) => { __ = new ExpMinus(new ExpNumber(0), _2) }],
[0,3,(_1,_2,_3) => { __ = _2 }],
[0,1,(_1) => { __ = new ExpNumber(yytext) }],
[0,1,(_1) => { __ = new ExpVar(yytext) }]];

/**
 * Encoded tokens map.
 */
const tokens = {"AND":"1","OR":"2","NOT":"3","NOT_EQUAL":"4","BE_EQUAL":"5",">=":"6","<=":"7",">":"8","<":"9","+":"10","-":"11","*":"12","/":"13","(":"14",")":"15","NUMBER":"16","VAR":"17","$":"18"};

/**
 * Parsing table (generated by Syntax tool).
 */
const table = [{"0":1,"3":"s2","11":"s3","14":"s4","16":"s5","17":"s6"},{"1":"s7","2":"s8","4":"s9","5":"s10","6":"s11","7":"s12","8":"s13","9":"s14","10":"s15","11":"s16","12":"s17","13":"s18","18":"acc"},{"0":31,"3":"s2","11":"s3","14":"s4","16":"s5","17":"s6"},{"0":32,"3":"s2","11":"s3","14":"s4","16":"s5","17":"s6"},{"0":33,"3":"s2","11":"s3","14":"s4","16":"s5","17":"s6"},{"1":"r16","2":"r16","4":"r16","5":"r16","6":"r16","7":"r16","8":"r16","9":"r16","10":"r16","11":"r16","12":"r16","13":"r16","15":"r16","18":"r16"},{"1":"r17","2":"r17","4":"r17","5":"r17","6":"r17","7":"r17","8":"r17","9":"r17","10":"r17","11":"r17","12":"r17","13":"r17","15":"r17","18":"r17"},{"0":19,"3":"s2","11":"s3","14":"s4","16":"s5","17":"s6"},{"0":20,"3":"s2","11":"s3","14":"s4","16":"s5","17":"s6"},{"0":21,"3":"s2","11":"s3","14":"s4","16":"s5","17":"s6"},{"0":22,"3":"s2","11":"s3","14":"s4","16":"s5","17":"s6"},{"0":23,"3":"s2","11":"s3","14":"s4","16":"s5","17":"s6"},{"0":24,"3":"s2","11":"s3","14":"s4","16":"s5","17":"s6"},{"0":25,"3":"s2","11":"s3","14":"s4","16":"s5","17":"s6"},{"0":26,"3":"s2","11":"s3","14":"s4","16":"s5","17":"s6"},{"0":27,"3":"s2","11":"s3","14":"s4","16":"s5","17":"s6"},{"0":28,"3":"s2","11":"s3","14":"s4","16":"s5","17":"s6"},{"0":29,"3":"s2","11":"s3","14":"s4","16":"s5","17":"s6"},{"0":30,"3":"s2","11":"s3","14":"s4","16":"s5","17":"s6"},{"1":"r1","2":"r1","4":"s9","5":"s10","6":"s11","7":"s12","8":"s13","9":"s14","10":"s15","11":"s16","12":"s17","13":"s18","15":"r1","18":"r1"},{"1":"r2","2":"r2","4":"s9","5":"s10","6":"s11","7":"s12","8":"s13","9":"s14","10":"s15","11":"s16","12":"s17","13":"s18","15":"r2","18":"r2"},{"1":"r4","2":"r4","4":"r4","5":"r4","6":"r4","7":"r4","8":"r4","9":"r4","10":"s15","11":"s16","12":"s17","13":"s18","15":"r4","18":"r4"},{"1":"r5","2":"r5","4":"r5","5":"r5","6":"r5","7":"r5","8":"r5","9":"r5","10":"s15","11":"s16","12":"s17","13":"s18","15":"r5","18":"r5"},{"1":"r6","2":"r6","4":"r6","5":"r6","6":"r6","7":"r6","8":"r6","9":"r6","10":"s15","11":"s16","12":"s17","13":"s18","15":"r6","18":"r6"},{"1":"r7","2":"r7","4":"r7","5":"r7","6":"r7","7":"r7","8":"r7","9":"r7","10":"s15","11":"s16","12":"s17","13":"s18","15":"r7","18":"r7"},{"1":"r8","2":"r8","4":"r8","5":"r8","6":"r8","7":"r8","8":"r8","9":"r8","10":"s15","11":"s16","12":"s17","13":"s18","15":"r8","18":"r8"},{"1":"r9","2":"r9","4":"r9","5":"r9","6":"r9","7":"r9","8":"r9","9":"r9","10":"s15","11":"s16","12":"s17","13":"s18","15":"r9","18":"r9"},{"1":"r10","2":"r10","4":"r10","5":"r10","6":"r10","7":"r10","8":"r10","9":"r10","10":"r10","11":"r10","12":"s17","13":"s18","15":"r10","18":"r10"},{"1":"r11","2":"r11","4":"r11","5":"r11","6":"r11","7":"r11","8":"r11","9":"r11","10":"r11","11":"r11","12":"s17","13":"s18","15":"r11","18":"r11"},{"1":"r12","2":"r12","4":"r12","5":"r12","6":"r12","7":"r12","8":"r12","9":"r12","10":"r12","11":"r12","12":"r12","13":"r12","15":"r12","18":"r12"},{"1":"r13","2":"r13","4":"r13","5":"r13","6":"r13","7":"r13","8":"r13","9":"r13","10":"r13","11":"r13","12":"r13","13":"r13","15":"r13","18":"r13"},{"1":"r3","2":"r3","4":"r3","5":"r3","6":"r3","7":"r3","8":"r3","9":"r3","10":"r3","11":"r3","12":"r3","13":"r3","15":"r3","18":"r3"},{"1":"r14","2":"r14","4":"r14","5":"r14","6":"r14","7":"r14","8":"r14","9":"r14","10":"r14","11":"r14","12":"r14","13":"r14","15":"r14","18":"r14"},{"1":"s7","2":"s8","4":"s9","5":"s10","6":"s11","7":"s12","8":"s13","9":"s14","10":"s15","11":"s16","12":"s17","13":"s18","15":"s34"},{"1":"r15","2":"r15","4":"r15","5":"r15","6":"r15","7":"r15","8":"r15","9":"r15","10":"r15","11":"r15","12":"r15","13":"r15","15":"r15","18":"r15"}];

/**
 * Parsing stack.
 */
const stack = [];

/**
 * Tokenizer instance.
 */
let tokenizer;
/**
 * Generic tokenizer used by the parser in the Syntax tool.
 *
 * https://www.npmjs.com/package/syntax-cli
 *
 * See `--custom-tokinzer` to skip this generation, and use a custom one.
 */

const lexRules = [[/^\s+/, function() { /*skip whitespace*/ }],
[/^and/, function() { return 'AND' }],
[/^or/, function() { return 'OR' }],
[/^!=/, function() { return 'NOT_EQUAL' }],
[/^!/, function() { return 'NOT' }],
[/^==/, function() { return 'BE_EQUAL' }],
[/^~=/, function() { return 'NOT_EQUAL' }],
[/^~/, function() { return 'NOT' }],
[/^^[一-龥a-zA-Z\$_][一-龥a-zA-Z\d_]*/, function() { return 'VAR' }],
[/^[0-9]+(?:\.[0-9]+)?\b/, function() { return 'NUMBER' }],
[/^\+/, function() { return '+' }],
[/^\*/, function() { return '*' }],
[/^-/, function() { return '-' }],
[/^\//, function() { return '/' }],
[/^\(/, function() { return '(' }],
[/^\)/, function() { return ')' }],
[/^>=/, function() { return '>=' }],
[/^>/, function() { return '>' }],
[/^<=/, function() { return '<=' }],
[/^</, function() { return '<' }]];
const lexRulesByConditions = {"INITIAL":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]};

const EOF_TOKEN = {
  type: EOF,
  value: '',
};

tokenizer = {
  initString(string) {
    this._string = string;
    this._cursor = 0;

    this._states = ['INITIAL'];
    this._tokensQueue = [];

    this._currentLine = 1;
    this._currentColumn = 0;
    this._currentLineBeginOffset = 0;

    /**
     * Matched token location data.
     */
    this._tokenStartOffset = 0;
    this._tokenEndOffset = 0;
    this._tokenStartLine = 1;
    this._tokenEndLine = 1;
    this._tokenStartColumn = 0;
    this._tokenEndColumn = 0;

    return this;
  },

  /**
   * Returns tokenizer states.
   */
  getStates() {
    return this._states;
  },

  getCurrentState() {
    return this._states[this._states.length - 1];
  },

  pushState(state) {
    this._states.push(state);
  },

  begin(state) {
    this.pushState(state);
  },

  popState() {
    if (this._states.length > 1) {
      return this._states.pop();
    }
    return this._states[0];
  },

  getNextToken() {
    // Something was queued, return it.
    if (this._tokensQueue.length > 0) {
      return this.onToken(this._toToken(this._tokensQueue.shift()));
    }

    if (!this.hasMoreTokens()) {
      return this.onToken(EOF_TOKEN);
    }

    let string = this._string.slice(this._cursor);
    let lexRulesForState = lexRulesByConditions[this.getCurrentState()];

    for (let i = 0; i < lexRulesForState.length; i++) {
      let lexRuleIndex = lexRulesForState[i];
      let lexRule = lexRules[lexRuleIndex];

      let matched = this._match(string, lexRule[0]);

      // Manual handling of EOF token (the end of string). Return it
      // as `EOF` symbol.
      if (string === '' && matched === '') {
        this._cursor++;
      }

      if (matched !== null) {
        yytext = matched;
        yyleng = yytext.length;
        let token = lexRule[1].call(this);

        if (!token) {
          return this.getNextToken();
        }

        // If multiple tokens are returned, save them to return
        // on next `getNextToken` call.

        if (Array.isArray(token)) {
          const tokensToQueue = token.slice(1);
          token = token[0];
          if (tokensToQueue.length > 0) {
            this._tokensQueue.unshift(...tokensToQueue);
          }
        }

        return this.onToken(this._toToken(token, yytext));
      }
    }

    if (this.isEOF()) {
      this._cursor++;
      return EOF_TOKEN;
    }

    this.throwUnexpectedToken(
      string[0],
      this._currentLine,
      this._currentColumn
    );
  },

  /**
   * Throws default "Unexpected token" exception, showing the actual
   * line from the source, pointing with the ^ marker to the bad token.
   * In addition, shows `line:column` location.
   */
  throwUnexpectedToken(symbol, line, column) {
    const lineSource = this._string.split('\n')[line - 1];
    let lineData = '';

    if (lineSource) {
      const pad = ' '.repeat(column);
      lineData = '\n\n' + lineSource + '\n' + pad + '^\n';
    }

    throw new SyntaxError(
      `${lineData}Unexpected token: "${symbol}" ` +
      `at ${line}:${column}.`
    );
  },

  getCursor() {
    return this._cursor;
  },

  getCurrentLine() {
    return this._currentLine;
  },

  getCurrentColumn() {
    return this._currentColumn;
  },

  _captureLocation(matched) {
    const nlRe = /\n/g;

    // Absolute offsets.
    this._tokenStartOffset = this._cursor;

    // Line-based locations, start.
    this._tokenStartLine = this._currentLine;
    this._tokenStartColumn =
      this._tokenStartOffset - this._currentLineBeginOffset;

    // Extract `\n` in the matched token.
    let nlMatch;
    while ((nlMatch = nlRe.exec(matched)) !== null) {
      this._currentLine++;
      this._currentLineBeginOffset = this._tokenStartOffset + nlMatch.index + 1;
    }

    this._tokenEndOffset = this._cursor + matched.length;

    // Line-based locations, end.
    this._tokenEndLine = this._currentLine;
    this._tokenEndColumn = this._currentColumn =
      (this._tokenEndOffset - this._currentLineBeginOffset);
  },

  _toToken(tokenType, yytext = '') {
    return {
      // Basic data.
      type: tokenType,
      value: yytext,

      // Location data.
      startOffset: this._tokenStartOffset,
      endOffset: this._tokenEndOffset,
      startLine: this._tokenStartLine,
      endLine: this._tokenEndLine,
      startColumn: this._tokenStartColumn,
      endColumn: this._tokenEndColumn,
    };
  },

  isEOF() {
    return this._cursor === this._string.length;
  },

  hasMoreTokens() {
    return this._cursor <= this._string.length;
  },

  _match(string, regexp) {
    let matched = string.match(regexp);
    if (matched) {
      // Handle `\n` in the matched token to track line numbers.
      this._captureLocation(matched[0]);
      this._cursor += matched[0].length;
      return matched[0];
    }
    return null;
  },

  /**
   * Allows analyzing, and transforming token. Default implementation
   * just passes the token through.
   */
  onToken(token) {
    return token;
  },
};

/**
 * Expose tokenizer so it can be accessed in semantic actions.
 */
yy.lexer = tokenizer;
yy.tokenizer = tokenizer;

/**
 * Global parsing options. Some options can be shadowed per
 * each `parse` call, if the optations are passed.
 *
 * Initalized to the `captureLocations` which is passed
 * from the generator. Other options can be added at runtime.
 */
yy.options = {
  captureLocations: false,
};

/**
 * Parsing module.
 */
const yyparse = {
  /**
   * Sets global parsing options.
   */
  setOptions(options) {
    yy.options = options;
    return this;
  },

  /**
   * Returns parsing options.
   */
  getOptions() {
    return yy.options;
  },

  /**
   * Parses a string.
   */
  parse(string, parseOptions) {
    if (!tokenizer) {
      throw new Error(`Tokenizer instance wasn't specified.`);
    }

    tokenizer.initString(string);

    /**
     * If parse options are passed, override global parse options for
     * this call, and later restore global options.
     */
    let globalOptions = yy.options;
    if (parseOptions) {
      yy.options = Object.assign({}, yy.options, parseOptions);
    }

    /**
     * Allow callers to do setup work based on the
     * parsing string, and passed options.
     */
    yyparse.onParseBegin(string, tokenizer, yy.options);

    stack.length = 0;
    stack.push(0);

    let token = tokenizer.getNextToken();
    let shiftedToken = null;

    do {
      if (!token) {
        // Restore options.
        yy.options = globalOptions;
        unexpectedEndOfInput();
      }

      let state = stack[stack.length - 1];
      let column = tokens[token.type];

      if (!table[state].hasOwnProperty(column)) {
        yy.options = globalOptions;
        unexpectedToken(token);
      }

      let entry = table[state][column];

      // Shift action.
      if (entry[0] === 's') {
        let loc = null;

        if (yy.options.captureLocations) {
          loc = {
            startOffset: token.startOffset,
            endOffset: token.endOffset,
            startLine: token.startLine,
            endLine: token.endLine,
            startColumn: token.startColumn,
            endColumn: token.endColumn,
          };
        }

        shiftedToken = this.onShift(token);

        stack.push(
          {symbol: tokens[shiftedToken.type], semanticValue: shiftedToken.value, loc},
          Number(entry.slice(1))
        );

        token = tokenizer.getNextToken();
      }

      // Reduce action.
      else if (entry[0] === 'r') {
        let productionNumber = entry.slice(1);
        let production = productions[productionNumber];
        let hasSemanticAction = typeof production[2] === 'function';
        let semanticValueArgs = hasSemanticAction ? [] : null;

        const locationArgs = (
          hasSemanticAction && yy.options.captureLocations
            ? []
            : null
        );

        if (production[1] !== 0) {
          let rhsLength = production[1];
          while (rhsLength-- > 0) {
            stack.pop();
            let stackEntry = stack.pop();

            if (hasSemanticAction) {
              semanticValueArgs.unshift(stackEntry.semanticValue);

              if (locationArgs) {
                locationArgs.unshift(stackEntry.loc);
              }
            }
          }
        }

        const reduceStackEntry = {symbol: production[0]};

        if (hasSemanticAction) {
          yytext = shiftedToken ? shiftedToken.value : null;
          yyleng = shiftedToken ? shiftedToken.value.length : null;

          const semanticActionArgs = (
            locationArgs !== null
              ? semanticValueArgs.concat(locationArgs)
              : semanticValueArgs
          );

          production[2](...semanticActionArgs);

          reduceStackEntry.semanticValue = __;

          if (locationArgs) {
            reduceStackEntry.loc = __loc;
          }
        }

        const nextState = stack[stack.length - 1];
        const symbolToReduceWith = production[0];

        stack.push(
          reduceStackEntry,
          table[nextState][symbolToReduceWith]
        );
      }

      // Accept.
      else if (entry === 'acc') {
        stack.pop();
        let parsed = stack.pop();

        if (stack.length !== 1 ||
            stack[0] !== 0 ||
            tokenizer.hasMoreTokens()) {
          // Restore options.
          yy.options = globalOptions;
          unexpectedToken(token);
        }

        if (parsed.hasOwnProperty('semanticValue')) {
          yy.options = globalOptions;
          yyparse.onParseEnd(parsed.semanticValue);
          return parsed.semanticValue;
        }

        yyparse.onParseEnd();

        // Restore options.
        yy.options = globalOptions;
        return true;
      }

    } while (tokenizer.hasMoreTokens() || stack.length > 1);
  },

  setTokenizer(customTokenizer) {
    tokenizer = customTokenizer;
    return yyparse;
  },

  getTokenizer() {
    return tokenizer;
  },

  onParseBegin(string, tokenizer, options) {},
  onParseEnd(parsed) {},

  /**
   * Allows analyzing, and transforming shifted token. Default implementation
   * just passes the token through.
   */
  onShift(token) {
    return token;
  },
};


        const { ExpNotEqual, ExpBeEqual, ExpGreater, ExpGreaterEqual, ExpNot, ExpAnd, ExpOr, ExpLess, ExpLessEqual,
          ExpNumber, ExpPlus, ExpMinus, ExpTimes, ExpDivide, ExpVar} = require('./Exp');
    

function unexpectedToken(token) {
  if (token.type === EOF) {
    unexpectedEndOfInput();
  }

  tokenizer.throwUnexpectedToken(
    token.value,
    token.startLine,
    token.startColumn
  );
}

function unexpectedEndOfInput() {
  parseError(`Unexpected end of input.`);
}

function parseError(message) {
  throw new SyntaxError(message);
}

module.exports = yyparse;
