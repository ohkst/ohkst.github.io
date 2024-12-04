interface Window {
  // Android
  Android?: {
    back: (message: string) => void;
    moveEventDetail: (message: string) => void;
    moveScreen: (message: string, data: string) => void;
    needLogin: (message: string) => void;
    getAccountAlias: (message: string) => void;
    getAppNoticeList: (message: string) => void;
    getMobileNoticePopup: (message: string) => void;
    getAutoTradingCheck: (message: string) => void;
    getBankisStock: (message: string) => void;
    getBankisDollar: (message: string) => void;
    getOverseasStock: (message: string) => void;
  };

  // iOS
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
      moveScreen?: {
        postMessage: (message: string, data: string) => void;
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

  onNativeMessage?: (message: string) => void;
}
