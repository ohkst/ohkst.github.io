interface Window {
  Android?: {
    back: (message: string) => void;
    showToast: (message: string) => void;
  };
  webkit?: {
    messageHandlers?: {
      iOS?: {
        postMessage: (message: string) => void;
        logEvent: (eventName: string, params: Record<string, any>) => void;
      };
      back?: {
        postMessage: (message: string) => void;
        showAlert: (title: string, message: string) => void; // 새로운 알림 기능
        getBatteryStatus: () => Promise<number>; // 배터리 상태 가져오기
      };
    };
  };
}
