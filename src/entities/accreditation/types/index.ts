export enum AccreditationRequestKeys {
  situation = 'situation',
  complaints = 'complaints',
  disease_anamnesis = 'disease_anamnesis',
  life_anamnesis = 'life_anamnesis',
  status = 'status',
  required_number_to_choose = 'required_number_to_choose',
  question_number = 'question_number',
  session_id = 'session_id',
  additional_fields = 'additional_fields',
  tables = 'tables',
  question = 'question',
  options = 'options',
}

export interface AccreditationRequest {
  [AccreditationRequestKeys.situation]: string // ситуация
  [AccreditationRequestKeys.complaints]: string // жалоба
  [AccreditationRequestKeys.disease_anamnesis]: string // анамнез заболевания
  [AccreditationRequestKeys.life_anamnesis]: string // анамнез жизни
  [AccreditationRequestKeys.status]: string // объективный статус
  [AccreditationRequestKeys.question]: string // текст задачи
  [AccreditationRequestKeys.required_number_to_choose]: number // количество необходимых
  [AccreditationRequestKeys.question_number]: number // номер вопроса
  [AccreditationRequestKeys.session_id]: string // генерируем сами на фронте
  [AccreditationRequestKeys.additional_fields]?: string[] // массив дополнительных полей с типом текст
  [AccreditationRequestKeys.tables]?: string[] // массив дополнительных полей с типом текст
  [AccreditationRequestKeys.options]: [string, string, string, ...string[]]
}

export interface AccreditationResponse {
  response?: string
  detail?: [
    {
      loc: [string, number]
      msg: string
      type: string
    },
  ]
}
