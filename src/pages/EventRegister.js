import React, { useState, useEffect} from 'react';
import Checkbox from '../components/Checkbox'
import { Document, Page, pdfjs } from 'react-pdf';
import '../styles/EventRegister.css';

function EventRegister() {
  const [isAgreeChecked, setIsAgreeChecked] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [previousAgreeChecked, setPreviousAgreeChecked] = useState(false); // 이전 체크박스 상태 저장
  
  const handleAgreeCheckboxChange = () => {
    setIsAgreeChecked(!isAgreeChecked);
    setIsPdfModalOpen(!isPdfModalOpen); // PDF 모달 토글
  };

  const handleJoinClick = () => {
    if (!isAgreeChecked) {
      alert('이벤트 규정 확인 후 이벤트 신청이 가능합니다.');
      return;
    }
      alert('이벤트 신청이 완료되었습니다.')
    // 이벤트 신청 로직 (추후 구현)
    console.log('이벤트 신청');
  };

  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

  const handlePdfClick = () => {
    setIsPdfModalOpen(true);
    setIsAgreeChecked(true); 
    // PDF 로딩이 완료되면 체크박스 상태를 true로 변경
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
            <Checkbox id ="checkInfo" checked={isAgreeChecked} onChange={handleAgreeCheckboxChange}>
                <span id="labelInfo">운영규정 및 개인정보 수집 안내</span>
            </Checkbox>
        </div>
        <div id="divLine01"></div>
        <div>
            <Checkbox id="checkAgree" checked={isAgreeChecked} onChange={handleAgreeCheckboxChange}>      
                <span id="labelAgree">개인정보 수집・이용・제공에 동의합니다.</span>
                <button id="infoPdf" onClick={handlePdfClick}>{isPdfModalOpen ? '확인완료' : '규정확인'}</button>
                {isPdfModalOpen && (
                <div className="modal">
                  {pdfLoadingError && <div>PDF 로딩에 실패했습니다.</div>}
                  {isPdfLoaded ? (
                    <Document file={process.env.PUBLIC_URL + '/domestic_ms_event_2301.pdf'}>
                      <Page pageNumber={1} />
                    </Document>
                    
                  ) : (
                    <div></div>
                  )}
              </div>
                )}       
            </Checkbox>
        </div>
        <div id="divLine02"></div>
        <div>
            <button className="btn Search">
                대상여부 조회하기
            </button>
        </div>
        <div>
            <button className="btn Join" onClick={handleJoinClick}>
                이벤트 신청하기
            </button>
        </div>
    </div>
  );
}

export default EventRegister;