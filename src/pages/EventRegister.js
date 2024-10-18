import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Checkbox from '../components/Checkbox'
import { Document, Page, pdfjs } from 'react-pdf';
import '../styles/EventRegister.css';

const eventDetails = {
    1: { title: "Bankis 해외주식 신규 $30 이벤트",imgName : "img_bankis_ff_30dollar_2410" },
    2: { title: "해외주식 거래", imgName : "23161753img_fs_exchange_plus_event_2408" },
    3: { title: "BanKIS 계좌개설 이벤트", imgName : "img_bankis_direct_event_2212" }
};

function EventRegister() {
  const { id } = useParams();
  const event = eventDetails[id];
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

  const handlePdfClick = () => {
    setIsPdfModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsPdfModalOpen(false);
  };

  const [isPdfLoaded, setIsPdfLoaded] = useState(false);
  const [pdfLoadingError, setPdfLoadingError] = useState(false);

  useEffect(() => {
    const loadPdf = async () => {
      if (isPdfModalOpen) {
        try {
          // PDF 파일 로딩
          await pdfjs.getDocument(process.env.PUBLIC_URL + '/domestic_ms_event_2301.pdf').promise;
          setIsPdfLoaded(true);
        } catch (error) {
          console.error('PDF 로딩 실패:', error);
          setPdfLoadingError(true);
        }
      }
    };

    loadPdf();
  }, [isPdfModalOpen]);

  return (
    <div id="joinPage">
        <div>
            <Checkbox id ="checkInfo" checked={isChecked} onChange={handleCheckboxChange}>
                <span id="labelInfo">운영규정 및 개인정보 수집 안내</span>
            </Checkbox>
        </div>
        <div>
            <Checkbox id="checkAgree" checked={isChecked} onChange={handleCheckboxChange}>
                <span id="labelAgree">개인정보 수집・이용・제공에 동의합니다.</span>
                <button id="infoPdf" onClick={handlePdfClick}>규정확인</button>
                {isPdfModalOpen && (
                <div className="modal">
                  {pdfLoadingError && <div>PDF 로딩에 실패했습니다.</div>}
                  {isPdfLoaded ? (
                    <Document file={process.env.PUBLIC_URL + '/domestic_ms_event_2301.pdf'}>
                      <Page pageNumber={1} />
                    </Document>
                  ) : (
                    <div>PDF 로딩 중...</div>
                  )}
                  <button onClick={handleCloseModal}>
                    {isPdfLoaded ? '닫기' : '규정확인'}
                  </button>
              </div>
                )}
                
            </Checkbox>
        </div>
        <div>
            <button className="btn search">
                대상여부 조회하기
            </button>
        </div>
        <div>
            <button className="btn join">
                이벤트 신청하기
            </button>
        </div>
    </div>
  );
}

export default EventRegister;