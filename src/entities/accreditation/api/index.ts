import { AccreditationRequest, AccreditationResponse } from '../types'

const SERVICE_URL = 'https://192.144.12.230.sslip.io:8082/process'

export async function postAccreditation(request: AccreditationRequest): Promise<string> {
  const response = await fetch(SERVICE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  })
  if (response.ok) {
    const result: AccreditationResponse = await response.json()
    if (!result.response) {
      if (result.detail) {
        throw `Ошибка запроса: ${result.detail[0]?.msg}`
      }
      throw `Ошибка запроса: не смогли получить ответ с сервера`
    }

    return result.response
  }
  throw `Ошибка запроса: ${response.status}`
}
