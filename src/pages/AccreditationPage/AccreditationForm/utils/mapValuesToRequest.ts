import { AccreditFormFieldValues } from '../types'
import { AccreditationRequest, AccreditationRequestKeys } from '@/entities/accreditation/types'

export const mapValuesToRequest = (values: AccreditFormFieldValues): AccreditationRequest => ({
  [AccreditationRequestKeys.situation]: values.situation,
  [AccreditationRequestKeys.complaints]: values.complaints,
  [AccreditationRequestKeys.disease_anamnesis]: values.disease_anamnesis,
  [AccreditationRequestKeys.life_anamnesis]: values.life_anamnesis,
  [AccreditationRequestKeys.status]: values.status,
  [AccreditationRequestKeys.question]: values.question,
  [AccreditationRequestKeys.required_number_to_choose]: Number(values.required_number_to_choose ?? 1),
  [AccreditationRequestKeys.question_number]: Number(values.question_number ?? 1),
  [AccreditationRequestKeys.session_id]: values.sessionId,
  [AccreditationRequestKeys.additional_fields]: values.additional_fields,
  [AccreditationRequestKeys.tables]: values.tables,
  [AccreditationRequestKeys.options]: values.options,
})
