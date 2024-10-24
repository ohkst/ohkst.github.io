import React, { useState, useEffect} from 'react';
import Checkbox from '../components/Checkbox';
import { Document, Page, pdfjs } from 'react-pdf';
import '../styles/EventRegister.css';
import AgreePdf from '../domestic_ms_event_2301.pdf';

function EventRegister() {
  const [isAgreeChecked, setIsAgreeChecked] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
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
    window.open(AgreePdf, '_blank');
    setIsAgreeChecked(true);
    setIsPdfModalOpen(true); // PDF 모달 토글
  };

  const [isPdfLoaded, setIsPdfLoaded] = useState(false);
  const [pdfLoadingError, setPdfLoadingError] = useState(false);

  useEffect(() => {
    const loadPdf = async () => {
      if (isPdfModalOpen) {
        try {
          // PDF 파일 로딩
          window.open(AgreePdf, '_blank');
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
            <Checkbox checked={isAgreeChecked} onChange={handleAgreeCheckboxChange} iconOn="../ic_checkbox_24_enable_ON.svg" iconOff="../ic_checkbox_24_enable_OFF.svg" label ="운영규정 및 개인정보 수집 안내" labelClass="labelInfo">
            </Checkbox>
        </div>
        <div id="divLine01"></div>
        <div>
            <Checkbox checked={isAgreeChecked} onChange={handleAgreeCheckboxChange} iconOn="../ic_checkbox_20_bg_white_enable_ON.svg" iconOff="../ic_checkbox_20_bg_white_enable_OFF.svg" label="개인정보 수집・이용・제공에 동의합니다." labelClass="labelAgree">      
      
            </Checkbox>
                <button id="infoPdf" onClick={handlePdfClick}>{isPdfModalOpen ? '확인완료' : '규정확인'}</button>
                {isPdfModalOpen && (
                <div className="modal">
                  {pdfLoadingError && <div>PDF 로딩에 실패했습니다.</div>}
                  {/* {isPdfLoaded ? (
                    window.open(AgreePdf, '_blank')
                  ) : (
                    <div></div>
                  )} */}
              </div>
                )} 
            
            <a href="/domestic_ms_event_2301.pdf" target='_blank'/>
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