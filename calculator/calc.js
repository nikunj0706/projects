/*
function DisplayInput(value, isCurrentSymbol) {
  if (
    (_isPrevSymbol && isCurrentSymbol) ||
    (isCurrentSymbol && document.getElementById("txtInput").value === "")
  ) {
    alert("Please Entr a Valid Strig");
    return;
  }
  _isPrevSymbol = isCurrentSymbol;
  if (isFromEqaull) {
    isFromEqaull = false;
    if (!isCurrentSymbol) {
      ClearTextBox();
    }
  }

  document.getElementById("txtInput").value += value;
}

function ClearTextBox() {
  document.getElementById("txtInput").value = "";
}

function EvaluateString() {
  var eval_string = document.getElementById("txtInput").value;
  document.getElementById("txtInput").value = eval(eval_string);
  isFromEqaull = true;
}*/
let isFirstDecimalPoint = true;
let isFromEqaull = false;
var calculate = (function() {
  let _isPrevSymbol = false;
  
  return {
    Evalualte: function() {
      var eval_string = document.getElementById("txtInput").value;
      document.getElementById("txtInput").value = eval(eval_string);
      isFromEqaull = true;
      isFirstDecimalPoint = true;
    },
    ClearTextBox: function() {
      document.getElementById("txtInput").value = "";
      isFirstDecimalPoint = true;
    },
    DisplayInput: function(value, isCurrentSymbol) {
      if (isCurrentSymbol && _isPrevSymbol) {
        this.TrimString();
      }
      if (isCurrentSymbol && document.getElementById("txtInput").value === "") {
        alert("Please Entr a Valid Strig");
        return;
      }
      _isPrevSymbol = isCurrentSymbol;
      if (isFromEqaull) {
        isFromEqaull = false;
        if (!isCurrentSymbol) {
          this.ClearTextBox();
        }
      }

      document.getElementById("txtInput").value += value;
      if (isCurrentSymbol) {
        isFirstDecimalPoint = true;
      }
    },
    TrimString: function() {
      var str = "";
      str = document.getElementById("txtInput").value;

      let ifDecimaSymbol = str[str.length - 1];
      if (ifDecimaSymbol === ".") {
        isFirstDecimalPoint = true;
      }

      str = str.slice(0, -1);
      document.getElementById("txtInput").value = str;
      var lastchar = str[str.length - 1];
      if (
        lastchar === "-" ||
        lastchar === "+" ||
        lastchar === "*" ||
        lastchar === "/"
      ) {
        _isPrevSymbol = true;
        isFirstDecimalPoint = true;
        return;
      } else {
        var decimalExists = CheckforDecimalPoint();
        if (decimalExists) {
          isFirstDecimalPoint = false;
        } else {
          isFirstDecimalPoint = true;
        }
      }
      _isPrevSymbol = false;
    }
  };
})();

function DisplayDecimalPoint() {
  if (isFirstDecimalPoint) {
    let decimalExists = false;
    decimalExists = CheckforDecimalPoint();
    if (!decimalExists) {
      calculate.DisplayInput(".", false);
      isFirstDecimalPoint = false;
    }
  }
}

function CheckforDecimalPoint() {
  let str, nos, lastno;
  if (!isFromEqaull) {
    str = document.getElementById("txtInput").value;
    if (str != "") {
      nos = str.split(/[/*+-]/);
      lastno = nos[nos.length - 1];
      if (lastno.indexOf(".") > -1) {
        return true;
      }
    }
  }
  return false;
}
