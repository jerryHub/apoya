var CodeMirror = {
    "changeEnd": function () {},
    "Pos": function () {},
    "optionHandlers": {
        "value": function () {},
        "mode": function () {},
        "indentUnit": function () {},
        "tabSize": function () {},
        "theme": function () {},
        "keyMap": function () {},
        "lineWrapping": function () {},
        "gutters": function () {},
        "fixedGutter": function () {},
        "coverGutterNextToScrollbar": function () {},
        "lineNumbers": function () {},
        "firstLineNumber": function () {},
        "lineNumberFormatter": function () {},
        "showCursorWhenSelecting": function () {},
        "readOnly": function () {},
        "undoDepth": function () {},
        "viewportMargin": function () {},
        "maxHighlightLength": function () {},
        "moveInputWithCursor": function () {},
        "tabindex": function () {}
    },
    "defaults": {
        "value": {},
        "mode": function () {},
        "indentUnit": {},
        "indentWithTabs": {},
        "smartIndent": {},
        "tabSize": {},
        "electricChars": {},
        "rtlMoveVisually": {},
        "theme": {},
        "keyMap": {},
        "extraKeys": function () {},
        "onKeyEvent": function () {},
        "onDragEvent": function () {},
        "lineWrapping": {},
        "gutters": function () {},
        "fixedGutter": {},
        "coverGutterNextToScrollbar": {},
        "lineNumbers": {},
        "firstLineNumber": {},
        "lineNumberFormatter": function () {},
        "showCursorWhenSelecting": {},
        "resetSelectionOnContextMenu": {},
        "readOnly": {},
        "dragDrop": {},
        "cursorBlinkRate": {},
        "cursorScrollMargin": {},
        "cursorHeight": {},
        "workTime": {},
        "workDelay": {},
        "flattenSpans": {},
        "pollInterval": {},
        "undoDepth": {},
        "historyEventDelay": {},
        "viewportMargin": {},
        "maxHighlightLength": {},
        "crudeMeasuringFrom": {},
        "moveInputWithCursor": {},
        "tabindex": function () {},
        "autofocus": function () {}
    },
    "Init": {
        "toString": function () {}
    },
    "modes": {
        "null": function () {}
    },
    "mimeModes": {
        "text/plain": {}
    },
    "defineMode": function () {},
    "defineMIME": function () {},
    "resolveMode": function () {},
    "getMode": function () {},
    "modeExtensions": function () {},
    "extendMode": function () {},
    "defineExtension": function () {},
    "defineDocExtension": function () {},
    "defineOption": function () {},
    "defineInitHook": function () {},
    "helpers": function () {},
    "registerHelper": function () {},
    "isWordChar": function () {},
    "copyState": function () {},
    "startState": function () {},
    "innerMode": function () {},
    "commands": {
        "selectAll": function () {},
        "killLine": function () {},
        "deleteLine": function () {},
        "delLineLeft": function () {},
        "undo": function () {},
        "redo": function () {},
        "goDocStart": function () {},
        "goDocEnd": function () {},
        "goLineStart": function () {},
        "goLineStartSmart": function () {},
        "goLineEnd": function () {},
        "goLineRight": function () {},
        "goLineLeft": function () {},
        "goLineUp": function () {},
        "goLineDown": function () {},
        "goPageUp": function () {},
        "goPageDown": function () {},
        "goCharLeft": function () {},
        "goCharRight": function () {},
        "goColumnLeft": function () {},
        "goColumnRight": function () {},
        "goWordLeft": function () {},
        "goGroupRight": function () {},
        "goGroupLeft": function () {},
        "goWordRight": function () {},
        "delCharBefore": function () {},
        "delCharAfter": function () {},
        "delWordBefore": function () {},
        "delWordAfter": function () {},
        "delGroupBefore": function () {},
        "delGroupAfter": function () {},
        "indentAuto": function () {},
        "indentMore": function () {},
        "indentLess": function () {},
        "insertTab": function () {},
        "defaultTab": function () {},
        "transposeChars": function () {},
        "newlineAndIndent": function () {},
        "toggleOverwrite": function () {}
    },
    "keyMap": {
        "basic": {
            "Left": {},
            "Right": {},
            "Up": {},
            "Down": {},
            "End": {},
            "Home": {},
            "PageUp": {},
            "PageDown": {},
            "Delete": {},
            "Backspace": {},
            "Shift-Backspace": {},
            "Tab": {},
            "Shift-Tab": {},
            "Enter": {},
            "Insert": {}
        },
        "pcDefault": {
            "Ctrl-A": {},
            "Ctrl-D": {},
            "Ctrl-Z": {},
            "Shift-Ctrl-Z": {},
            "Ctrl-Y": {},
            "Ctrl-Home": {},
            "Alt-Up": {},
            "Ctrl-End": {},
            "Ctrl-Down": {},
            "Ctrl-Left": {},
            "Ctrl-Right": {},
            "Alt-Left": {},
            "Alt-Right": {},
            "Ctrl-Backspace": {},
            "Ctrl-Delete": {},
            "Ctrl-S": {},
            "Ctrl-F": {},
            "Ctrl-G": {},
            "Shift-Ctrl-G": {},
            "Shift-Ctrl-F": {},
            "Shift-Ctrl-R": {},
            "Ctrl-[": {},
            "Ctrl-]": {},
            "fallthrough": {}
        },
        "macDefault": {
            "Cmd-A": {},
            "Cmd-D": {},
            "Cmd-Z": {},
            "Shift-Cmd-Z": {},
            "Cmd-Y": {},
            "Cmd-Up": {},
            "Cmd-End": {},
            "Cmd-Down": {},
            "Alt-Left": {},
            "Alt-Right": {},
            "Cmd-Left": {},
            "Cmd-Right": {},
            "Alt-Backspace": {},
            "Ctrl-Alt-Backspace": {},
            "Alt-Delete": {},
            "Cmd-S": {},
            "Cmd-F": {},
            "Cmd-G": {},
            "Shift-Cmd-G": {},
            "Cmd-Alt-F": {},
            "Shift-Cmd-Alt-F": {},
            "Cmd-[": {},
            "Cmd-]": {},
            "Cmd-Backspace": {},
            "fallthrough": {
                "0": {},
                "1": {}
            }
        },
        "default": {
            "Ctrl-A": {},
            "Ctrl-D": {},
            "Ctrl-Z": {},
            "Shift-Ctrl-Z": {},
            "Ctrl-Y": {},
            "Ctrl-Home": {},
            "Alt-Up": {},
            "Ctrl-End": {},
            "Ctrl-Down": {},
            "Ctrl-Left": {},
            "Ctrl-Right": {},
            "Alt-Left": {},
            "Alt-Right": {},
            "Ctrl-Backspace": {},
            "Ctrl-Delete": {},
            "Ctrl-S": {},
            "Ctrl-F": {},
            "Ctrl-G": {},
            "Shift-Ctrl-G": {},
            "Shift-Ctrl-F": {},
            "Shift-Ctrl-R": {},
            "Ctrl-[": {},
            "Ctrl-]": {},
            "fallthrough": {}
        },
        "emacsy": {
            "Ctrl-F": {},
            "Ctrl-B": {},
            "Ctrl-P": {},
            "Ctrl-N": {},
            "Alt-F": {},
            "Alt-B": {},
            "Ctrl-A": {},
            "Ctrl-E": {},
            "Ctrl-V": {},
            "Shift-Ctrl-V": {},
            "Ctrl-D": {},
            "Ctrl-H": {},
            "Alt-D": {},
            "Alt-Backspace": {},
            "Ctrl-K": {},
            "Ctrl-T": {}
        }
    },
    "lookupKey": function () {},
    "isModifierKey": function () {},
    "keyName": function () {},
    "fromTextArea": function () {},
    "StringStream": function () {},
    "TextMarker": function () {},
    "SharedTextMarker": function () {},
    "LineWidget": function () {},
    "Line": function () {},
    "Doc": function () {},
    "e_stop": function () {},
    "e_preventDefault": function () {},
    "e_stopPropagation": function () {},
    "on": function () {},
    "off": function () {},
    "signal": function () {},
    "Pass": {
        "toString": function () {}
    },
    "countColumn": function () {},
    "replaceGetRect": function () {},
    "splitLines": function () {},
    "keyNames": {
        "3": {},
        "8": {},
        "9": {},
        "13": {},
        "16": {},
        "17": {},
        "18": {},
        "19": {},
        "20": {},
        "27": {},
        "32": {},
        "33": {},
        "34": {},
        "35": {},
        "36": {},
        "37": {},
        "38": {},
        "39": {},
        "40": {},
        "44": {},
        "45": {},
        "46": {},
        "48": {},
        "49": {},
        "50": {},
        "51": {},
        "52": {},
        "53": {},
        "54": {},
        "55": {},
        "56": {},
        "57": {},
        "59": {},
        "65": {},
        "66": {},
        "67": {},
        "68": {},
        "69": {},
        "70": {},
        "71": {},
        "72": {},
        "73": {},
        "74": {},
        "75": {},
        "76": {},
        "77": {},
        "78": {},
        "79": {},
        "80": {},
        "81": {},
        "82": {},
        "83": {},
        "84": {},
        "85": {},
        "86": {},
        "87": {},
        "88": {},
        "89": {},
        "90": {},
        "91": {},
        "92": {},
        "93": {},
        "107": {},
        "109": {},
        "112": {},
        "113": {},
        "114": {},
        "115": {},
        "116": {},
        "117": {},
        "118": {},
        "119": {},
        "120": {},
        "121": {},
        "122": {},
        "123": {},
        "127": {},
        "186": {},
        "187": {},
        "188": {},
        "189": {},
        "190": {},
        "191": {},
        "192": {},
        "219": {},
        "220": {},
        "221": {},
        "222": {},
        "63232": {},
        "63233": {},
        "63234": {},
        "63235": {},
        "63236": {},
        "63237": {},
        "63238": {},
        "63239": {},
        "63240": {},
        "63241": {},
        "63242": {},
        "63243": {},
        "63244": {},
        "63245": {},
        "63246": {},
        "63247": {},
        "63272": {},
        "63273": {},
        "63275": {},
        "63276": {},
        "63277": {},
        "63302": {}
    },
    "version": {}
}