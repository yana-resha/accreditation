import { AccreditFormFieldValues } from '../types'
import { AccreditationRequestKeys } from '@/entities/accreditation/types'

export const formInitialValues: AccreditFormFieldValues = {
  sessionId: 'id' + new Date().getTime(),
  [AccreditationRequestKeys.situation]: '',
  [AccreditationRequestKeys.complaints]: '',
  [AccreditationRequestKeys.disease_anamnesis]: '',
  [AccreditationRequestKeys.life_anamnesis]: '',
  [AccreditationRequestKeys.question]: '',
  [AccreditationRequestKeys.question_number]: 1,
  [AccreditationRequestKeys.required_number_to_choose]: undefined,
  [AccreditationRequestKeys.status]: '',
  [AccreditationRequestKeys.additional_fields]: [''],
  [AccreditationRequestKeys.tables]: [''],
  [AccreditationRequestKeys.options]: ['', '', ''],
  answer: undefined,
  taskNumber: 1,
}
