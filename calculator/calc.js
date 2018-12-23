
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

var calculate = (function() {
  let _isPrevSymbol = false;
  let isFromEqaull = false;
  return {
    Evalualte: function() {
      var eval_string = document.getElementById("txtInput").value;
      document.getElementById("txtInput").value = eval(eval_string);
      isFromEqaull = true;
    },
    ClearTextBox: function() {
      document.getElementById("txtInput").value = "";
    },
    DisplayInput: function(value, isCurrentSymbol) {
      if (
        (isCurrentSymbol && _isPrevSymbol) ||
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
    },
    TrimString :function(){
      document.getElementById("txtInput").value = (document.getElementById("txtInput").value).slice(0,-1);
    }
  };
})();
