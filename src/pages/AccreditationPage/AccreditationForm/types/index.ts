import { AccreditationRequestKeys } from '@/entities/accreditation/types'

export interface AccreditFormFieldValues {
  sessionId: string
  [AccreditationRequestKeys.situation]: string
  [AccreditationRequestKeys.complaints]: string
  [AccreditationRequestKeys.disease_anamnesis]: string
  [AccreditationRequestKeys.life_anamnesis]: string
  [AccreditationRequestKeys.question]: string
  [AccreditationRequestKeys.question_number]: number
  [AccreditationRequestKeys.required_number_to_choose]: number | undefined
  [AccreditationRequestKeys.status]: string
  [AccreditationRequestKeys.additional_fields]: string[]
  [AccreditationRequestKeys.tables]: string[]
  [AccreditationRequestKeys.options]: [string, string, string, ...string[]]
  answer: string | undefined
  taskNumber: number
}
