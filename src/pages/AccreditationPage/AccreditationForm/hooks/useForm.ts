import { useCallback, useEffect, useMemo } from 'react'

import { useFormikContext } from 'formik'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { AccreditFormFieldValues } from '../types'
import { formInitialValues } from '../utils/config'
import { DEFAULT_QUESTIONS, DEFAULT_TASKS } from '@/entities/accreditation/config'

export const useForm = () => {
  const navigate = useNavigate()
  const { values, submitForm, resetForm, isSubmitting, initialValues, submitCount, isValid } =
    useFormikContext<AccreditFormFieldValues>()

  const textStageBtnLabel = useMemo(
    () =>
      values.taskNumber >= DEFAULT_TASKS && values.question_number >= DEFAULT_QUESTIONS
        ? 'Завершить'
        : values.question_number >= DEFAULT_QUESTIONS
          ? 'Следующая задача'
          : 'Cледующий вопрос',
    [values.question_number, values.taskNumber],
  )
  const nextStage = useCallback(() => {
    if (values.taskNumber >= DEFAULT_TASKS && values.question_number >= DEFAULT_QUESTIONS) {
      navigate('/')

      return
    }

    if (values.question_number >= DEFAULT_QUESTIONS) {
      resetForm({
        values: {
          ...formInitialValues,
          sessionId: uuidv4(),
          taskNumber: values.taskNumber + 1,
        },
      })

      return
    }
    resetForm({
      values: {
        ...values,
        question_number: values.question_number + 1,
        question: initialValues.question,
        required_number_to_choose: initialValues.required_number_to_choose,
        answer: initialValues.answer,
        options: initialValues.options,
      },
    })

    document.querySelector('div[data-target="form-container"]')?.scrollIntoView({ behavior: 'smooth' })
  }, [
    initialValues.answer,
    initialValues.options,
    initialValues.question,
    initialValues.required_number_to_choose,
    navigate,
    resetForm,
    values,
  ])

  useEffect(() => {
    if (submitCount > 0 && !isValid) {
      document.querySelector('div[data-invalid="true"]')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [submitCount, isValid])

  useEffect(() => {
    if (values.answer) {
      document.querySelector('div[data-target="answer"]')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [values.answer])

  return {
    isSubmitting,
    submitForm,
    values,
    nextStage,
    textStageBtnLabel,
  }
}
