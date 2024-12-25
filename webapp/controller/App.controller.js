// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ],(Controller) => {
//     "use restrict";
//     return Controller.extend("ui5.walkthrough.controller.App", {
//         onShowHello(){
//             alert(
//                 "Hello World"
//             );
//         }
//     })
// })

// 1. 컨트롤러 이름은 대문자로 시작
// 2. 컨트롤러는 관련 뷰와 동일한 이름
// 3. 이벤트 핸들러는 접두사로 on 사용
// 4. 컨트롤러 이름 *.controller.js

// 모듈 추가
// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/m/MessageToast"
// ],(Controller, MessageToast) => {
//     "use restrict";
//     return Controller.extend("ui5.walkthrough.controller.App", {
//         onShowHello(){
//             MessageToast.show("Hello World");
//         }
//     });
// });

// sap.ui.define : 어플리케이션 전체에서 객체 처리 가능
// sap.ui.require : 바로 실행하기만 되는 코드, 다른 코드에서 호출할 필요가 없는 경우
// 함수 매개변수의 이름을 지정할 때 로드할 atifact의 이름을 사용(네임스페이스 없음.)

// JSON Model
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],(Controller, MessageToast, JSONModel) => {
    "use restrict";

    return Controller.extend("ui5.walkthrough.controller.App", {
        onInit(){
            const oData={
                recipient : {
                    name:"World"
                }
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onShowHello(){
            MessageToast.show("Hello World");
        }
    });
});

// recipient. 객체 이름 속성의 값에서 데이터를 가져옴 이를 데이터 바인딩이라고 칭함.
// recipient/name 모델이서 경로를 선언
