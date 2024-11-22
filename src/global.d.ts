interface Window {
    Android?: {
      showToast: (message: string) => void;
    };
    webkit?: {
      messageHandlers?: {
        iOS?: {
          postMessage: (message: string) => void;
        };
      };
    };
  }