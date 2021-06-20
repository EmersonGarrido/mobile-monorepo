import { api, baseUrl } from '@shared/services'
import * as FileSystem from 'expo-file-system'
import { FileSystemUploadType } from 'expo-file-system'

async function UploadReportPictures({ position, baseData, getInfo, token }) {
  const response = await FileSystem.uploadAsync(
    `${baseUrl}/laudo/pictures`,
    getInfo.uri,
    {
      uploadType: FileSystemUploadType.MULTIPART,
      httpMethod: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      },
      fieldName: `${position}`,
      mimeType: 'image/png',
      parameters: {
        placa: `${baseData.params.base.placa}`,
        laudo_id: `${baseData.params.base.id}`,
        position: `${position}`
      }
    }
  )

  return response

  // const formData = new FormData()

  // formData.append(position, {
  //   name: position,
  //   uri: getInfo.uri,
  //   type: 'image/png'
  // })

  // formData.append('placa', `${baseData.params.base.placa}`)
  // formData.append('laudo_id', `${baseData.params.base.id}`)
  // formData.append('position', position)

  // const isFormData = await api.post('/laudo/pictures', formData, {
  //   headers: { 'Content-Type': 'multipart/form-data' }
  // })

  // return isFormData
}

export default UploadReportPictures
