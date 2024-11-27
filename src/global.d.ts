interface Window {
  Android?: {
    back: (message: string) => void;
    showToast: (message: string) => void;
  };
  webkit?: {
    messageHandlers?: {
      back?: {
        postMessage: (message: string) => void;
        // showAlert: (title: string, message: string) => void; // 새로운 알림 기능
        // getBatteryStatus: () => Promise<number>; // 배터리 상태 가져오기
      };
      moveEventDetail?: {
        postMessage: (message: string) => void;
      };
      needLogin?: {
        postMessage: (message: string) => void;
      };


      getAccountAlias?: {
        postMessage: (message: string) => void;
      };
      getAppNoticeList?: {
        postMessage: (message: string) => void;
      };
      getMobileNoticePopup?: {
        postMessage: (message: string) => void;
      };
      getAutoTradingCheck?: {
        postMessage: (message: string) => void;
      };
      getBankisStock?: {
        postMessage: (message: string) => void;
      };
      getBankisDollar?: {
        postMessage: (message: string) => void;
      };
      getOverseasStock?: {
        postMessage: (message: string) => void;
      };
    };
  };
}
