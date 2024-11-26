import * as Yup from 'yup'

import { AccreditationRequestKeys } from '@/entities/accreditation/types'

function checkOptionsArray(value: string[] | undefined) {
  return (value ?? []).filter((el) => el).length >= 3
}

function checkDublicateOptions(value: string[] | undefined) {
  const arr = (value ?? []).filter((el) => el)
  const uniqArr = arr.filter((item, i, ar) => ar.indexOf(item) === i)

  return arr.length === uniqArr.length
}

export const accreditationFormSchema = Yup.object().shape({
  [AccreditationRequestKeys.situation]: Yup.string().required('Обязательное поле'),
  [AccreditationRequestKeys.complaints]: Yup.string().required('Обязательное поле'),
  [AccreditationRequestKeys.disease_anamnesis]: Yup.string().required('Обязательное поле'),
  [AccreditationRequestKeys.life_anamnesis]: Yup.string().required('Обязательное поле'),
  [AccreditationRequestKeys.question]: Yup.string().required('Обязательное поле'),
  [AccreditationRequestKeys.question_number]: Yup.number()
    .min(1, 'Число должно быть больше 0')
    .required('Обязательное поле'),
  [AccreditationRequestKeys.required_number_to_choose]: Yup.number()
    .min(1, 'Число должно быть больше 0')
    .required('Обязательное поле'),
  [AccreditationRequestKeys.status]: Yup.string().required('Обязательное поле'),
  [AccreditationRequestKeys.options]: Yup.array()
    .min(3, 'Минимальное кол-во вариантов ответа не менее 3')
    .test('', 'Минимальное кол-во вариантов ответа не менее 3', checkOptionsArray)
    .test('', 'Варианты ответа не должны повторяться', checkDublicateOptions),
})
