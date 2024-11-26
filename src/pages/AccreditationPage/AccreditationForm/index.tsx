import { useRef } from 'react'

import { Formik, FormikHelpers, FormikProps } from 'formik'
import { v4 as uuidv4 } from 'uuid'

import { FormContainer } from './AccreditationForm'
import { AccreditFormFieldValues } from './types'
import { formInitialValues } from './utils/config'
import { mapValuesToRequest } from './utils/mapValuesToRequest'
import { accreditationFormSchema } from './utils/validationSchema'
import { postAccreditation } from '@/entities/accreditation/api'

const AccreditationForm = () => {
  const formRef = useRef<FormikProps<AccreditFormFieldValues>>(null)
  const handleSubmit = async (
    values: AccreditFormFieldValues,
    formikHelpers: FormikHelpers<AccreditFormFieldValues>,
  ) => {
    try {
      const response = await postAccreditation(mapValuesToRequest(values))
      if (response) {
        formikHelpers.setFieldValue('answer', response)
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Formik
      initialValues={{ ...formInitialValues, sessionId: uuidv4() }}
      validationSchema={accreditationFormSchema}
      onSubmit={handleSubmit}
      innerRef={formRef}
    >
      <FormContainer />
    </Formik>
  )
}

export { AccreditationForm }
