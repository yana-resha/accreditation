import { FieldArray } from 'formik'

import { useForm } from './hooks/useForm'
import style from './style.module.scss'
import { AddFieldBtn } from './ui/AddFieldBtn'
import { BlueAutosizeInput } from './ui/BlueAutosizeInput'
import { BlueTextBox } from './ui/BlueTextBox'
import { FieldBox } from './ui/FieldBox'
import { GridBox } from './ui/GridBox'
import { InputBox } from './ui/InputBox'
import { ReqularAutosizeInput } from './ui/ReqularAutosizeInput'
import { ReqularInput } from './ui/ReqularInput'
import { DEFAULT_QUESTIONS } from '@/entities/accreditation/config'
import { AccreditationRequestKeys } from '@/entities/accreditation/types'
import { useFormikWrapper } from '@/shared/hooks/useFormikWrapper'
import { BlueButton } from '@/shared/ui/BlueButton'

export const FormContainer = () => {
  const { values, isSubmitting, submitForm, nextStage, textStageBtnLabel } = useForm()
  const {
    value: sitationValue,
    isError: isSituationError,
    error: situationError,
    handleChange: situationHandleChange,
  } = useFormikWrapper(AccreditationRequestKeys.situation)

  const {
    value: complaintsValue,
    isError: isComplaintsError,
    error: complaintsError,
    handleChange: complaintsHandleChange,
  } = useFormikWrapper(AccreditationRequestKeys.complaints)

  const {
    value: diseaseAnamnesisValue,
    isError: isDiseaseAnamnesisError,
    error: diseaseAnamnesisError,
    handleChange: diseaseAnamnesisHandleChange,
  } = useFormikWrapper(AccreditationRequestKeys.disease_anamnesis)

  const {
    value: lifeAnamnesisValue,
    isError: isLifeAnamnesisError,
    error: lifeAnamnesisError,
    handleChange: lifeAnamnesisHandleChange,
  } = useFormikWrapper(AccreditationRequestKeys.life_anamnesis)

  const {
    value: statusValue,
    isError: isStatusError,
    error: statusError,
    handleChange: statusHandleChange,
  } = useFormikWrapper(AccreditationRequestKeys.status)

  const {
    value: questionValue,
    isError: isQuestionError,
    error: questionError,
    handleChange: questionHandleChange,
  } = useFormikWrapper(AccreditationRequestKeys.question)

  const {
    value: questionNumberValue,
    isError: isQuestionNumberError,
    error: questionNumberError,
    handleChange: questionNumberHandleChange,
  } = useFormikWrapper(AccreditationRequestKeys.question_number)

  const {
    value: chooseNumberValue,
    isError: isChooseNumberError,
    error: chooseNumberError,
    handleChange: chooseNumberHandleChange,
  } = useFormikWrapper(AccreditationRequestKeys.required_number_to_choose)

  const { value: additionalFieldsValue, handleChange: additionalFieldsHandleChange } = useFormikWrapper(
    AccreditationRequestKeys.additional_fields,
  )

  const {
    value: optionsValue,
    isError: isOptionsError,
    error: optionsError,
    handleChange: optionsHandleChange,
  } = useFormikWrapper(AccreditationRequestKeys.options)

  const { value: tablesValue, handleChange: tablesHandleChange } = useFormikWrapper(
    AccreditationRequestKeys.tables,
  )

  return (
    <div
      className={style.layout}
      data-target="form-container"
    >
      <div className={style.form}>
        <GridBox
          label={`Вопрос ${questionNumberValue ?? 1}-${DEFAULT_QUESTIONS}`}
          data-invalid={isQuestionError}
        >
          <FieldBox>
            <div>
              <InputBox
                isError={isQuestionError}
                error={questionError}
              >
                <BlueAutosizeInput
                  invalid={isQuestionError}
                  onChange={(e) => questionHandleChange(e.currentTarget.value)}
                  value={questionValue}
                  minRows={2}
                />
              </InputBox>
            </div>
          </FieldBox>
        </GridBox>
        <div className={style.settingsBox}>
          <GridBox data-invalid={isOptionsError}>
            <FieldArray
              name={AccreditationRequestKeys.options}
              render={(arrayHelpers) => (
                <FieldBox
                  label="Варианты ответов"
                  footer={<AddFieldBtn onClick={() => arrayHelpers.push('')} />}
                >
                  {optionsValue.map((value: string, index: number) => (
                    <InputBox
                      key={index}
                      isError={isOptionsError}
                      error={optionsError}
                    >
                      <BlueAutosizeInput
                        invalid={isOptionsError}
                        onChange={(e) => {
                          const newVal = [...optionsValue]
                          newVal[index] = e.currentTarget.value
                          optionsHandleChange(newVal)
                        }}
                        value={value}
                        minRows={1}
                      />
                    </InputBox>
                  ))}
                </FieldBox>
              )}
            />
          </GridBox>

          <GridBox>
            <div className={style.settingsGridBox}>
              <div
                className={style.numberBox}
                data-invalid={isQuestionNumberError}
              >
                <label className={style.smallLabel}>Номер вопроса</label>
                <InputBox
                  error={questionNumberError}
                  isError={isQuestionNumberError}
                >
                  <ReqularInput
                    readOnly
                    invalid={isQuestionNumberError}
                    type="number"
                    value={questionNumberValue}
                    onChange={(e) => questionNumberHandleChange(e.currentTarget.value)}
                  />
                </InputBox>
              </div>
              <div
                className={style.numberBox}
                data-invalid={isChooseNumberError}
              >
                <label className={style.smallLabel}>Количество правильных ответов</label>
                <InputBox
                  isError={isChooseNumberError}
                  error={chooseNumberError}
                >
                  <ReqularInput
                    value={chooseNumberValue ?? ''}
                    onChange={(e) => chooseNumberHandleChange(e.currentTarget.value)}
                    invalid={isChooseNumberError}
                    type="number"
                  />
                </InputBox>
              </div>
            </div>
          </GridBox>
        </div>

        <GridBox>
          <FieldBox
            label="Ситуация"
            data-invalid={isSituationError}
          >
            <InputBox
              isError={isSituationError}
              error={situationError}
            >
              <ReqularAutosizeInput
                minRows={3}
                placeholder="Описание"
                value={sitationValue}
                invalid={isSituationError}
                onChange={(e) => situationHandleChange(e.currentTarget.value)}
              />
            </InputBox>
          </FieldBox>
        </GridBox>
        <GridBox data-invalid={isComplaintsError}>
          <FieldBox label="Жалобы">
            <InputBox
              isError={isComplaintsError}
              error={complaintsError}
            >
              <ReqularAutosizeInput
                invalid={isComplaintsError}
                minRows={3}
                placeholder="Описание"
                value={complaintsValue}
                onChange={(e) => complaintsHandleChange(e.currentTarget.value)}
              />
            </InputBox>
          </FieldBox>
        </GridBox>

        <GridBox>
          <FieldBox
            label="Анамнез заболевания"
            data-invalid={isDiseaseAnamnesisError}
          >
            <InputBox
              isError={isDiseaseAnamnesisError}
              error={diseaseAnamnesisError}
            >
              <ReqularAutosizeInput
                invalid={isDiseaseAnamnesisError}
                minRows={3}
                placeholder="Описание"
                value={diseaseAnamnesisValue}
                onChange={(e) => diseaseAnamnesisHandleChange(e.currentTarget.value)}
              />
            </InputBox>
          </FieldBox>
        </GridBox>

        <GridBox>
          <FieldBox
            label="Анамнез жизни"
            data-invalid={isLifeAnamnesisError}
          >
            <InputBox
              isError={isLifeAnamnesisError}
              error={lifeAnamnesisError}
            >
              <ReqularAutosizeInput
                invalid={isLifeAnamnesisError}
                minRows={3}
                placeholder="Описание"
                value={lifeAnamnesisValue}
                onChange={(e) => lifeAnamnesisHandleChange(e.currentTarget.value)}
              />
            </InputBox>
          </FieldBox>
        </GridBox>

        <GridBox>
          <FieldBox
            label="Объективный статус"
            data-invalid={isStatusError}
          >
            <InputBox
              isError={isStatusError}
              error={statusError}
            >
              <ReqularAutosizeInput
                invalid={isStatusError}
                minRows={3}
                placeholder="Описание"
                value={statusValue}
                onChange={(e) => statusHandleChange(e.currentTarget.value)}
              />
            </InputBox>
          </FieldBox>
        </GridBox>

        <GridBox>
          <FieldArray
            name={AccreditationRequestKeys.additional_fields}
            render={(arrayHelpers) => (
              <FieldBox
                label="Дополнительное поле"
                footer={<AddFieldBtn onClick={() => arrayHelpers.push('')} />}
              >
                {additionalFieldsValue.map((value: string, index: number) => (
                  <InputBox
                    subtitle="Необязательное поле"
                    key={index}
                    deleteFunc={() => arrayHelpers.remove(index)}
                  >
                    <ReqularAutosizeInput
                      placeholder={'Описание'}
                      onChange={(e) => {
                        const newVal = [...additionalFieldsValue]
                        newVal[index] = e.currentTarget.value
                        additionalFieldsHandleChange(newVal)
                      }}
                      value={value}
                      minRows={3}
                    />
                  </InputBox>
                ))}
              </FieldBox>
            )}
          />
        </GridBox>

        <GridBox>
          <FieldArray
            name={AccreditationRequestKeys.tables}
            render={(arrayHelpers) => (
              <FieldBox
                label="Таблица"
                footer={<AddFieldBtn onClick={() => arrayHelpers.push('')} />}
              >
                {tablesValue.map((value: string, index: number) => (
                  <InputBox
                    key={index}
                    subtitle="Необязательное поле"
                    deleteFunc={() => arrayHelpers.remove(index)}
                  >
                    <ReqularAutosizeInput
                      placeholder={'Описание'}
                      onChange={(e) => {
                        const newVal = [...tablesValue]
                        newVal[index] = e.currentTarget.value
                        tablesHandleChange(newVal)
                      }}
                      value={value}
                      minRows={3}
                    />
                  </InputBox>
                ))}
              </FieldBox>
            )}
          />
        </GridBox>
        {!values.answer && (
          <GridBox>
            <BlueButton
              className={style.formBtn}
              isLoading={isSubmitting}
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Ответ
            </BlueButton>
          </GridBox>
        )}
      </div>
      {values.answer && (
        <div className={style.formResult}>
          <GridBox
            label="Ответ"
            data-target="answer"
          >
            <BlueTextBox>{values.answer}</BlueTextBox>
          </GridBox>
          <GridBox>
            <BlueButton
              className={style.formBtn}
              onClick={nextStage}
            >
              {textStageBtnLabel}
            </BlueButton>
          </GridBox>
        </div>
      )}
    </div>
  )
}
