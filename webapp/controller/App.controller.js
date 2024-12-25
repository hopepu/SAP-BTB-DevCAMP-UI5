sap.ui.define([
    "sap/ui/core/mvc/Controller"
],(Controller) => {
    "use restrict";
    return Controller.extend("ui5.walkthrough.controller.App", {
        onShowHello(){
            alert(
                "Hello World"
            );
        }
    })

})
// 1. 컨트롤러 이름은 대문자로 시작
// 2. 컨트롤러는 관련 뷰와 동일한 이름
// 3. 이벤트 핸들러는 접두사로 on 사용
// 4. 컨트롤러 이름 *.controller.js