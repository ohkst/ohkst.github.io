// EventModel.ts
import { z } from "zod";

// 제네릭 기본 구조
export const createObjectModelSchema = <
  T extends z.ZodTypeAny
>(
  itemSchema: T, // 배열의 요소 스키마
) =>
  z.object({
    key: z.string(), // 공통 필드
    content: itemSchema, // 배열 또는 객체
    count: z.string().optional(), // count는 선택적 필드
  });

export const createListModelSchema = <
  T extends z.ZodTypeAny
>(
  itemSchema: T, // 배열의 요소 스키마
) =>
  z.object({
    key: z.string(), // 공통 필드
    content: z.array(itemSchema), // 배열 또는 객체
    count: z.string().optional(), // count는 선택적 필드
  });

// 계좌 정보
export const AccountListItem = z.object({
  ACNT_PRDT_NAME: z.string(), // 계좌 상품 이름
  ACNT_INQR_SEQ: z.string(), // 계좌 조회 순서
  SMPH_AGRM_YN: z.string(), // 단순 약정 여부
  RSVR_FIELD40: z.string().optional(), // 예약 필드 (옵션)
  OPEN_ORG_NAME: z.string(), // 계좌 개설 기관 이름
  CANO: z.string(), // 계좌 번호
  ACNT_ADMN_ORG_NAME: z.string(), // 계좌 관리 기관 이름
  CMA_ACNT_YN: z.string(), // CMA 계좌 여부
  ACNT_ADMN_ORGNO: z.string(), // 계좌 관리 기관 번호
  OPEN_ORGNO: z.string(), // 개설 기관 번호
  ACNT_PRDT_CD: z.string(), // 계좌 상품 코드
  ACNT_BYNM_NAME: z.string().optional(), // 계좌 별칭 (옵션)
  AFRS_PMSS_RNGE_DVSN_CD: z.string(), // 허가 범위 코드
  OVRS_SCTY_TR_PSBL_YN: z.string(), // 해외 증권 거래 가능 여부
  CSAC_NAME: z.string(), // 고객명
});

// 이벤트 리스트 아이템
export const EventListItem = z.object({
  createdate: z.string(), // 생성 날짜 (YYYYMMDDHHMMSS 형식)
  fromdate: z.string(), // 시작 날짜 (YYYYMMDD 형식)
  todate: z.string(), // 종료 날짜 (YYYYMMDD 형식)
  na_view_type: z.string(), // 뷰 타입
  na_event_yn: z.string(), // 이벤트 여부 (Y/N)
  na_event_summary: z.string(), // 이벤트 요약
  num: z.string(), // 이벤트 번호
  reserved: z.string(), // 예약된 데이터
  na_benefit_yn: z.string(), // 혜택 여부 (Y/N)
  na_event_type: z.string(), // 이벤트 타입
  na_event_code: z.string(), // 이벤트 코드
  title: z.string(), // 이벤트 제목
  na_event_terms: z.string(), // 이벤트 약관 (PDF 파일 등 경로)
  na_list_img: z.string(), // 리스트 이미지 경로
  list_img: z.string(), // 리스트 이미지 경로
  na_lscreen_img: z.string(), // 화면 이미지 경로
  listorder: z.string(), // 리스트 순서
});

// 앱 공지 사항
export const AppNoticeListItem = z.object({
  num: z.string(), // 공지 번호
  prior_gb: z.string(), // 우선순위 구분
  data_dt: z.string(), // 데이터 날짜 (YYYYMMDDHHMMSS 형식)
  msg_title: z.string(), // 메시지 제목
  oss: z.string(), // OSS 여부
  hits: z.string(), // 조회수
});

// 자동 주문 정보
export const AutoTrading = z.object({
  AGREE_GB: z.string(), // 동의 구분
  INFO_GB: z.string(), // 정보 구분
  DATA_DT: z.string(), // 데이터 날짜
  SID: z.string(), // 세션 ID
  DATA_TM: z.string(), // 데이터 시간
  RCD: z.string(), // 결과 코드
});

// 뱅키스 주식 지급 이벤트
export const BankisStockEvent = z.object({
  EVNT_OBJT_CUST_YN: z.string(), // 이벤트 대상 고객 여부
  EVNT_OBJT_YN: z.string(), // 이벤트 대상 여부
  TR_BNF_OBJT_YN: z.string(), // 거래 혜택 대상 여부
  TR_BNF_PRDT_CD: z.string(), // 거래 혜택 상품 코드
});

// 뱅키스 달러 지급 이벤트
export const BankisDollarEvent = z.object({
  RSLT_CD: z.string(), // 결과 코드
  EVNT_OBJT_YN: z.string(), // 이벤트 대상 여부
  BANKIS_EVNT_KIND_CD: z.string(), // 이벤트 종류 코드
  EVNT_RQST_YN: z.string(), // 이벤트 요청 여부
});

// 해외주식 이벤트 대상 고객 조회
export const OverseasStockEvent = z.object({
  EVNT_CUST_DVSN_NAME: z.string(), // 결과 코드
  EVNT_CUST_DVSN_CD: z.string(), // 이벤트 대상 여부
});

// EventListModel 스키마 생성
export const AccountListModel = createListModelSchema(AccountListItem);
export const AppNoticeListModel = createListModelSchema(AppNoticeListItem);
export const EventListModel = createListModelSchema(EventListItem);

export const AutoTradingModel = createObjectModelSchema(AutoTrading);
export const BankisStockModel = createObjectModelSchema(BankisStockEvent);
export const BankisDollarModel = createObjectModelSchema(BankisDollarEvent);
export const OverseasStockModel = createObjectModelSchema(OverseasStockEvent);
// ...

export type EventListItemType = z.infer<typeof EventListItem>;
// export type EventListModelZod = z.infer<typeof EventListModel>;
