JsOsaDAS1.001.00bplist00�Vscript_#
function changeCaseOfText(text, caseToSwitchTo) {
    var alteredText = text
    if (caseToSwitchTo === "lower") {
        alteredText = alteredText.toLowerCase()
    }
    else if (caseToSwitchTo === "upper") {
        alteredText = alteredText.toUpperCase()
    }
    return alteredText
}                              9 jscr  ��ޭ