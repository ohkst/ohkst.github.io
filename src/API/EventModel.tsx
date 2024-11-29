// EventModel.ts
import { z } from "zod";

export interface TestPostRequestData {
  key: number;
  title: string;
  value: number;
}

export interface TestPostResponseData {
  key: number;
  title: string;
  value: number;
}

// 제네릭 형태의 스키마 생성 함수
export const createListModelSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    key: z.string(),
    content: z.array(itemSchema), // 제네릭 타입의 배열
    count: z.string(),
  });

// EventItem 스키마 정의
export const EventItemSchema = z.object({
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

// EventListModel 스키마 생성
export const EventListModelSchema = createListModelSchema(EventItemSchema);
// ...

// 타입 추출 (제네릭 타입으로 동작)
export type EventItemZod = z.infer<typeof EventItemSchema>;
export type EventListModelZod = z.infer<typeof EventListModelSchema>;

// 타입 사용 예시
// const exampleData: RootModel = {
//   key: "event/mobile_notice_popup",
//   content: [
//     {
//       createdate: "20241126163217",
//       fromdate: "20241127",
//       todate: "20250115",
//       na_view_type: "02",
//       na_event_yn: "Y",
//       na_event_summary: "",
//       num: "924",
//       reserved: "",
//       na_benefit_yn: "Y",
//       na_event_type: "02",
//       na_event_code: "",
//       title: "BanKIS 해외주식 주간 미션 이벤트",
//       na_event_terms: "",
//       na_list_img: "",
//       list_img: "",
//       na_lscreen_img: "",
//       listorder: "5",
//     },
//     // 추가 항목들...
//   ],
//   count: "0035",
// };
